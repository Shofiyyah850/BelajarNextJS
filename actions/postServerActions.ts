"use server"

import { PostSchemaType } from "@/schemas/PostSchema"

export const createProduct = async (values: PostSchemaType) => {
    console.log("values:", values);
}