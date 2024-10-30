"use client";
import React from "react";
import HeaderSection from "./common/headerSection";
import FaqItem from "./common/FaqItem";

interface FAQItem {
  title: string;
  desc: string;
}

const faqItems: FAQItem[] = [
  {
    title: "What services does Rous provide?",
    desc: "Learn more about the fintech and technology solutions we offer, from AI-powered analytics to secure payment processing.",
  },
  {
    title: "Cloud-Based Accounting Solutions",
    desc: "Learn more about the fintech and technology solutions we offer, from AI-powered analytics to secure payment processing.",
  },
  {
    title: "What kind of analytics tools does Rous offer?",
    desc: "Learn more about the fintech and technology solutions we offer, from AI-powered analytics to secure payment processing.",
  },
  {
    title: "What industries do you serve?",
    desc: "Learn more about the fintech and technology solutions we offer, from AI-powered analytics to secure payment processing.",
  },
  {
    title: "How long does it take to implement Rous solutions?",
    desc: "Learn more about the fintech and technology solutions we offer, from AI-powered analytics to secure payment processing.",
  },
  {
    title: "How can Rous help optimize my financial operations?",
    desc: "Explore how our AI-driven platforms and automation tools can streamline your financial processes and improve efficiency.",
  },
  {
    title: "Does Rous offer support and training for new users?",
    desc: "Learn more about the fintech and technology solutions we offer, from AI-powered analytics to secure payment processing.",
  },
  {
    title: "How does Rous ensure the security?",
    desc: "Learn more about the fintech and technology solutions we offer, from AI-powered analytics to secure payment processing.",
  },
  {
    title: "What are the pricing plans for Rous services?",
    desc: "Learn more about the fintech and technology solutions we offer, from AI-powered analytics to secure payment processing.",
  },
  {
    title: "How does Rous use AI to improve financial?",
    desc: "Learn more about the fintech and technology solutions we offer, from AI-powered analytics to secure payment processing.",
  },
];

const Faq = () => {
  return (
    <section className="tb:my-20 my-10">
      <HeaderSection
        title="Frequently Asked Questions"
        desc="Find answers to the most common questions about Rous's technology and fintech solutions. Whether you're curious about our services, security measures, pricing, or how our platform works."
      />
      <div className="tb:my-28 tb:gap-14 tb:grid-cols-2 grid gap-5 my-10">
        {faqItems.map((item, id) => (
          <FaqItem key={id} title={item.title} desc={item.desc} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
