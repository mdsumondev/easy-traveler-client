import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  MapPin,
  Pencil,
  Star,
  Trash2,
} from "lucide-react";

import { DestinationType } from "@/app/type/destinationType";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const generateStaticParams = async (): Promise<{ id: string[] }[]> => {
  const res = await fetch(`http://localhost:5000/all-destination`, {
    next: {
      revalidate: 60,
    },
  });

  const books = await res.json();

  return books.map((book: { _id: string }) => ({
    id: String(book._id),
  }));
};

const highlightItems = [
  "Luxury beachfront accommodation",
  "Traditional Balinese spa treatment",
  "Sunrise trek to Mount Batur",
  "Visit Uluwatu Temple at sunset",
  "Private beach dinner experience",
];

const packageIncludes = [
  "Free cancellation up to 7 days",
  "Travel insurance included",
  "24/7 customer support",
];

const destinationDetailsData = async (id: string): Promise<DestinationType> => {
  const res = await fetch(`http://localhost:5000/all-destination/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};

const DestinationDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const destinationDetails = await destinationDetailsData(id);

  console.log(destinationDetails);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      {/* Top bar: back link + actions */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/destination"
          className="inline-flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Back to Destinations
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Pencil data-icon="inline-start" />
            Edit
          </Button>
          <Button
            variant="outline"
            className="text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:text-destructive"
          >
            <Trash2 data-icon="inline-start" />
            Cancel
          </Button>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative mt-6 aspect-[5/2] w-full">
        <Image
          src={destinationDetails.imageUrl}
          alt={destinationDetails.name}
          fill
          priority
          sizes="(min-width: 1152px) 1152px, 100vw"
          className="object-cover"
        />
      </div>

      <hr className="mt-8 border-border" />

      {/* Body: details + booking sidebar */}
      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_340px]">
        {/* Details column */}
        <div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" />
            {destinationDetails.country}
          </div>
          <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            {destinationDetails.name}
          </h1>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="flex items-center gap-1">
              <Star className="size-4 fill-current text-green-600" />
              <span className="font-semibold">
                {destinationDetails.rating ?? "4.9"}
              </span>
              <span className="text-muted-foreground">(234 reviews)</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CalendarDays className="size-4" />
              {destinationDetails.duration ?? "7 Days / 6 Nights"}
            </span>
          </div>

          <h2 className="mt-8 text-lg font-semibold">Overview</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {destinationDetails.description}
          </p>

          <h2 className="mt-8 text-lg font-semibold">Highlights</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {destinationDetails.description}
          </p>
          <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
            {highlightItems.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2 text-sm">
                <Check className="size-4 shrink-0 text-green-600" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Booking sidebar */}
        <Card className="h-fit gap-0 py-0">
          <div className="flex flex-col p-5">
            <p className="text-sm text-muted-foreground">Starting from</p>
            <p className="mt-1 text-3xl font-semibold text-primary">
              ${destinationDetails.price}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">per person</p>
            <div className="mt-5 rounded-md border border-input bg-muted/40 px-3 py-2.5 text-sm text-muted-foreground">
              {destinationDetails.departureDate}
            </div>
            <Button className="mt-5 w-full">
              Book Now
              <ArrowRight data-icon="inline-end" />
            </Button>
            <ul className="mt-5 flex flex-col gap-2.5 text-sm">
              {packageIncludes.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check className="size-4 shrink-0 text-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default DestinationDetailsPage;
