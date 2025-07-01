"use client";
import { UserButton } from "@clerk/nextjs";
import { OrganizationSwitcher, useOrganization } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Navbar() {
  const router = useRouter();
  const { organization } = useOrganization();

  useEffect(() => {
    if (organization) {
      router.push(`/org/${organization.slug}`);
    }
  }, [organization, router]);

  return (
    <nav className="flex justify-between items-center p-4 ">
      <div>My blog</div>
      <div>
        <OrganizationSwitcher
          afterSelectPersonalUrl="/"
        />

        <UserButton />
      </div>
    </nav>
  );
}

export default Navbar;
