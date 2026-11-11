import { getContent } from "@/lib/content";
import LiveAuctionsView from "./live-auctions-view";

export default async function LiveAuctionsPage() {
  const content = await getContent("liveAuctionsPage");
  return <LiveAuctionsView content={content} />;
}
