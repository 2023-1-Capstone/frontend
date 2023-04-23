import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import Header from '../../components/Header/Header';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import * as S from './Indicate.style';
import { indicateCategory } from '../../store/store';
import crown from '../../assets/svg/crown.svg';

const Indicate = () => {
  return (
    <>
      <Wrapper>
        <Header></Header>
        <WrapperInner>
          <S.IndicateTotalWrapper>
            <S.IndicateTitle>
              <img src={crown}></img>&nbsp; 재미로 보는 랭킹
            </S.IndicateTitle>
            <S.IndicateDescription>
              학교의 에너지 사용 내역을 다양하게 살펴보세요!
            </S.IndicateDescription>
            <S.IndicateWrapper>
              {indicateCategory.map((item: any) => {
                return (
                  <S.IndicateItem>
                    <S.IndicateItemInner>
                      <S.IndicateItemText>{item.content}</S.IndicateItemText>
                      <S.IndicateItemIcon src={item.src}></S.IndicateItemIcon>
                    </S.IndicateItemInner>
                  </S.IndicateItem>
                );
              })}
            </S.IndicateWrapper>
          </S.IndicateTotalWrapper>
        </WrapperInner>
        <NavigationBar navigationStatus="indicator"></NavigationBar>
      </Wrapper>
    </>
  );
};

export default Indicate;
