import { NextRequest, NextResponse } from "next/server";

const VIDEOS: Record<string, string> = {
  "brilora-fertility-gala-2026":
    "https://l9jfvjfwkmkpfpni.private.blob.vercel-storage.com/California,%20you%20were%20a%20DREAM%20come%20true%E2%80%A6%20%E2%9C%A8This%20night%20wasn%E2%80%99t%20about%20the%20numbers,%20it%20was%20about%20the%20i.mp4",
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

  const token = process.env.BLOB_READ_WRITE_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "Missing blob token" }, { status: 500 });
  }

  const rangeHeader = request.headers.get("range");

  try {
    const fetchHeaders: HeadersInit = {
      Authorization: `Bearer ${token}`,
    };
    if (rangeHeader) {
      fetchHeaders["Range"] = rangeHeader;
    }

    const response = await fetch(videoUrl, { headers: fetchHeaders });

    if (!response.ok && response.status !== 206) {
      console.error("Failed to fetch video:", response.status, response.statusText);
      return NextResponse.json(
        { error: `Failed to fetch video: ${response.statusText}` },
        { status: response.status }
      );
    }

    const contentType = response.headers.get("content-type") || "video/mp4";
    const contentLength = response.headers.get("content-length");
    const contentRange = response.headers.get("content-range");

    const headers: HeadersInit = {
      "Content-Type": contentType,
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=3600",
    };

    if (contentLength) headers["Content-Length"] = contentLength;
    if (contentRange) headers["Content-Range"] = contentRange;

    return new NextResponse(response.body, {
      status: rangeHeader ? 206 : 200,
      headers,
    });
  } catch (error) {
    console.error("Error streaming video:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
