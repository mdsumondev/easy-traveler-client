import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, MapPin, Star } from "lucide-react";

import type { DestinationType } from "@/app/type/destinationType";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function DestinationCard({
  destination,
}: {
  destination: DestinationType;
}) {
  const { _id, name, country, imageUrl, price, duration, rating } = destination;

  return (
    <Card className="group w-full gap-0 py-0">
      {/* Image with rating badge */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(min-width: 1024px) 384px, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {rating !== undefined ? (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-md bg-background/95 px-2.5 py-1 text-sm font-medium ring-1 ring-foreground/10">
            {rating.toFixed(1)}
            <Star className="size-4 fill-current" />
          </div>
        ) : null}
      </div>

      {/* Details */}
      <div className="flex flex-col gap-3 p-4 sm:p-5">
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-3.5" />
          {country}
        </div>

        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-heading text-xl leading-snug font-semibold sm:text-2xl">
            {name}
          </h3>
          <p className="text-xl font-semibold whitespace-nowrap sm:text-2xl">
            ${price}
            <span className="text-xs font-normal text-muted-foreground">
              /Person
            </span>
          </p>
        </div>

        {duration ? (
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <CalendarDays className="size-3.5" />
            {duration}
          </div>
        ) : null}
      </div>

      {/* Book now */}
      <div className="border-t px-4 py-3 sm:px-5">
        <Button
          variant="link"
          render={<Link href={`/destination/${_id}`} />}
          className="h-auto p-0 font-serif text-sm italic tracking-widest uppercase"
        >
          Book Now
          <ArrowUpRight data-icon="inline-end" />
        </Button>
      </div>
    </Card>
  );
}
