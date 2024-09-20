import React from "react";
import Navigation from "../components/navigation/navigation";
import Hero from "../components/hero/hero";

function Page() {
  return (
    <div>
      <Navigation />
      <Hero title="This is a test page" />
      <p>lorem ipsum</p>
    </div>
  );
}

export default Page;
