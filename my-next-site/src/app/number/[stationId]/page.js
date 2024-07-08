"use client";

import { useParams, useSearchParams } from "next/navigation";

export default function NumberPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const organizationId = searchParams.get("organizationId");
  const { stationId } = params;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Details</h1>
      <p>Organization ID: {organizationId}</p>
      <p>Station ID: {stationId}</p>
    </div>
  );
}
