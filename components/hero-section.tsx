import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2400&auto=format&fit=crop"

const searchFields = [
  {
    name: "location",
    label: "Location",
    placeholder: "Address, City or Zip",
    type: "text",
  },
  {
    name: "dates",
    label: "Date/Duration",
    placeholder: "Anytime/3 Days",
    type: "text",
  },
  {
    name: "budget",
    label: "Budget",
    placeholder: "$0-$3000",
    type: "text",
  },
  {
    name: "people",
    label: "People",
    placeholder: "5-10",
    type: "text",
  },
]

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] w-full flex-col">
      {/* Background image + overlay */}
      <Image
        src={HERO_IMAGE}
        alt="Aerial view of a turquoise coastal bay"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/40 to-black/60"
      />

      {/* Copy + CTAs */}
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <h1 className="max-w-4xl text-balance font-heading text-5xl leading-[1.05] font-bold text-white sm:text-6xl lg:text-7xl">
          Discover Your Next Adventure
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base text-white/85 sm:text-lg">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>
        <div className="mt-10 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Button
            size="lg"
            className="h-11 w-full px-8 text-xs font-semibold tracking-widest uppercase sm:w-auto"
          >
            Explore Now
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-11 w-full border-white/40 bg-white/10 px-8 text-xs font-semibold tracking-widest text-white uppercase hover:bg-white/20 sm:w-auto dark:bg-white/10 dark:hover:bg-white/20"
          >
            View Destination
          </Button>
        </div>
      </div>

      {/* Search bar */}
      <div className="w-full">
        <form
          action="/destinations"
          className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-px border-t border-white/20 bg-white/15 backdrop-blur-sm sm:grid-cols-4 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]"
        >
          {searchFields.map((field) => (
            <div
              key={field.name}
              className="flex flex-col gap-1 px-5 py-3.5"
            >
              <label
                htmlFor={field.name}
                className="text-sm font-semibold text-white"
              >
                {field.label}
              </label>
              <Input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="h-auto border-0 bg-transparent px-0 text-white placeholder:text-white/60 focus-visible:ring-0 dark:bg-transparent"
              />
            </div>
          ))}
          <Button
            type="submit"
            className="col-span-2 h-auto min-h-12 rounded-none py-4 text-sm font-semibold tracking-wide uppercase sm:col-span-4 lg:col-span-1 lg:px-12"
          >
            Search
          </Button>
        </form>
      </div>
    </section>
  )
}
