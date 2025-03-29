import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
// import z, { string } from 'zod';
import { createBlogInput,updateBlogInput } from "@divyanshnahar15/medium-common";

// const createBlogInput = z.object({
//     title: string(),
//     content: string()
// })


// const updateBlogInput = z.object({
//     title: string(),
//     content: string(),
//     id: string()
// })


export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string
        JWT_SECRET : string
    },
    Variables:{
        userId : string

    }  
}>();

blogRouter.use('/*', async (c,next)=>{
    const authHeader = c.req.header('authorization') || "";
    // const authHeader = c.req.query('q') || "";
    const user = await verify(authHeader , c.env.JWT_SECRET);
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);

        if (user && typeof user === 'object' && 'id' in user) {
            c.set("userId", user.id as string);
            await next(); // Proceed to the next middleware or route handler
        } else {
            c.status(403);
            return c.json({
                message: "You are not logged in",
            });
        }
    } catch (error) {
        c.status(403);
        return c.json({
            message: "Invalid or expired token",
        });
    }

})
//---------------------------------------------------------------------------------------
blogRouter.post('/', async (c) => {

    const body = await c.req.json();
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct safeparse error"
        });
    }
    const authorId = c.get('userId');
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
    try{
        const blog = await prisma.blog.create({
            data: {
              title: body.title,
              content: body.content,
              authorId: Number(authorId)
              
            }
            });
            return c.json({
                id : blog.id
            })
        
    }catch(e){
        console.log(e);
        return c.json({
            "msg" : "something unexpected occured"     
        })

    }
    
  })
  //---------------------------------------------------------------------------------------
  blogRouter.put('/',async (c) => { 
    const body = await  c.req.json();
    const { success } = updateBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Inputs not correct"
        });
    }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())
    try{
        const blog = await prisma.blog.update({
            where : {
                id : body.id
            },
            data: {
              title: body.title,
              content: body.content,
            }
            })
            return c.json({
                id : blog.id
            })
        
    }catch(e){
        c.status(411);
        console.log(e);
        return c.json({
            "msg" : "something unexpected occured"
        })

    }  })
  //---------------------------------------------------------------------------------------
  blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blogs = await prisma.blog.findMany({
            select: {
                title: true,
                content: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        })
        return c.json({
            blogs
        })
    } catch(e) {
        c.status(500);
        console.error(e);
        return c.json({
            msg: "Failed to fetch blogs"
        });
    }
  })
  //---------------------------------------------------------------------------------------
  blogRouter.get('/:id', async (c) => {
    const id = c.req.param('id');
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    try {
        const blogs = await prisma.blog.findFirst({
            where: {
                id: Number(id)
            }
        })
        
        if (!blogs) {
            c.status(404);
            return c.json({
                "msg": "Blog not found"
            });
        }
        
        return c.json({
            blogs
        })
    } catch(e) {
        c.status(411);
        console.log(e);
        return c.json({
            "msg": "something unexpected occurred"
        })
    }   
})
  //---------------------------------------------------------------------------------------
  