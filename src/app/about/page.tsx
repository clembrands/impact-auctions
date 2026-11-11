import { getContent } from "@/lib/content";
import AboutView from "./about-view";

export default async function AboutPage() {
  const content = await getContent("aboutPage");
  return <AboutView content={content} />;
}
