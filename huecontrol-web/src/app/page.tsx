import Link from "next/link";

export default function Home() {
  return (
    <main>
      Cheese
      <Link
        href={{
          pathname: "setup"
        }}
      >
        <h2>Test</h2>
      </Link>
    </main>
  );
}
