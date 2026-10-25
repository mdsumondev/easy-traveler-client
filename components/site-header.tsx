"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, UserRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "cn";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destination" },
  { label: "Add Destination", href: "/add-destination" },
  { label: "My Bookings", href: "/bookings" },
  { label: "Admin", href: "/admin" },
];

function isAuthenticatedLinkActive(href: string, pathname: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="relative mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile: hamburger */}
        <div className="flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu />
              <span className="sr-only">Open navigation menu</span>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 gap-0">
              <SheetHeader className="border-b">
                <SheetTitle className="font-serif text-2xl font-bold text-primary">
                  Wanderlast
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Main navigation" className="flex flex-col p-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={<Link href={link.href} />}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted",
                      isAuthenticatedLinkActive(link.href, pathname)
                        ? "text-primary underline underline-offset-4"
                        : "text-foreground",
                    )}
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>
              <SheetFooter className="border-t">
                <SheetClose
                  render={<Button variant="outline" className="w-full" />}
                >
                  <UserRound data-icon="inline-start" />
                  Profile
                </SheetClose>
                <SheetClose
                  render={<Button variant="outline" className="w-full" />}
                >
                  Login
                </SheetClose>
                <SheetClose render={<Button className="w-full" />}>
                  Sign Up
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop: primary navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                isAuthenticatedLinkActive(link.href, pathname)
                  ? "text-primary underline underline-offset-4"
                  : "text-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Logo — always centered */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl font-bold tracking-tight text-primary"
        >
          Wanderlast
        </Link>

        {/* Desktop: auth actions */}
        <div className="hidden items-center gap-1 lg:flex">
          <Button variant="ghost">
            <UserRound data-icon="inline-start" />
            Profile
          </Button>
          <Button variant="ghost" render={<Link href="/login" />}>
            Login
          </Button>
          <Button render={<Link href="/signup" />}>Sign Up</Button>
        </div>

        {/* Mobile: compact sign up */}
        <Button
          size="sm"
          className="lg:hidden"
          render={<Link href="/signup" />}
        >
          Sign Up
        </Button>
      </div>
    </header>
  );
}
