import { NextRequest, NextResponse } from "next/server";

const VIDEOS: Record<string, string> = {
  "brilora-fertility-gala-2026":
    "https://l9jfvjfwkmkpfpni.private.blob.vercel-storage.com/California,%20you%20were%20a%20DREAM%20come%20true%E2%80%A6%20%E2%9C%A8This%20night%20wasn%E2%80%99t%20about%20the%20numbers,%20it%20was%20about%20the%20i.mp4?vercel-blob-valid-until=1782149942160&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfbDlqRlZKRldLTUtQZlBuaSIsIm93bmVySWQiOiJ0ZWFtX1VVQWNBR3lpaTMwRlpkUHgzaHJ3VVJ0UCIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgyMTkzMDczMjU4LCJpYXQiOjE3ODIxNDk4NzMzMDd9.nmxHJITiJwV1VlizTvZaT8320DOd-MCQegLVtIMUvMY&vercel-blob-signature=FROwzO5xs31U0PPo4uHv-ShJD0S0ARGCgSYCGUmCn_4",
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

  const rangeHeader = request.headers.get("range");

  try {
    const fetchHeaders: HeadersInit = {};
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
