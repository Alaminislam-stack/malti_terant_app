"use client";
import { OrganizationList} from "@clerk/nextjs";

import React from "react";


function Dashboard() {
  // const [orgs, setOrgs] = useState<Organization[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("/api/organizationslist")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOrgs(data.organizations || []);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div className="px-10 lg:px-[200px] py-10 w-full h-[100vh]">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-4">Welcome to your dashboard!</p>
      <div className=" flex flex-col sm:flex-row items-start justify-center">

        <div className="mt-10 ">
          <OrganizationList
            afterSelectOrganizationUrl={`/org/:slug`}
            hideSlug
          />
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
