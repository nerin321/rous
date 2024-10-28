import React from "react";
import HeaderSection from "./common/headerSection";
import StoryItem from "./common/StoryItem";

const Story = () => {
  return (
    <section>
      <HeaderSection
        title="What Our Clients Are Saying"
        desc="At Rous, our clients' success is our top priority. Don’t just take our word for it hear from the businesses and leaders who have experienced the transformative power of our fintech solutions."
      />
      <div className="grid grid-cols-2 mt-24 gap-14">
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
      </div>
    </section>
  );
};

export default Story;
