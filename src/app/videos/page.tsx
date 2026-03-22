"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";

const videos = [
  { id: 1, title: "Impact Auctions Overview", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 2, title: "Live Auction Highlight", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 3, title: "Fund-A-Need Strategy", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 4, title: "Virtual Event Demo", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 5, title: "Client Testimonial", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: 6, title: "Event Planning Tips", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="section-pad bg-muted" data-testid="section-page-hero">
      <div className="container-tight">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="display-font text-4xl font-extrabold tracking-tight text-primary md:text-5xl" data-testid="text-page-title">
            {title}
          </h1>
          <p className="mt-4 text-secondary" data-testid="text-page-subtitle">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Videos() {
  return (
    <div className="min-h-dvh bg-background" data-testid="page-videos">
      <SiteHeader />
      <PageHero
        title="Event Highlights"
        subtitle="See our team in action and learn more about our fundraising strategies."
      />

      <section className="section-pad" data-testid="section-videos-grid">
        <div className="container-tight">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <div key={video.id} className="space-y-3" data-testid={`video-card-${video.id}`}>
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={video.url}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                    data-testid={`iframe-video-${video.id}`}
                  />
                </div>
                <h3 className="display-font text-lg font-semibold text-primary" data-testid={`text-video-title-${video.id}`}>
                  {video.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <SiteFooter />
    </div>
  );
}
