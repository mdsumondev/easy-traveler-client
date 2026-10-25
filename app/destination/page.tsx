import React, { Suspense } from "react";
import { DestinationType } from "../type/destinationType";
import { DestinationCard } from "@/components/DestinationCard";

const destinationData = async (): Promise<DestinationType[]> => {
  const res = await fetch("http://localhost:5000/all-destination");

  return res.json();
};

const DestinationsPage = async () => {
  const destinations = await destinationData();

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="header"></div>
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
