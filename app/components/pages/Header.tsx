"use client";
import Link from "next/link";
import {
  HeartIcon,
  SearchIcon,
  ShoppingBagIcon,
  UserCircle,
} from "lucide-react";
import { Button } from "@base-ui/react";
import Signup from "./auth/signup/page";
import Signin from "./auth/signin/page";
import { useState } from "react";

export default function Header() {
  const [signupOpen, setSignupOpen] = useState(false);
  const [signinOpen, setSigninOpen] = useState(false);

  return (
    <div className="flex justify-between  items-center">
      <div className="font-bold text-3xl">3legant.</div>
      <div className="flex gap-10 text-gray-500">
        <Link className=" hover:text-black" href="/">
          Home
        </Link>
        <Link className=" hover:text-black" href="#shop">
          Shop
        </Link>
        <Link className=" hover:text-black" href="#product">
          Product
        </Link>
        <Link className=" hover:text-black" href="#contact">
          Contact Us
        </Link>
      </div>
      <div className="flex gap-4">
        <Button>
          <SearchIcon />
        </Button>
        <Button
          onClick={() => {
            setSigninOpen(true);
          }}
        >
          <UserCircle />
        </Button>
        <Button>
          <ShoppingBagIcon />
        </Button>
        <Button>
          <HeartIcon />{" "}
        </Button>
        <Signup
          open={signupOpen}
          onOpenChange={setSignupOpen}
          onSwitchToSignin={() => {
            setSignupOpen(false);
            setSigninOpen(true);
          }}
        />
        <Signin
          open={signinOpen}
          onOpenChange={setSigninOpen}
          onSwitchToSignup={() => {
            setSigninOpen(false);
            setSignupOpen(true);
          }}
        />
      </div>
    </div>
  );
}
