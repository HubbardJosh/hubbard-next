import Link from "next/link";

export interface NavRoute {
  label: string;
  href: string;
}
interface NavbarProps {
  routes: NavRoute[];
}
export default function Navbar({ routes }: NavbarProps) {
  return (
    <div
      style={{
        display: "flex",
        columnGap: "2rem",
        justifyContent: "center",
      }}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          title={route.label}
          href={route.href}
          style={{
            fontSize: "20px",
            fontFamily: "sans-serif",
            color: "black",
            textDecoration: "none",
          }}
        >
          {route.label}
        </Link>
      ))}
    </div>
  );
}
