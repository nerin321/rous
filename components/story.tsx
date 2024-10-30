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
      <div className="tb:grid-cols-2 mb:gap-14 mb:mt-24 grid gap-5 mt-5">
        <StoryItem
          img="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Sarah Mitchell"
          position="CFO at BrightWave Solutions"
          desc="Rous has completely transformed the way we manage our financial operations. Their AI-driven tools helped us save time and improve accuracy, making a big difference in our bottom line."
          start={4}
        />
        <StoryItem
          img="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="James Lee"
          position="Operations Manager at GlobalTech Payments"
          desc="I`m impressed by how easy it was to integrate Rous`s payment processing solutions into our system. Their technology is fast, secure, and reliable—exactly what we needed."
          start={5}
        />
        <StoryItem
          img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="David Turner"
          position="CEO at FinTrust Bank"
          desc="The security solutions provided by Rous have given us peace of mind. We trust their blockchain technology to safeguard our transactions, and the results have been outstanding."
          start={1}
        />
        <StoryItem
          img="https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Emily Roberts"
          position="Founder of ClearView Ventures"
          desc="Rous’s analytics platform gave us real-time insights into our financial data that we never had before. It’s helped us make smarter, more informed decisions, and we’ve seen significant growth as a result."
          start={2}
        />
      </div>
    </section>
  );
};

export default Story;
