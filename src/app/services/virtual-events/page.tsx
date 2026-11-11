import { getContent } from "@/lib/content";
import VirtualEventsView from "./virtual-events-view";

export default async function VirtualEventsPage() {
  const content = await getContent("virtualEventsPage");
  return <VirtualEventsView content={content} />;
}
