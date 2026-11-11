import { getContent } from "@/lib/content";
import EventPlanningView from "./event-planning-view";

export default async function EventPlanningPage() {
  const content = await getContent("eventPlanningPage");
  return <EventPlanningView content={content} />;
}
