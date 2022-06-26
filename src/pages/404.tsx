import Link from "next/link";

export default function Custom404() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-2xl mt-10">404 - Page Not Found 😥</h1>
      <Link href="/">
        <a className="mt-5 hover:underline">Go to Home Page</a>
      </Link>
    </div>
  );
}
