"use client";

import { ContactForm, FAQ } from "@/components";
import styles from "@/app/about/About.module.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div>
      <section className={styles.aboutSection}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={styles.container}
        >
          <h2 className={styles.heading}>About MediaForge Solutions</h2>
          <p className={styles.intro}>
            At <strong>MediaForge Solutions</strong>, we’re not just a digital
            marketing agency—we’re your dedicated growth partner in the digital
            world. Our mission is to craft meaningful and measurable digital
            experiences that do more than just attract attention—they engage,
            convert, and inspire. With every campaign, we aim to turn clicks
            into loyal customers and impressions into lasting impact. Whether
            you're a startup looking to make a bold entrance or an established
            enterprise aiming to scale your digital footprint, we provide
            tailor-made solutions that align with your vision and drive results.
            From SEO and social media marketing to content creation and
            performance advertising, our strategies are rooted in data, driven
            by creativity, and executed with precision. What sets us apart is
            our commitment to innovation and transparency. We believe in working
            as an extension of your team, offering clear communication, regular
            performance reports, and agile strategies that evolve with your
            business. Our approach is not one-size-fits-all—we immerse ourselves
            in your brand to understand your industry, audience, and goals, then
            develop a custom roadmap for growth. At MediaForge, we’re passionate
            about the future of digital. That’s why we continuously invest in
            emerging technologies like AI-driven analytics, marketing
            automation, and immersive content experiences. Our vision is to
            empower brands with future-ready solutions that lead markets, spark
            engagement, and drive long-term success. Let’s build something
            powerful—together.
          </p>

          <div className={styles.section}>
            <h3 className={styles.subHeading}>What We Do</h3>
            <p className={styles.paragraph}>
              We specialize in <strong>SEO</strong>,{" "}
              <strong>social media marketing</strong>,
              <strong> content creation</strong>,{" "}
              <strong>PPC advertising</strong>,<strong> email marketing</strong>
              , <strong>branding</strong>,<strong> marketing automation</strong>{" "}
              and etc. Our expert team blends creative storytelling with
              data-driven insights to craft campaigns that not only captivate
              audiences but also deliver measurable results and sustainable
              growth.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.subHeading}>Our Strategy</h3>
            <p className={styles.paragraph}>
              Strategy is the heartbeat of everything we do. We begin with
              data-backed research, identify gaps and opportunities, and then
              deploy agile marketing frameworks. Our adaptive approach ensures
              that your brand stays ahead in a fast-moving digital landscape.
            </p>
          </div>

          <div className={styles.section}>
            <h3 className={styles.subHeading}>Future Vision</h3>
            <p className={styles.paragraph}>
              MediaForge is setting its sights on the future by embracing
              AI-driven personalization, automation, and immersive media. We
              envision becoming a global leader in scalable digital
              transformation, enabling brands to unlock new growth opportunities
              through innovation.
            </p>
          </div>

          <motion.p
            className={styles.tagline}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Let’s build something remarkable—together.
          </motion.p>
        </motion.div>
      </section>
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default About;
