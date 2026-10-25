import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"

const testimonials = [
  {
    quote:
      '"The Bali Trip Was Absolutely Magical! Every Detail Was Perfectly Planned. The Resorts Were Luxurious And The Cultural Experiences Were Unforgettable."',
    name: "Michael Chen",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
  },
  {
    quote:
      '"Swiss Alps Adventure Exceeded All Expectations. The Mountain Views Were Breathtaking And Our Guide Was Incredibly Knowledgeable. Highly Recommend!"',
    name: "Sarah Johnson",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop",
  },
  {
    quote:
      '"Kyoto In Cherry Blossom Season Was A Dream Come True. The Food, The Temples, The Hospitality — Everything Was Flawless From Start To Finish."',
    name: "Amara Okafor",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286cf2?q=80&w=600&auto=format&fit=crop",
  },
  {
    quote:
      '"Santorini Was Pure Magic. Our Sunset Sailing Trip Was The Highlight Of Our Honeymoon. We Cannot Wait To Book Our Next Adventure."',
    name: "David Martinez",
    location: "Madrid, Spain",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
]

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="w-full bg-white py-16 sm:py-20 lg:py-24 dark:bg-background"
    >
      <Carousel
        opts={{ align: "start", loop: true }}
        className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2
              id="testimonials-heading"
              className="font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              What Travelers Say
            </h2>
            <p className="mt-2 text-sm text-muted-foreground sm:text-base">
              Real experiences from our happy travelers
            </p>
          </div>
          <div className="flex items-center gap-2">
            <CarouselPrevious
              size="icon"
              className="static translate-none text-muted-foreground"
            />
            <CarouselNext
              size="icon"
              className="static translate-none text-muted-foreground"
            />
          </div>
        </div>

        <CarouselContent className="mt-8 pb-2">
          {testimonials.map((testimonial) => (
            <CarouselItem key={testimonial.name} className="basis-full md:basis-1/2">
              <Card className="h-full flex-row gap-0 overflow-hidden rounded-lg py-0 shadow-sm ring-foreground/5">
                <div className="flex flex-1 flex-col justify-between gap-6 p-5 sm:p-6">
                  <blockquote className="text-pretty text-base leading-snug text-foreground">
                    {testimonial.quote}
                  </blockquote>
                  <div>
                    <p className="text-primary">
                      <span aria-hidden>— </span>
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <Image
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  width={176}
                  height={320}
                  sizes="(min-width: 768px) 176px, 144px"
                  className="w-36 self-stretch object-cover sm:w-44"
                />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
