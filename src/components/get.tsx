import { z } from "zod";

export async function get<T>(url: string, zodSchema: z.ZodType<T>) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("failed to fetch data");
  }
  const data = (await response.json()) as unknown;
  try {
    return zodSchema.parse(data);
  } catch (error) {
    throw new Error("Invalid data received from server.");
  }
}

// const rawDataBlogPostSchema = z.object({
//   id: z.number(),
//   userId: z.number(),
//   title: z.string(),
//   body: z.string(),
// });

// const data = await get(
//   "https://jsonplaceholder.typicode.com/posts",
//   z.array(rawDataBlogPostSchema)
// );

// data[0].userId;
