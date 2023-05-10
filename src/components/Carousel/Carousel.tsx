import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import prev from '../../assets/svg/prev.svg';
import next from '../../assets/svg/next.svg';
import 'swiper/swiper.min.css';
import * as S from './Carousel.style';
import { buildingInfoType } from '../../type/Types';
import { buildingSrc } from '../../store/store';
const style = {
  width: '25rem',
};

const Carousel = ({
  buildingList,
  setSelectedBuilding,
}: {
  buildingList: buildingInfoType[];
  setSelectedBuilding: any;
}) => {
  return (
    <>
      <S.NavigatePrev className="swiper-button-prev" src={prev} />
      <Swiper
        style={style}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        onSlideChangeTransitionEnd={(e) =>
          setSelectedBuilding(buildingList[e.activeIndex].name)
        }
      >
        {buildingList?.map((item: buildingInfoType, idx: number) => {
          return (
            <SwiperSlide key={idx}>
              <S.CarouselBuildingName>{item.name}</S.CarouselBuildingName>
              <S.CarouselItem src={buildingSrc[item.id - 1]}></S.CarouselItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <S.NavigateNext className="swiper-button-next" src={next} />
    </>
  );
};

export default Carousel;
