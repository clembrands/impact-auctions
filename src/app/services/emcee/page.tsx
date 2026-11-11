import { getContent } from "@/lib/content";
import EmceeView from "./emcee-view";

export default async function EmceePage() {
  const content = await getContent("emceePage");
  return <EmceeView content={content} />;
}
