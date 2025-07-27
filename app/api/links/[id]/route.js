import { NextResponse } from 'next/server';
import clientPromise from "@/db";
import { ObjectId } from 'mongodb';

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const client = await clientPromise;
    const db = client.db("bitlinks");
    await db.collection("url").findOneAndDelete({ _id: new ObjectId(id) });
    return NextResponse.json({ message: "Link deleted successfully" });
  } catch (e) {
    return NextResponse.json(
      { error: 'Failed to delete link', details: e.message },
      { status: 500 }
    );
  }
}
