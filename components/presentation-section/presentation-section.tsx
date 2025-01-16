import React from "react";

import PhotosNDescriptions from "../presentation-section/photos-n-descriptions";

import PhotosNDescriptionsMobile from "./photos-mobile";

const PresentationSection = () => {
  return (
    <section className="xl:max-w-7xl mx-auto overflow-hidden" id="presentation">
      <PhotosNDescriptions />
      <PhotosNDescriptionsMobile />
    </section>
  );
};

export default PresentationSection;
