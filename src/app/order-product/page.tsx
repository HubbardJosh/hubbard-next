"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("Placing your order");
    router.push("/");
    // router.back();   // navigates back one page in state
    // router.forward();    // navigates forward one page in state
  };
  return (
    <>
      <h1>Order product</h1>
      <button className="bg-slate-600" onClick={handleClick}>
        Place Order
      </button>
    </>
  );
}
