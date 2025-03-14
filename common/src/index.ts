import z, { string } from 'zod';
export const signupInput = z.object({
    username : string(),
    password : string(),
    name : string().optional()
})


export const signinInput = z.object({
    username : string(),
    password : string(),
    
})


export const createBlogInput = z.object({
    title: string(),
    description: string()
})


export const updateBlogInput = z.object({
    title: string(),
    description: string(),
    id: string()
})




export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
