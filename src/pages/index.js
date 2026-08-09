import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World AJay.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
