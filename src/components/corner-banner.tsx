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
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 160px 160px 0",
          borderColor: `transparent #212D48 transparent transparent`,
          transition: "border-color 0.2s ease",
        }}
        className="hover-triangle"
      />
      {/* Label — rotated 45° and positioned in the triangle corner */}
      <span
        style={{
          position: "absolute",
          top: "36px",
          right: "-18px",
          width: "140px",
          textAlign: "center",
          transform: "rotate(45deg)",
          color: "#D4C4A8",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          lineHeight: 1.25,
          pointerEvents: "none",
          userSelect: "none",
          fontFamily: "var(--font-display)",
        }}
      >
        Live Auction
        <br />
        Packages
      </span>
    </Link>
  );
}
