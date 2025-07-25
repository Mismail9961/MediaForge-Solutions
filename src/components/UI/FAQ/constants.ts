type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ["Frequently asked", "questions"];
export const mobileHeaderPhrase = ["Frequently", "asked", "questions"];
export const animate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  open: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: " What services does your digital marketing agency offer?",
    answer:
      "We offer a full suite of digital marketing services including : Social Media Marketing (SMM) Search Engine Optimization (SEO) Pay-Per-Click Advertising (PPC) Content Writing & Marketing Email Marketing Graphic Design Video Editing Website Design & Development",
  },
  {
    question: "How can digital marketing help my business grow?",
    answer:
      "Digital marketing helps increase your online visibility, drive more qualified traffic to your website, and convert visitors into paying customers. Whether you're targeting local or global audiences, our strategies are tailored to help you generate more leads, improve brand awareness, and boost sales.",
  },
  {
    question: "How do you measure the success of a digital marketing campaign?",
    answer:
      "We use key performance indicators (KPIs) such as: Website traffic Conversion rates Click-through rates (CTR) Cost per acquisition (CPA) Return on ad spend (ROAS) Social media engagement We provide regular reports with analytics and insights to ensure transparency and consistent improvement.",
  },
  {
    question: "Can you manage our social media accounts?",
    answer:
      "Absolutely. We offer complete social media management including content creation, post scheduling, audience engagement, ad campaigns, and performance analysis for platforms like Facebook, Instagram, LinkedIn, TikTok, and more.",
  },
];
