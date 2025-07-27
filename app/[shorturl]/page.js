import { redirect } from "next/navigation"
import clientPromise from "@/db"


export default async function Page({ params }) {
  const { shorturl } = await params
  let client = await clientPromise;
  let db = client.db("bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl: shorturl });
  if (doc) {
    redirect(doc.url)
  }else{
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
  }
}