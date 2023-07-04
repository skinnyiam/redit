"use client";
import React, { useState } from "react";
import { Button } from "./ui/Button";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { useToast } from "@/hooks/use-toast";
type Props = {};

const UserAuthForm = (props: Props) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const logInWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
    } catch (error) {
      console.log(error);
      toast({
        title: "There was a problem..",
        description: "There was a error login with google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center ">
      <Button onClick={logInWithGoogle} isLoading={isLoading}>
        {isLoading ? null : <FcGoogle />}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
