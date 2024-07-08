"use client"; // クライアントコンポーネントとしてマーク

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchPage() {
  const router = useRouter();
  const [organizationId, setOrganizationId] = useState("");
  const [stationId, setStationId] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (stationId) {
      router.push(`/number/${stationId}?organizationId=${organizationId}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Enter a Number</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label
          htmlFor="organizationId"
          className="block text-sm font-medium text-gray-700"
        >
          Organization ID
        </label>
        <input
          type="number"
          value={organizationId}
          onChange={e => setOrganizationId(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <label
          htmlFor="stationId"
          className="block text-sm font-medium text-gray-700"
        >
          Station ID
        </label>
        <input
          type="number"
          value={stationId}
          onChange={e => setStationId(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}
