import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-heading" className="w-full bg-black p-3 sm:p-4">
      <div className="relative isolate flex min-h-100 w-full items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?q=80&w=2400&auto=format&fit=crop"
          alt="Aerial view of a plane flying over a tropical coastline"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        {/* Overlay for text readability */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-black/55"
        />

        <div className="flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6">
          <h2
            id="cta-heading"
            className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Ready To Start Your Journey?
          </h2>
          <p className="mt-3 text-pretty text-sm text-white/85 sm:text-base">
            Join thousands of travelers who have discovered the world with us
          </p>
          <Button
            size="lg"
            render={<a href="/destinations" />}
            className="mt-8 h-11 bg-white px-8 text-xs font-semibold text-black tracking-widest uppercase hover:bg-white/90"
          >
            Book Your Trip Today
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>
      </div>
    </section>
  )
}
