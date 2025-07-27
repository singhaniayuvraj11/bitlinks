import clientPromise from "@/db";
import { revalidatePath } from "next/cache";

export async function POST(request) {
  const body = await request.json();
  let client = await clientPromise;
  let db = client.db("bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl: body.shorturl });
  if (doc) {
    return Response.json({
      success: false,
      error: true,
      message: "URL already exists ",
    });
  }

  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
    
  });
  revalidatePath("/shorten");
  return Response.json({
    success: true,
    error: false,
    message: "URL generated successfulyy",
  });
}
