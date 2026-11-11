import { getContent } from "@/lib/content";
import SilentAuctionsView from "./silent-auctions-view";

export default async function SilentAuctionsPage() {
  const content = await getContent("silentAuctionsPage");
  return <SilentAuctionsView content={content} />;
}
