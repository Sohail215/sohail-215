import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#081C3A]">

      <div className="text-center">

        <h1 className="text-5xl md:text-7xl font-bold text-yellow-400 animate-pulse">
          ZORIELLE
        </h1>

        <p className="mt-4 text-gray-300 uppercase tracking-[8px]">
          Luxury Villa
        </p>

        <Loader2
          className="animate-spin text-yellow-400 mx-auto mt-10"
          size={42}
        />

      </div>

    </div>
  );
}