import styled, { keyframes } from 'styled-components';

const biggerEffect = keyframes`
	0% {
		transform: scale(0);
	}
	100% {
		transform: scale(1);
	}
`;

export const CarouselWrapper = styled.div`
  position: relative;
  width: fit-content;
  animation: ${biggerEffect} 0.2s;
`;

export const CarouselItem = styled.img`
  width: 36rem;
  height: 16rem;
  border-radius: 1.2rem;
  border: 0.2rem solid #e7e7e7;
`;

export const NavigatePrev = styled.img`
  position: absolute;
  left: -2.3rem;
  top: 6rem;
  z-index: 2;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
`;

export const NavigateNext = styled.img`
  position: absolute;
  top: 6rem;
  right: -2.1rem;
  z-index: 2;
  width: 6rem;
  height: 6rem;
  cursor: pointer;
`;

export const CarouselBuildingName = styled.div`
  position: absolute;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 2.9rem;
  left: 1.5rem;
  top: 11.5rem;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
