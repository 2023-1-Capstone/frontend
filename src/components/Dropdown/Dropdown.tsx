import React from 'react';
import * as S from './Dropdown.style';
import { dropDonwInfoType } from '../../type/Types';

const sizeObj: any = {
  large: '13.655rem',
  middle: '6.9rem',
};

const Dropdown = ({ dropDownInfo }: { dropDownInfo: dropDonwInfoType }) => {
  const clickCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    dropDownInfo.setChartCategory(e.currentTarget.innerHTML);
    dropDownInfo.setIsCategoryModalOn(false);
  };

  return (
    <>
      <S.DropdownFrame
        height={dropDownInfo.height}
        xCoordinate={dropDownInfo.xCoordinate}
        yCoordinate={dropDownInfo.yCoordinate}
      >
        {dropDownInfo?.category?.map((item: string, idx: number) => {
          return (
            <S.DropdownItem
              size={sizeObj[dropDownInfo.size]}
              onClick={clickCategory}
              key={idx}
            >
              {item}
            </S.DropdownItem>
          );
        })}
      </S.DropdownFrame>
    </>
  );
};

export { Dropdown };
