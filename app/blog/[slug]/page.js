"use client";
import React, { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function Page() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(`Page URL: ${url}`);
  }, [pathname, searchParams]);

  return (
    <div>
      <h1>This is blog post: {pathname}</h1>
      <p>lorem ipsum</p>
    </div>
  );
}

export default Page;
