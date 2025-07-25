'use client';
import Image from 'next/image';
import ic_import from '../../../../public/svgs/ic_import.svg';
import { Wrapper, Inner, SecondOverlay, TextRow } from './styles';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({
  setComplete,
}: {
  setComplete: Dispatch<SetStateAction<boolean>>;
}) => {
  const line1 = ['M', 'e', 'd', 'i', 'a', 'F', 'o', 'r', 'g', 'e'];
  const line2 = ['S', 'o', 'l', 'u', 't', 'i', 'o', 'n', 's', '.'];

  const spans = useRef<any>([]);
  const imageRef = useRef(null);
  const secondOverlayRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(imageRef.current, {
      rotate: '360deg',
      ease: 'back.out(1.7)',
      duration: 1.4,
    });

    tl.to(imageRef.current, {
      y: '-100%',
      ease: 'back.out(1.7)',
    });

    tl.to(spans.current, {
      y: '-100%',
      ease: 'back.out(1.7)',
      duration: 1.4,
      stagger: 0.05,
    });

    tl.to([wrapperRef.current, secondOverlayRef.current], {
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'back.out(1.7)',
      duration: 1,
      stagger: 0.2,
      onComplete: () => {
        setComplete(true);
      },
    });

    tl.to(secondOverlayRef.current, {
      scaleY: 0,
      transformOrigin: 'top',
      ease: [0.83, 0, 0.17, 1] as any,
      duration: 1,
      delay: -0.9,
    });
  }, [setComplete]);

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Inner>
          <Image ref={imageRef} src={ic_import} alt="import icon" />
          <div>
            <TextRow>
              {line1.map((t, i) => (
                <div key={i} ref={(el) => (spans.current[i] = el)}>{t}</div>
              ))}
            </TextRow>
            <TextRow>
              {line2.map((t, i) => (
                <div key={i + line1.length} ref={(el) => (spans.current[i + line1.length] = el)}>{t}</div>
              ))}
            </TextRow>
          </div>
        </Inner>
      </Wrapper>
      <SecondOverlay ref={secondOverlayRef} />
    </>
  );
};

export default Preloader;
