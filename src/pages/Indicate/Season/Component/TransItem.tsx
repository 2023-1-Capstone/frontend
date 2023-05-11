import * as S from './TransItem.style';

const TransItem = ({ type, waste }: { type: string; waste: number }) => {
  const data: any = {
    빅맥: `${Math.floor(waste / 2)}개 먹기`,
    아이폰: `${Math.floor(waste / 3)}개 구입`,
    '주안역 511왕복': `${Math.floor(waste / 4)}회 왕복`,
    '서호관 라면': `${Math.floor(waste / 5)}개 먹기`,
  };
  return (
    <>
      <S.BottomInfoTransItem>
        <S.BottomInfoTransText>{type}</S.BottomInfoTransText>
        <S.BottomInfoTransText>{data[type]}</S.BottomInfoTransText>
      </S.BottomInfoTransItem>
    </>
  );
};

export default TransItem;
