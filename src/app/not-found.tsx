import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { getContent } from "@/lib/content";

export default async function NotFound() {
  const content = await getContent("notFoundPage");
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">{content.heading}</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            {content.message}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
