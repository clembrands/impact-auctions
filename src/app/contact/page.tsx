import { getContent } from "@/lib/content";
import ContactView from "./contact-view";

export default async function ContactPage() {
  const content = await getContent("contactPage");
  return <ContactView content={content} />;
}
