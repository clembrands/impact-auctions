"use client";

import { useState } from "react";
import Image from "next/image";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import CtaBanner from "@/components/cta-banner";
import TestimonialCarousel from "@/components/testimonial-carousel";

const videos = [
  { id: 1, title: "Impact Auctions Overview", youtubeId: "nCZ2Q8G_c68" },
  { id: 2, title: "Live Auction Highlight", youtubeId: "PIp9e0mYu9c" },
  { id: 3, title: "Fund-A-Need Strategy", youtubeId: "tKbbwtWI2go" },
  { id: 4, title: "Client Testimonial", youtubeId: "p2RvTQEG0FU" },
];

function VideoCard({ video }: { video: (typeof videos)[number] }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;

  return (
    <div className="space-y-3" data-testid={`video-card-${video.id}`}>
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-black relative">
        {isPlaying ? (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
            data-testid={`iframe-video-${video.id}`}
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            className="w-full h-full relative group cursor-pointer"
            aria-label={`Play ${video.title}`}
            data-testid={`btn-play-video-${video.id}`}
          >
            <Image
              src={thumbnailUrl}
              alt={video.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>
      <h3 className="display-font text-lg font-semibold text-primary" data-testid={`text-video-title-${video.id}`}>
        {video.title}
      </h3>
    </div>
  );
}

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
          <div className="grid gap-8 md:grid-cols-2">
            {videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-muted" data-testid="section-testimonials">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="display-font text-3xl font-extrabold tracking-tight text-primary" data-testid="text-testimonials-title">
              Testimonials
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      <CtaBanner />
      <SiteFooter />
    </div>
  );
}
