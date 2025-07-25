import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

import ic_chevron_down from "../../../../public/svgs/ic_chevron_down.svg";
import ic_copyright from "../../../../public/svgs/ic_copyright.svg";
// import ic_instagram from '../../../../public/svgs/instagram.svg';
// import ic_linkedin from '../../../../public/svgs/new.png';

import {
  Wrapper,
  Inner,
  FooterLogo,
  FooterMainContent,
  FooterMiddle,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  SocialContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from "./styles";

const linksArr = [
  {
    title: "Company",
    links: ["About Us", "Services", "Careers", "Blog"],
  },
];

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterLogo>
          <h1>MediaForge Solutions.</h1>
        </FooterLogo>

        <FooterMainContent>
          <FooterMiddle>
            <FooterNavigation>
              {linksArr.map((section, i) => (
                <GridColumn key={i}>
                  <h3>{section.title}</h3>
                  <LinksContainer>
                    {section.links.map((link, j) => (
                      <li key={j}>
                        <Link href="#">{link}</Link>
                      </li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
              <SocialContainer>
                <h3>Follow Us</h3>
                <div className="icons">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={24} />
                  </a>
                </div>
              </SocialContainer>
            </FooterNavigation>
          </FooterMiddle>

          <FooterBottom>
            <Translator>
              <h3>English (United Kingdom)</h3>
              <Image src={ic_chevron_down} alt="Language dropdown" />
            </Translator>
            <CopyRight>
              <Image
                src={ic_copyright}
                alt="Copyright"
                width={16}
                height={16}
              />
              <span>2025 MediaForge Solutions, LLC.</span>
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;
