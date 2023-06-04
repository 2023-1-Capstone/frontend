import * as S from './TreeTransItem.style';
import pineTree from '../../../../assets/treeImage/소나무.jpg';
import koreanPineTree from '../../../../assets/treeImage/잣나무.jpg';
import cypress from '../../../../assets/treeImage/편백.jpg';

const TreeTransItem = ({ carbonWaste }: { carbonWaste: number }) => {
  const TreeItem = [
    {
      treeName: '소나무',
      value: Math.floor(carbonWaste / 118.8),
      src: pineTree,
    },
    {
      treeName: '잣나무',
      value: Math.floor(carbonWaste / 180.8),
      src: koreanPineTree,
    },
    {
      treeName: '편백나무',
      value: Math.floor(carbonWaste / 118.8),
      src: cypress,
    },
  ];

  return (
    <S.TreeTransFrame>
      <S.TreeTransTitle>
        <S.TreeTransBoldText>몇 그루</S.TreeTransBoldText>의{' '}
        <S.TreeTransBoldText>나무</S.TreeTransBoldText>가 필요할까요?
      </S.TreeTransTitle>

      <S.TreeTransItemWrapper>
        {TreeItem.map((item: any, idx: number) => {
          return (
            <S.TreeTransItem key={idx}>
              <S.TreeTransImage src={item.src}></S.TreeTransImage>
              <S.TreeTransTreeName>{item.treeName}</S.TreeTransTreeName>
              <S.TreeTransTreeCount>
                {item.value.toLocaleString('ko-KR')}그루
              </S.TreeTransTreeCount>
            </S.TreeTransItem>
          );
        })}
      </S.TreeTransItemWrapper>
    </S.TreeTransFrame>
  );
};

export default TreeTransItem;
