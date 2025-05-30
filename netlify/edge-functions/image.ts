import { getDeployStore } from "@netlify/blobs";
import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const uploads = getDeployStore("file-uploads");
  const entry = await uploads.get("image");

  console.log('image', entry, uploads)

  return new Response(entry);
};

export const config = { path: "/image" };