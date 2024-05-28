import Link from "next/link";

export default function Products() {
  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "12px" }}>
      <h1>Product List</h1>
      <Link
        href="products/1"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "black",
        }}
      >
        product 1
      </Link>
      <Link
        href="products/2"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "black",
        }}
      >
        product 2
      </Link>
      <Link
        href="products/3"
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textDecoration: "none",
          color: "black",
        }}
      >
        product 3
      </Link>
    </div>
  );
}
