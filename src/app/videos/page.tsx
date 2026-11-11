import { getContent } from "@/lib/content";
import VideosView from "./videos-view";

export default async function VideosPage() {
  const content = await getContent("videosPage");
  return <VideosView content={content} />;
}
