"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "./Container";

const BreadCrumb = () => {
  const pathname = usePathname();
  const segments = pathname.split("/");

  let url = "";
  const breadcrumbLinks = segments.map((segment, i) => {
    url += `/${segment}`;
    const isLast = i === segments.length - 1;

    return (
      <React.Fragment key={i}>
        <Link
          className=" hover:underline"
          href={`http://localhost:3000/${url}`}
        >
          {segment === "" ? "Home" : segment}
        </Link>
        {!isLast && <span className="separator ">/</span>}
      </React.Fragment>
    );
  });

  return (
    <Container>
      <div className="py-4 flex items-center gap-2 font-light">
        {breadcrumbLinks}
      </div>
    </Container>
  );
};

export default BreadCrumb;
