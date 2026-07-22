import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World, i am here.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
