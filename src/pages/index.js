import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello Ajay.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
