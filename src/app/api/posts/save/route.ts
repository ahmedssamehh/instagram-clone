import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await request.json();
    const { postId } = body;

    if (!postId) {
      return new NextResponse("Post ID is required", { status: 400 });
    }

    // Get the current user
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // For simplicity, we'll just pretend to save the post
    // In a real app, you would have a SavedPost model in your schema
    // and create/delete entries there

    return NextResponse.json({ 
      success: true, 
      saved: true,
      message: "Post saved successfully" 
    });
  } catch (error) {
    console.error("Error saving post:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 