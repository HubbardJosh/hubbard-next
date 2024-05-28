"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      {error.message}
      <button className="border px-1 bg-slate-500 rounded mx-1" onClick={reset}>
        Try again
      </button>
    </div>
  );
}
