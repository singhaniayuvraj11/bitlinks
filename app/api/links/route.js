import { NextResponse } from 'next/server';
import clientPromise from "@/db"; // Importing mongodb.js from @/lib/mongodb
import { ObjectId } from 'mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    
    // Replace "bitlinks" with the name of your database
    const db = client.db("bitlinks"); 

    // Replace "url" with the name of your collection
    const links = await db.collection("url").find({}).toArray(); 
    
    return NextResponse.json({ links });
  } catch (e) {
    console.error('Error fetching links:', e);
    return NextResponse.json({ error: 'Failed to fetch links', details: e.message }, { status: 500 });
  }
}

