'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: var(--Background);
  color: var(--white);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  img {
    width: 10rem;
    height: 10rem;
  }

  > div {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;

    > div {
      font-weight: 700;
      font-size: 6rem;
      line-height: 1;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;

    img {
      width: 6rem;
      height: 6rem;
    }

    > div {
      gap: 0.6rem;

      > div {
        font-size: 3rem;
      }
    }
  }
`;

export const SecondOverlay = styled.div`
  background: var(--emerald);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9990;
  top: 0;
  left: 0;
`;
