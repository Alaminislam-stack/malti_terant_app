"use client";

import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

function Navbar() {
  const user = useAuth();

  return (
    <nav className="flex justify-between items-center py-5 px-10 border-b border-gray-200">
      <div className="text-3xl font-semibold">
        <Link href={"/"}>My blog</Link>
      </div>
      <div>
        <ul className="flex space-x-4 font-semibold justify-center items-center">
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>

          {!user.isSignedIn ? (
            <div className="flex space-x-4">
              <SignInButton mode="modal">
                <Button className="cursor-pointer">Sign In</Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button className="cursor-pointer">Sign Up</Button>
              </SignUpButton>
            </div>
          ) : (
            <Link href="/dashboard" className="btn">
              Dashboard
            </Link>
          )}

          <UserButton />
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
