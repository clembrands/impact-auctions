import { getContent } from "@/lib/content";
import HomeView from "./home-view";

export default async function HomePage() {
  const content = await getContent("homePage");
  return <HomeView content={content} />;
}
