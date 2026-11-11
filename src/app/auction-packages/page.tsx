import { getContent } from "@/lib/content";
import AuctionPackagesView from "./auction-packages-view";

export default async function AuctionPackagesPage() {
  const content = await getContent("auctionPackagesPage");
  return <AuctionPackagesView content={content} />;
}
