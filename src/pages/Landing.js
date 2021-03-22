import React from "react";

import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero
        title="Download the YouTube videos with the highest quality."
        subtitle="You can download any video from the YouTube with 4K quality if available for that video."
        image="https://source.unsplash.com/collection/404339/800x600"
        ctaText="Download the Video"
        ctaLink="/download/search"
      />
    </LandingLayout>
  );
}
