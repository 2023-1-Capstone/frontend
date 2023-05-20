import * as S from './TransItem.style';
import { stuffPrice } from '../../../../store/store';
import { getUniqueNumberList } from '../../Season/util';
import iphone from '../../../../assets/transImage/iphone.jpg';
import bus from '../../../../assets/transImage/bus.png';
import ramen from '../../../../assets/transImage/ramen.jpg';
import ktx from '../../../../assets/transImage/ktx.jpg';
import chicken from '../../../../assets/transImage/chicken.jpg';
import bigmac from '../../../../assets/transImage/bigmac.avif';
import cup from '../../../../assets/transImage/cup.svg';
import shower from '../../../../assets/transImage/shower.svg';
import notebook from '../../../../assets/transImage/notebook.svg';
import laundryMachine from '../../../../assets/transImage/laundryMachine.svg';
import refridgerator from '../../../../assets/transImage/refridgerator.svg';
import americano from '../../../../assets/transImage/americano.svg';
import water from '../../../../assets/transImage/water.svg';

const TransItem = ({
  waste,
  randomIdxList,
  type,
}: {
  waste: number;
  randomIdxList: number[];
  type: string;
}) => {
  const resource: any = [
    {
      type: '빅맥',
      value: `${Math.floor(waste / 7000).toLocaleString('ko-KR')}개`,
      src: bigmac,
    },
    {
      type: '아이폰14 Pro',
      value: `${Math.floor(waste / 1400000).toLocaleString('ko-KR')}개 `,
      src: iphone,
    },
    {
      type: '주안역 511왕복',
      value: `${Math.floor(waste / 1900).toLocaleString('ko-KR')}회`,
      src: bus,
    },
    {
      type: '서호관 라면',
      value: `${Math.floor(waste / 1000).toLocaleString('ko-KR')}그릇`,
      src: ramen,
    },
    {
      type: '서울-부산 KTX 왕복',
      value: `${Math.floor(waste / 120000).toLocaleString('ko-KR')}회`,
      src: ktx,
    },
    {
      type: '치킨',
      value: `${Math.floor(waste / 20000).toLocaleString('ko-KR')}마리`,
      src: chicken,
    },
  ];

  const carbon: any = [
    {
      type: '냉장고 사용',
      value: `${Math.floor(waste / 0.554).toLocaleString('ko-KR')}일`,
      src: refridgerator,
    },
    {
      type: '샤워',
      value: `${Math.floor(waste / 0.086).toLocaleString('ko-KR')}분 `,
      src: shower,
    },
    {
      type: '노트북 사용',
      value: `${Math.floor(waste / 0.0258).toLocaleString('ko-KR')}시간`,
      src: notebook,
    },
    {
      type: '스마트폰 생산',
      value: `${Math.floor(waste / 60).toLocaleString('ko-KR')}대`,
      src: iphone,
    },
    {
      type: '세탁기 사용',
      value: `${Math.floor(waste / 0.791).toLocaleString('ko-KR')}시간`,
      src: laundryMachine,
    },
    {
      type: '일회용컵 사용',
      value: `${Math.floor(waste / 0.011).toLocaleString('ko-KR')}개`,
      src: cup,
    },
    {
      type: '아메리카노',
      value: `${Math.floor(waste / 0.021).toLocaleString('ko-KR')}잔`,
      src: americano,
    },
    {
      type: '500ml 생수',
      value: `${Math.floor(waste / 0.01458).toLocaleString('ko-KR')}병`,
      src: water,
    },
  ];

  const tranItemList: any = {
    resource: resource,
    carbon: carbon,
  };

  return (
    <S.BottomInfoTransWrapper>
      {randomIdxList.map((item: number, idx: number) => {
        return (
          <S.BottomInfoTransItem key={idx}>
            <S.BottomInfoTrasnImage
              src={tranItemList[type][item].src}
            ></S.BottomInfoTrasnImage>
            <S.BottomInfoTransText>
              {tranItemList[type][item].type}
            </S.BottomInfoTransText>
            <S.BottomInfoTransText>
              {tranItemList[type][item].value}
            </S.BottomInfoTransText>
          </S.BottomInfoTransItem>
        );
      })}
    </S.BottomInfoTransWrapper>
  );
};

export default TransItem;
