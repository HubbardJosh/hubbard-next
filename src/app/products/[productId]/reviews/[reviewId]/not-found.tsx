"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const [_0, _1, productId, _2, reviewId] = usePathname().split("/");
  return (
    <div>
      <h2>
        Review {reviewId} for product {productId} not found
      </h2>
    </div>
  );
}
