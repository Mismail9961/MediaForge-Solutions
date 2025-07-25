"use client";
import { ContactForm, FAQ } from "@/components";

import styles from "@/app/services/Services.module.css";
import { motion } from "framer-motion";
import SectionTitle from "@/components/UI/SectionTitle/SectionTitle";

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your online visibility and drive organic traffic with our data-driven SEO strategies.",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build your brand and connect with your audience on Facebook, Instagram, LinkedIn, and more.",
  },
  {
    title: "Content Creation",
    description:
      "We create high-converting content—from blog posts to video campaigns—that sell your story.",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Run powerful ad campaigns with Google Ads and Meta Ads to maximize your ROI.",
  },
  {
    title: "Email Marketing",
    description:
      "Increase engagement and conversions through personalized and automated email funnels.",
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Optimize your website’s layout, messaging, and calls-to-action to boost conversions.",
  },
  {
    title: "Web Design & Development",
    description:
      "We craft stunning, responsive websites tailored to your brand and optimized for performance.",
  },
  {
    title: "Brand Strategy & Positioning",
    description:
      "We define your brand voice, values, and market position to ensure long-term success.",
  },
  {
    title: "Influencer Marketing",
    description:
      "Collaborate with trusted influencers to extend your reach and build brand credibility.",
  },
  {
    title: "Video Marketing",
    description:
      "Create captivating video content to engage, inform, and convert your audience across platforms.",
  },
  {
    title: "Online Reputation Management",
    description:
      "Protect and enhance your brand image with proactive monitoring and review response strategies.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track campaign performance with detailed analytics and actionable insights.",
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.box}>
      <main className={styles.container}>
        <SectionTitle
          title="Our Services"
          subtitle="Digital marketing solutions to help your business grow."
        />

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </main>
      <FAQ />
      <ContactForm />
    </div>
  );
}
