import React from 'react';
import * as S from './NavigationBar.style';
import home from '../../assets/svg/home.svg';
import gas from '../../assets/svg/gas.svg';
import electricity from '../../assets/svg/eletricity.svg';
import indicator from '../../assets/svg/indicator.svg';
import { navigationItemType } from '../../type/Types';

const SIDEBARITEMS: navigationItemType[] = [
  {
    id: '1',
    src: home,
    message: '홈',
    status: 'home',
  },
  {
    id: '2',
    src: electricity,
    message: '전기',
    status: 'electricity',
  },
  {
    id: '3',
    src: gas,
    message: '가스',
    status: 'gas',
  },
  {
    id: '4',
    src: indicator,
    message: '지표',
    status: 'indicator',
  },
];

const NavigationBar = () => {
  return (
    <>
      <S.NavigationFrame>
        <S.NavigationItemTotalFrame>
          {SIDEBARITEMS.map((sidebarItem: navigationItemType) => {
            return (
              <>
                <S.NavigationItemFrame>
                  <S.NavigationItemIcon
                    src={sidebarItem.src}
                  ></S.NavigationItemIcon>
                  <S.NavigationItemText>
                    {sidebarItem.message}
                  </S.NavigationItemText>
                </S.NavigationItemFrame>
              </>
            );
          })}
        </S.NavigationItemTotalFrame>
        <S.NavigationIndicator>
          <S.NavigationIndicatorLine></S.NavigationIndicatorLine>
        </S.NavigationIndicator>
      </S.NavigationFrame>
    </>
  );
};

export default NavigationBar;
