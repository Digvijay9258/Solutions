"use client";

import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-red-600/5 blur-[120px] rounded-full" />

      <div className="relative z-10 text-center max-w-lg">
        <div className="w-20 h-20 rounded-2xl bg-red-500/20 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </div>
        <h1 className="text-2xl font-heading font-bold text-text-primary mb-4">
          Something Went Wrong
        </h1>
        <p className="text-text-secondary mb-8">
          An unexpected error occurred. Please try again or contact us if the
          problem persists.
        </p>
        <div className="flex items-center justify-center gap-4">
          <button onClick={() => reset()} className="btn-primary">
            <RefreshCw className="w-4 h-4" />
            Try Again
          </button>
          <Link href="/" className="btn-secondary">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
