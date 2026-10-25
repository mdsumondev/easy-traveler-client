import React, { Suspense } from "react";
import { DestinationType } from "../type/destinationType";
import { DestinationCard } from "@/components/DestinationCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  "Beach",
  "Mountain Adventure",
  "City Break",
  "Cultural Heritage",
  "Cruise",
  "Food & Culinary",
  "Wildlife Safari",
];

function FilterSelect({
  placeholder,
  options,
}: {
  placeholder: string;
  options: string[];
}) {
  return (
    <Select>
      <SelectTrigger className="w-full rounded-none border-input px-4 sm:px-5 data-[size=default]:h-11 sm:[&:not(:first-child)]:-ml-px">
        <SelectValue
          placeholder={placeholder}
          className="text-sm tracking-wider uppercase"
        />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

const destinationData = async (): Promise<DestinationType[]> => {
  const res = await fetch("http://localhost:5000/all-destination", {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};

const DestinationsPage = async () => {
  const destinations = await destinationData();

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="header">
        <h1 className="font-heading pt-10 text-4xl font-semibold tracking-tight sm:text-5xl">
          Explore All Destinations
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Find your perfect travel experience from our curated collection
        </p>
        <div className="mt-9 grid grid-cols-1 sm:grid-cols-3">
          <FilterSelect placeholder="Category" options={categories} />
          <FilterSelect
            placeholder="Price Range"
            options={[
              "Under $1,000",
              "$1,000 - $2,000",
              "$2,000 - $3,000",
              "Above $3,000",
            ]}
          />
          <FilterSelect
            placeholder="Sort By"
            options={[
              "Price: Low to High",
              "Price: High to Low",
              "Name: A to Z",
            ]}
          />
        </div>
      </div>
      <p className="text-lg mb-3 mt-10">
        Showing {destinations.length} destinations
      </p>
      <div className="grid grid-cols-3 gap-4 mb-10">
        <Suspense fallback="Loading..">
          {destinations.map((destination) => (
            <DestinationCard key={destination._id} destination={destination} />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default DestinationsPage;
