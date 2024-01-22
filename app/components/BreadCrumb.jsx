"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "./Container";
import clsx from "clsx";

const BreadCrumb = ({ plainTextPages = [] }) => {
  const pathname = usePathname();
  const segments = pathname.split("/");

  let url = "";
  const breadcrumbLinks = segments.map((segment, i) => {
    url += `/${segment}`;
    const isLast = i === segments.length - 1;
    const isPlainText = plainTextPages.includes(segment);

    return (
      <React.Fragment key={i}>
        {isPlainText ? (
          <span className="text-[#d7d7d7]">
            {segment === "" ? "Home" : segment}
          </span>
        ) : (
          <Link className={clsx("hover:underline")} href={`/${url}`}>
            {segment === "" ? "Home" : segment}
          </Link>
        )}
        {!isLast && <span className="separator">/</span>}
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
