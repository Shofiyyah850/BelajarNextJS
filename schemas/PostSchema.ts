import * as z from 'zod'
export const PostSchema = z.object({
    title: z.string()
})

export type PostSchemaType = z.infer<typeof PostSchema>