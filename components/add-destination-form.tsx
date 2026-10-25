"use client";

import Link from "next/link";
import { Save, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const categories = [
  "Beach",
  "Mountain Adventure",
  "City Break",
  "Cultural Heritage",
  "Cruise",
  "Food & Culinary",
  "Wildlife Safari",
] as const;

export function AddDestinationForm() {
  const handleDestinationForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const destinationData = Object.fromEntries(form.entries());

    const res = await fetch("http://localhost:5000/add-destination", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(destinationData),
    });

    const result = await res.json();

    console.log(result);
  };

  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <h1 className="font-heading text-4xl tracking-tight sm:text-5xl">
        Add New Travel Package
      </h1>

      <Card className="mx-auto mt-10 w-full max-w-2xl py-0 sm:mt-14">
        <CardContent className="p-6 sm:p-8">
          <form
            onSubmit={handleDestinationForm}
            className="flex flex-col gap-6"
          >
            {/* Destination Name */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="destination-name">Destination Name</Label>
              <Input
                id="destination-name"
                name="name"
                required
                placeholder="Bali Paradise"
                className="h-10 bg-muted/60"
              />
            </div>

            {/* Country + Category */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="destination-country">Country</Label>
                <Input
                  id="destination-country"
                  name="country"
                  placeholder="Indonesia"
                  className="h-10 bg-muted/60"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="destination-category">Category</Label>
                <Select name="category">
                  <SelectTrigger
                    id="destination-category"
                    className="w-full bg-muted/60 data-[size=default]:h-10"
                  >
                    <SelectValue placeholder="Beach" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price + Duration */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="destination-price">Price (USD)</Label>
                <Input
                  id="destination-price"
                  name="price"
                  type="number"
                  min={0}
                  placeholder="e.g., 1299"
                  className="h-10 bg-muted/60"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="destination-duration">Duration</Label>
                <Input
                  id="destination-duration"
                  name="duration"
                  placeholder="e.g., 7 Days/6 Nights"
                  className="h-10 bg-muted/60"
                />
              </div>
            </div>

            {/* Departure Date */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="departure-date">Departure Date</Label>
              <Input
                id="departure-date"
                name="departureDate"
                type="date"
                className="h-10 bg-muted/60"
              />
            </div>

            {/* Image URL */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="destination-image">Image URL</Label>
              <Input
                id="destination-image"
                name="imageUrl"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="h-10 bg-muted/60"
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="destination-description">Description</Label>
              <Textarea
                id="destination-description"
                name="description"
                placeholder="Describe the travel experience..."
                className="min-h-28 bg-muted/60"
              />
            </div>

            {/* Actions */}
            <div className="mt-2 flex items-center justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                render={<Link href="/" />}
                className="text-destructive hover:bg-destructive/10 hover:text-destructive dark:text-destructive dark:hover:text-destructive"
              >
                <Trash2 data-icon="inline-start" />
                Cancel
              </Button>
              <Button type="submit">
                <Save data-icon="inline-start" />
                Add Travel Package
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
