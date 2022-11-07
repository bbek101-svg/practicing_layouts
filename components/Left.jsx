import Link from "next/link";

function Left() {
  return (
    <div className="none md:fixed left-0 top-0 p-4">
      <Link href="/">
        <h1 className="text-white tracking-wide mx-auto">Bibek</h1>
      </Link>
    </div>
  );
}

export default Left;
