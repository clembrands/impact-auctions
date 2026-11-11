import { getContent } from "@/lib/content";
import ServicesView from "./services-view";

export default async function ServicesPage() {
  const content = await getContent("servicesPage");
  return <ServicesView content={content} />;
}
