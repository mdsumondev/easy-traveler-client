import Link from "next/link"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "My Bookings", href: "/bookings" },
  { label: "My Profile", href: "/profile" },
]

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
]

const contactLinks = [
  { label: "786 901 1622", href: "tel:+17869011622" },
  { label: "info@wanderland.com", href: "mailto:info@wanderland.com" },
]

function XIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z" />
    </svg>
  )
}

function LinkedInIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4" />
      <rect width={4} height={12} x={2} y={9} />
      <circle cx={4} cy={4} r={2} />
    </svg>
  )
}

function InstagramIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
    </svg>
  )
}

const socialLinks = [
  { label: "X (Twitter)", href: "#", icon: XIcon },
  { label: "LinkedIn", href: "#", icon: LinkedInIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
] satisfies Array<{
  label: string
  href: string
  icon: React.ComponentType<React.ComponentProps<"svg">>
}>

function FooterLinkColumn({
  heading,
  links,
}: {
  heading: string
  links: Array<{ label: string; href: string }>
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
        {heading}
      </h3>
      <ul className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full bg-neutral-950 text-neutral-300">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {/* Brand block */}
        <p className="font-serif text-5xl font-bold tracking-tight text-white sm:text-6xl">
          Wanderlast
        </p>
        <p className="mt-4 max-w-md text-sm text-neutral-400 sm:text-base">
          Your gateway to extraordinary travel experiences around the world.
        </p>

        {/* Link columns */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              Newsletter
            </h3>
            <p className="mt-5 text-sm text-neutral-400">
              Subscribe for exclusive travel deals and inspiration.
            </p>
            <form className="relative mt-5 max-w-xs">
              <label htmlFor="footer-newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="footer-newsletter"
                type="email"
                name="email"
                required
                placeholder="Enter email"
                className="h-11 w-full rounded-lg border border-transparent bg-white/10 pl-4 pr-12 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-white/30"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="size-4"
                  aria-hidden
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </button>
            </form>
          </div>

          <FooterLinkColumn heading="Quick Links" links={quickLinks} />
          <FooterLinkColumn heading="Support" links={supportLinks} />
          <FooterLinkColumn heading="Contact Us" links={contactLinks} />
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 sm:flex-row">
          <p className="text-xs text-neutral-500">
            © 2026 Wanderlast. All rights reserved.
          </p>
          <ul className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <li key={social.label}>
                <Link
                  href={social.href}
                  aria-label={social.label}
                  className="text-neutral-400 transition-colors hover:text-white"
                >
                  <social.icon className="size-5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
