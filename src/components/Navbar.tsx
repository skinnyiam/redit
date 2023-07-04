import { getAuthSession } from "@/lib/auth";
import { buttonVariants } from "./ui/Button";
import Link from "next/link";
import UserAccountNav from "./UserAccountNav";
const Navbar = async () => {
  const session = await getAuthSession();
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b z-10 py-2 border-zinc-300 flex justify-around">
      <div>
        <h1>logo</h1>
      </div>
      <div>
        {session ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
