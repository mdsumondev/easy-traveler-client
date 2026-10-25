import type { Metadata } from "next";

import { AddDestinationForm } from "@/components/add-destination-form";

export const metadata: Metadata = {
  title: "Add New Travel Package — Wanderlast",
};

export default function AddDestinationPage() {
  return <AddDestinationForm />;
}
