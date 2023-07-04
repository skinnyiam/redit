import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import SignIn from "@/components/SignIn";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="absolute inset-0">
      <div className="pt-24 max-w-2xl mx-auto flex flex-col items-center justify-center">
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }))}>
          Home
        </Link>
      </div>
      <SignIn />
    </div>
  );
};

export default page;
