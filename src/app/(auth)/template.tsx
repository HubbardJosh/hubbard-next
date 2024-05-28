"use client";

import { NavRoute } from "@/components/navbar/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

const navLinks: NavRoute[] = [
  { label: "Register", href: "/register" },
  { label: "Login", href: "/login" },
  { label: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // needs to be a client component to use this
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input
          className="border"
          type="text"
          value={input}
          onChange={(val) => setInput(val.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <Link
            href={link.href}
            key={link.href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.label}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
