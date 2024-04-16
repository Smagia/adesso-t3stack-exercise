import { useSession } from "next-auth/react";
import Link from "next/link";

export function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex h-[50px] w-full items-center justify-between bg-blue-600 px-4 text-white">
      <Link href="/">Home</Link>
      {session ? (
        <div className="flex gap-4">
          <p>Logges as {session.user?.name}</p>
          <button
            className="text-center underline hover:bg-opacity-80"
            onClick={() => {
              // todo implement login
            }}
          >
            Sign out
          </button>
        </div>
      ) : (
        <div className="flex gap-4">
          <p>Who are you??</p>
          <button
            className="text-center underline hover:bg-opacity-80"
            onClick={() => {
              // todo implement login
            }}
          >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
}
