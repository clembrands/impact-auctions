"use client";

import { useMemo, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { X, Menu, ChevronDown } from "lucide-react";

const servicesDropdownItems = [
  { href: "/services/live-auctions", label: "Live Auctions" },
  { href: "/services/fund-a-need", label: "Fund-A-Need" },
  { href: "/services/event-planning-emcee", label: "Event Planning & Emcee" },
  { href: "https://www.myamoretravel.com/impact-auctions", label: "Live Auction Packages", external: true },
] as const;

const navItems = [
  { href: "/", label: "Home", testId: "link-nav-home" },
  { href: "/about", label: "About", testId: "link-nav-about" },
  { href: "/services", label: "Services", testId: "link-nav-services", hasDropdown: true },
  { href: "/videos", label: "Videos", testId: "link-nav-videos" },
  { href: "/blog", label: "Blog", testId: "link-nav-blog" },
  { href: "/contact", label: "Contact", testId: "link-nav-contact" },
];

function DesktopNavLink({
  href,
  label,
  testId,
  hasDropdown,
  pathname,
}: {
  href: string;
  label: string;
  testId: string;
  hasDropdown?: boolean;
  pathname: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const active = pathname === href || (hasDropdown && pathname.startsWith(href)) || (hasDropdown && pathname === "/auction-packages");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 150);
  };

  if (hasDropdown) {
    return (
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={href} data-testid={testId}>
          <span
            className={cn(
              "display-font group relative cursor-pointer text-[15px] font-medium tracking-[0.5px] transition-colors inline-flex items-center gap-1",
              active ? "text-white" : "text-white/80 hover:text-accent",
            )}
          >
            {label}
            <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", isHovered ? "rotate-180" : "")} strokeWidth={3} />
            <span
              className={cn(
                "absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-200",
                active ? "scale-x-100" : "group-hover:scale-x-100",
              )}
              aria-hidden="true"
            />
          </span>
        </Link>

        {/* Dropdown Menu */}
        <div
          className={cn(
            "absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64 transition-all duration-200 ease-in-out z-50",
            isHovered ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-2 invisible"
          )}
        >
          <div className="bg-white rounded-lg shadow-lg border border-white/10 overflow-hidden py-2">
            {servicesDropdownItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={"external" in item && item.external ? "_blank" : undefined}
                rel={"external" in item && item.external ? "noopener noreferrer" : undefined}
              >
                <div
                  className={cn(
                    "block px-4 py-3 text-sm font-medium text-primary hover:bg-muted transition-colors cursor-pointer",
                    pathname === item.href ? "bg-muted font-semibold text-primary" : ""
                  )}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={href} data-testid={testId}>
      <span
        className={cn(
          "display-font group relative cursor-pointer text-[15px] font-medium tracking-[0.5px] transition-colors",
          active ? "text-white" : "text-white/80 hover:text-accent",
        )}
      >
        {label}
        <span
          className={cn(
            "absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-200",
            active ? "scale-x-100" : "group-hover:scale-x-100",
          )}
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const activeLabel = useMemo(() => {
    const match = navItems.find((i) => i.href === pathname);
    return match?.label ?? "Menu";
  }, [pathname]);

  const leftNavItems = navItems.slice(0, 3);
  const rightNavItems = navItems.slice(3);

  return (
    <header
      className="sticky top-0 z-50 w-full bg-primary text-primary-foreground"
      data-testid="header-site"
    >
      <div className="container-tight flex min-h-24 items-center py-4">
        {/* Desktop: split nav + centered logo */}
        <div className="hidden w-full items-center md:flex" data-testid="header-desktop-layout">
          <nav className="flex flex-1 items-center justify-end gap-8" data-testid="nav-primary-left">
            {leftNavItems.map((i) => (
              <DesktopNavLink
                key={i.href}
                href={i.href}
                label={i.label}
                testId={i.testId}
                hasDropdown={i.hasDropdown}
                pathname={pathname}
              />
            ))}
          </nav>

          <Link href="/" data-testid="link-home-logo">
            <div className="mx-10 flex items-center justify-center">
              <img
                src="/images/logo-new.png"
                alt="Impact Auctions"
                className="h-28 w-auto max-w-[520px]"
                data-testid="img-logo-header"
              />
            </div>
          </Link>

          <nav className="flex flex-1 items-center justify-start gap-8" data-testid="nav-primary-right">
            {rightNavItems.map((i) => (
              <DesktopNavLink
                key={i.href}
                href={i.href}
                label={i.label}
                testId={i.testId}
                hasDropdown={i.hasDropdown}
                pathname={pathname}
              />
            ))}
          </nav>
        </div>

        {/* Mobile: logo + menu button */}
        <div className="flex w-full items-center gap-4 md:hidden" data-testid="header-mobile-layout">
          <Link href="/" data-testid="link-home-logo-mobile">
            <div className="flex items-center">
              <img
                src="/images/logo-new.png"
                alt="Impact Auctions"
                className="h-20 w-auto max-w-[320px]"
                data-testid="img-logo-header-mobile"
              />
            </div>
          </Link>

          <div className="ml-auto">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/25 bg-white/10 px-3 text-[15px] font-medium tracking-[0.5px] text-white"
              data-testid="button-mobile-menu-open"
              aria-haspopup="dialog"
              aria-expanded={open}
            >
              <Menu className="h-4 w-4" aria-hidden="true" />
              <span data-testid="text-mobile-menu-label">{activeLabel}</span>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          data-testid="dialog-mobile-menu"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            data-testid="button-mobile-menu-backdrop"
            aria-label="Close menu"
          />
          <div
            className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-card-border bg-background shadow-xl overflow-y-auto"
            data-testid="panel-mobile-menu"
          >
            <div className="flex h-16 items-center justify-between border-b border-card-border px-4">
              <div className="display-font text-sm font-semibold text-primary" data-testid="text-mobile-menu-title">
                Navigation
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-lg border border-card-border bg-background text-primary"
                data-testid="button-mobile-menu-close"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="p-2" data-testid="list-mobile-menu">
              {navItems.map((i) => {
                if (i.hasDropdown) {
                  return (
                    <div key={i.href} className="space-y-1">
                      <Link href={i.href}>
                         <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className={cn(
                            "w-full rounded-lg px-4 py-3 text-left text-sm font-bold transition-colors",
                            pathname === i.href
                              ? "bg-muted text-primary"
                              : "text-primary hover:bg-muted"
                          )}
                        >
                          {i.label}
                        </button>
                      </Link>
                      <div className="pl-4 space-y-1 border-l-2 border-muted ml-4 my-2">
                        {servicesDropdownItems.map(subItem => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            target={"external" in subItem && subItem.external ? "_blank" : undefined}
                            rel={"external" in subItem && subItem.external ? "noopener noreferrer" : undefined}
                          >
                            <button
                              type="button"
                              onClick={() => setOpen(false)}
                              className={cn(
                                "w-full rounded-lg px-4 py-2 text-left text-sm font-medium transition-colors",
                                pathname === subItem.href
                                  ? "bg-muted text-primary"
                                  : "text-secondary hover:bg-muted hover:text-primary"
                              )}
                            >
                              {subItem.label}
                            </button>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={i.href}
                    href={i.href}
                    data-testid={`link-mobile-${i.label.toLowerCase()}`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className={cn(
                        "w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors",
                        pathname === i.href
                          ? "bg-muted text-primary"
                          : "text-secondary hover:bg-muted hover:text-primary",
                      )}
                    >
                      {i.label}
                    </button>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
