import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";

/**
 * Optional: makes Sanity edits appear on the live site instantly.
 * Without it, pages refresh automatically within ~60 seconds.
 *
 * Setup (sanity.io/manage → API → Webhooks → Create):
 *   URL:        https://<your-domain>/api/revalidate
 *   Trigger on: Create, Update, Delete
 *   Projection: {_id, _type}
 *   Secret:     same value as the SANITY_REVALIDATE_SECRET env var in Vercel
 */
export async function POST(req: NextRequest) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ message: "SANITY_REVALIDATE_SECRET not set" }, { status: 500 });
  }

  const { isValidSignature, body } = await parseBody<{ _id?: string; _type?: string }>(
    req,
    secret,
  );
  if (!isValidSignature) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 });
  }

  const id = body?._id?.replace(/^drafts\./, "");
  revalidateTag("siteContent");
  if (id) revalidateTag(id);
  return NextResponse.json({ revalidated: true, id });
}
