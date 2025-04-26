import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

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

    // Check if the user has already liked the post
    const existingLike = await prisma.like.findFirst({
      where: {
        userId: user.id,
        postId,
      },
    });

    if (existingLike) {
      // Unlike the post
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });

      return NextResponse.json({ message: "Post unliked", liked: false });
    } else {
      // Like the post
      await prisma.like.create({
        data: {
          userId: user.id,
          postId,
        },
      });

      return NextResponse.json({ message: "Post liked", liked: true });
    }
  } catch (error) {
    console.error("Error handling like:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
} 