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
  animation: ${biggerEffect} 0.2s;
`;

export const CarouselItem = styled.img`
  width: 25rem;
  height: 15rem;
  border-radius: 1.2rem;
`;

export const NavigatePrev = styled.img`
  position: absolute;
  left: -1rem;
  top: 10rem;
  z-index: 2;
  width: 8rem;
  height: 8rem;
  cursor: pointer;
`;

export const NavigateNext = styled.img`
  position: absolute;
  top: 10rem;
  right: -1rem;
  z-index: 2;
  width: 8rem;
  height: 8rem;
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
  top: 0.5rem;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
