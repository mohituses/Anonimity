import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(2, "Username must be of atleast 2 characters")
    .max(15, "Username cannot be longer than 15 characters")
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain any special characters")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must be atleast 6 characters"})

})