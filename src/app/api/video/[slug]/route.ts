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
    // For private blob URLs, we need to use the Vercel Blob API with authentication
    const response = await fetch(videoUrl, {
      headers: {
        "x-vercel-blob-token": process.env.BLOB_READ_WRITE_TOKEN || "",
      },
      // Allow streaming without buffering
      cf: {
        cacheTtl: 31536000,
        cacheEverything: true,
      } as any,
    });

    if (!response.ok) {
      console.error("[v0] Failed to fetch video:", response.status, response.statusText);
      return NextResponse.json(
        { error: `Failed to fetch video: ${response.statusText}` },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type") || "video/mp4";
    const contentLength = response.headers.get("content-length");

    const headers: HeadersInit = {
      "Content-Type": contentType,
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=31536000, immutable",
    };

    if (contentLength) {
      headers["Content-Length"] = contentLength;
    }

    return new NextResponse(response.body, { headers, status: 200 });
  } catch (error) {
    console.error("[v0] Error streaming video:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
