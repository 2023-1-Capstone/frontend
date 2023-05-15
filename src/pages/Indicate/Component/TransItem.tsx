import * as S from './TransItem.style';
import { stuffPrice } from '../../../store/store';
import { getUniqueNumberList } from '../Season/util';

const TransItem = ({
  waste,
  randomIdxList,
}: {
  waste: number;
  randomIdxList: number[];
}) => {
  const data: any = [
    {
      type: '빅맥',
      value: `${Math.floor(waste / 7000).toLocaleString('ko-KR')}개 먹기`,
    },
    {
      type: '아이폰14 Pro',
      value: `${Math.floor(waste / 1400000).toLocaleString('ko-KR')}개 구입 `,
    },
    {
      type: '주안역 511왕복',
      value: `${Math.floor(waste / 1900).toLocaleString('ko-KR')}회 왕복`,
    },
    {
      type: '서호관 라면',
      value: `${Math.floor(waste / 1000).toLocaleString('ko-KR')}그릇 먹기`,
    },
    {
      type: '서울-부산 KTX 왕복',
      value: `${Math.floor(waste / 120000).toLocaleString('ko-KR')}회 왕복`,
    },
    {
      type: '황금올리브 치킨',
      value: `${Math.floor(waste / 20000).toLocaleString('ko-KR')}마리 먹기`,
    },
  ];

  return (
    <>
      {randomIdxList.map((item: number, idx: number) => {
        return (
          <S.BottomInfoTransItem key={idx}>
            <S.BottomInfoTransText>{data[item].type}</S.BottomInfoTransText>
            <S.BottomInfoTransText>{data[item].value}</S.BottomInfoTransText>
          </S.BottomInfoTransItem>
        );
      })}
    </>
  );
};

export default TransItem;
