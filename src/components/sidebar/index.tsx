"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

const Sidebar = (props: Props) => {
  const pathName = usePathname();
  return (
    <nav className="h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2 ">
      <div className=" flex items-center justify-center flex-col gap-8">
        <Link href="/" className="flex font-bold flex-row">
          ZapC
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
