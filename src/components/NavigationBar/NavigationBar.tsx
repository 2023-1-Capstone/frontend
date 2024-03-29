import React from 'react';
import * as S from './NavigationBar.style';
import home from '../../assets/svg/home.svg';
import gas from '../../assets/svg/gas.svg';
import electricity from '../../assets/svg/eletricity.svg';
import carbonIcon from '../../assets/svg/carbonIcon.svg';
import waterMaterial from '../../assets/svg/waterMaterial.svg';
import { navigationItemType } from '../../type/Types';
import { useNavigate } from 'react-router-dom';

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
    src: waterMaterial,
    message: '수도',
    status: 'water',
  },
  {
    id: '5',
    src: carbonIcon,
    message: '탄소',
    status: 'carbon',
  },
];

const NavigationBar = ({ navigationStatus }: { navigationStatus: string }) => {
  const navigate = useNavigate();

  return (
    <>
      <S.NavigationFrame>
        <S.NavigationItemTotalFrame>
          {SIDEBARITEMS.map((sidebarItem: navigationItemType) => {
            return (
              <S.NavigationItemFrame
                key={sidebarItem.id}
                onClick={() => {
                  navigate(`/${sidebarItem.status}`);
                }}
              >
                <S.NavigationItemIcon
                  status={navigationStatus === sidebarItem.status}
                  src={sidebarItem.src}
                ></S.NavigationItemIcon>
                <S.NavigationItemText
                  status={navigationStatus === sidebarItem.status}
                >
                  {sidebarItem.message}
                </S.NavigationItemText>
              </S.NavigationItemFrame>
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
