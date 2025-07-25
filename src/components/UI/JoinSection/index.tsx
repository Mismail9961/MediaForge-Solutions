'use client';
import { useState } from 'react';
import {
  Wrapper,
  Inner,
  Header,
  TestimonialWrapper,
  Testimonial,
  Testimony,
  UserInfo,
  Name,
  Avatar,
  PaginationButtonContainer,
  Previous,
  Next,
} from './styles';
import ic_arrow_left from '../../../../public/svgs/ic_arrow_left.svg';
import ic_arrow_right from '../../../../public/svgs/ic_arrow_right.svg';
import Image from 'next/image';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { Props, desktopHeaderPhrase, testimonials } from './constants';

const JoinSection = () => {
  const [testimonialsArr, setTestimonialsArr] = useState<Props[]>(testimonials);

  const next = () => {
    const newArr = [...testimonialsArr.slice(1), testimonialsArr[0]];
    setTestimonialsArr(newArr);
  };

  const previous = () => {
    const newArr = [
      ...testimonialsArr.slice(-1),
      ...testimonialsArr.slice(0, -1),
    ];
    setTestimonialsArr(newArr);
  };

  const isMobile = useIsMobile();

  const mappedTestimonials = isMobile
    ? testimonialsArr.slice(0, 1)
    : testimonialsArr.slice(0, 3);

  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        </Header>
        <TestimonialWrapper>
          {mappedTestimonials.map((t, i) => (
            <Testimonial key={i}>
              <Testimony>{t.testimony}</Testimony>
              <UserInfo>
                <Name>
                  <MaskText phrases={[t.person]} tag="h3" />
                  <MaskText phrases={['Happy Client']} tag="p" />
                </Name>
              </UserInfo>
            </Testimonial>
          ))}
        </TestimonialWrapper>
        <PaginationButtonContainer>
          <Previous onClick={previous}>
            <Image src={ic_arrow_left} alt="Previous" />
          </Previous>
          <Next onClick={next}>
            <Image src={ic_arrow_right} alt="Next" />
          </Next>
        </PaginationButtonContainer>
      </Inner>
    </Wrapper>
  );
};

export default JoinSection;
