"use client";

import Link from "next/link";

export default function CornerBanner() {
  return (
    <Link
      href="/auction-packages"
      aria-label="View Live Auction Packages"
      className="hidden md:block"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: 50,
        width: "160px",
        height: "160px",
        overflow: "hidden",
        pointerEvents: "auto",
      }}
    >
      {/* Triangle fill */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 160px 160px 0",
          borderColor: `transparent hsl(var(--primary)) transparent transparent`,
          transition: "border-color 0.2s ease",
        }}
        className="hover-triangle"
      />
      {/* Label — rotated 45° and positioned in the triangle corner */}
      <div
        style={{
          position: "absolute",
          top: "32px",
          right: "-22px",
          width: "160px",
          textAlign: "center",
          transform: "rotate(45deg)",
          color: "hsl(var(--accent))",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          lineHeight: 1.2,
          pointerEvents: "none",
          userSelect: "none",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        Live Auction
        <br />
        Packages
      </div>
    </Link>
  );
}
