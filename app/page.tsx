"use client";

import { Button } from "@/components/ui/button";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Link from "next/link";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <div className="w-full h-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center">
      <QueryClientProvider client={queryClient}>
        <Link href="/auth/login">
          <Button
            size="lg"
            className="bg-teal-600 hover:bg-teal-700"
          >
            Sign In
          </Button>
        </Link>
      </QueryClientProvider>
    </div>
  );
}
