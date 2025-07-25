'use client';
import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
  margin-top: 6rem;

  @media (max-width: 480px) {
    margin-top: 4rem;
  }
`;

export const Inner = styled.div`
  background: url(${hero_background.src}) no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
  background-position: top center;
  background-size: contain;
  padding: 1rem;

  @media (max-width: 480px) {
    padding: 0.5rem;
  }
`;

export const Pill = styled.div`
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  border: 0.2px solid #989898;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  margin-bottom: 1rem;

  span {
    color: var(--light-gray);
    font-size: 1rem;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

export const HeroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-bottom: 2rem;

  h1 {
    font-size: 6rem;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
      line-height: 2.5rem;
    }
  }

  p {
    max-width: 44.75rem;
    color: #bdbdbd;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
      padding: 0 10px;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
    padding-bottom: 1rem;
  }
`;
