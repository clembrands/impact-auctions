import { NextRequest, NextResponse } from "next/server";

const VIDEOS: Record<string, string> = {
  "brilora-fertility-gala-2026":
    "https://l9jfvjfwkmkpfpni.private.blob.vercel-storage.com/California%2C%20you%20were%20a%20DREAM%20come%20true%E2%80%A6%20%E2%9C%A8This%20night%20wasn%E2%80%99t%20about%20the%20numbers%2C%20it%20was%20about%20the%20i.mp4",
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const videoUrl = VIDEOS[slug];

  if (!videoUrl) {
    return NextResponse.json({ error: "Video not found" }, { status: 404 });
  }

  try {
    const response = await fetch(videoUrl, {
      headers: {
        Authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch video" },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type") || "video/mp4";
    const contentLength = response.headers.get("content-length");

    const headers: HeadersInit = {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    };

    if (contentLength) {
      headers["Content-Length"] = contentLength;
    }

    return new NextResponse(response.body, { headers });
  } catch (error) {
    console.error("Error streaming video:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
