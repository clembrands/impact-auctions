import { getContent } from "@/lib/content";
import FundANeedView from "./fund-a-need-view";

export default async function FundANeedPage() {
  const content = await getContent("fundANeedPage");
  return <FundANeedView content={content} />;
}
