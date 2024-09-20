import React from "react";
import * as Sentry from "@sentry/nextjs";

function Page() {
  return (
    <div>
      <h1>This is a test page</h1>
      <h2>This is a test page</h2>
      <p>lorem ipsum</p>
    </div>
  );
}

export default Sentry.withProfiler(Page);
