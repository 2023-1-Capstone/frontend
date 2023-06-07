import React, { useEffect } from 'react';
import { Wrapper, WrapperInner } from '../../components/Wrapper/Wrapper.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { useNavigate } from 'react-router-dom';
import * as S from './Home.style';
import Header from '../../components/Header/Header';
import category from './HomeObject';
import { homeCategoryType } from '../../type/Types';
import silentRefresh from '../../api/silentRefresh';
import induck from '../../assets/svg/mascot.svg';

const HomePage = () => {
  function renderItems() {
    const renderIcons = (category: homeCategoryType, index: number) => (
      <S.HomeIconContainer
        key={category.id}
        onClick={() => navigate(`/${category.route}`)}
        corner={index}
      >
        <S.HomeCategoryIcon src={category.src} />
        <S.HomeTextContainer>{category.descriptSummary}</S.HomeTextContainer>
      </S.HomeIconContainer>
    );

    const renderPartitions = () => {
      const partitions = [];
      for (let i = 0; i < category.length; i += 2) {
        partitions.push(
          <S.HomeContainerPartition key={i}>
            {renderIcons(category[i], i)}
            {renderIcons(category[i + 1], i + 1)}
          </S.HomeContainerPartition>
        );
      }
      return partitions;
    };

    return (
      <S.HomeRepresentContainer>{renderPartitions()}</S.HomeRepresentContainer>
    );
  }

  const navigate = useNavigate();

  return (
    <Wrapper>
      <Header></Header>
      <WrapperInner>
        <S.HomeCategoryList>
          <S.HomeCategoryIcon src={induck}></S.HomeCategoryIcon>
          <S.HomeRepresentText>
            인하대학교 에너지 사용량을 알아보세요!
          </S.HomeRepresentText>
          <S.HomeRepresentContainer>{renderItems()}</S.HomeRepresentContainer>
        </S.HomeCategoryList>
      </WrapperInner>
    </Wrapper>
  );
};

export default HomePage;
