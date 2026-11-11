import { getContent } from "@/lib/content";
import HeadsOrTailsView from "./heads-or-tails-view";

export default async function HeadsOrTailsPage() {
  const content = await getContent("headsOrTailsPage");
  return <HeadsOrTailsView content={content} />;
}
