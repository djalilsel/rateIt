import { useSession } from "next-auth/react";
import React from "react";

const page = () => {
  //   const { data: session } = useSession();
  //   if (!session) {
  //     return <div>Access Denied</div>;
  //   }
  return <div>This is the dashboard page</div>;
};

export default page;
