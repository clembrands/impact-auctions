import { getContent } from "@/lib/content";
import EventPlanningEmceeView from "./event-planning-emcee-view";

export default async function EventPlanningEmceePage() {
  const content = await getContent("eventPlanningEmceePage");
  return <EventPlanningEmceeView content={content} />;
}
