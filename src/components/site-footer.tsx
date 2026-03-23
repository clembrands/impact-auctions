import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

function FooterLink({
  href,
  label,
  testId,
}: {
  href: string;
  label: string;
  testId: string;
}) {
  return (
    <Link href={href} data-testid={testId}>
      <span className="cursor-pointer hover:text-white">{label}</span>
    </Link>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground" data-testid="footer-site">
      <div className="container-tight section-pad">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="space-y-3">
            <div className="flex items-center gap-3" data-testid="footer-brand">
              <img
                src="/images/logo-new.png"
                alt="Impact Auctions"
                className="h-24 w-auto max-w-[520px]"
                data-testid="img-logo-footer"
              />
            </div>
            <p className="max-w-xs text-sm/6 text-white/80" data-testid="text-footer-about">
              Professional fundraising auctioneers based in North Carolina, serving nonprofits
              nationwide.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="display-font text-sm font-semibold" data-testid="text-footer-links">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/85">
              <li>
                <FooterLink href="/" label="Home" testId="link-footer-home" />
              </li>
              <li>
                <FooterLink href="/about" label="About" testId="link-footer-about" />
              </li>
              <li>
                <FooterLink href="/services" label="Services" testId="link-footer-services" />
              </li>
              <li>
                <a
                  href="https://www.myamoretravel.com/impact-auctions"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-footer-packages"
                  className="cursor-pointer hover:text-white"
                >
                  Live Auction Packages
                </a>
              </li>
              <li>
                <FooterLink href="/videos" label="Videos" testId="link-footer-videos" />
              </li>
              <li>
                <FooterLink href="/contact" label="Contact" testId="link-footer-contact" />
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="display-font text-sm font-semibold" data-testid="text-footer-contact">
              Contact
            </h3>
            <div className="space-y-2 text-sm text-white/85">
              <p data-testid="text-footer-phone">407-267-8988</p>
              <p data-testid="text-footer-email">debbie@debbieimpactauctions.org</p>
            </div>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6 text-sm text-white/70">
          <p data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Impact Auctions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
