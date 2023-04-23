import React from 'react';
import * as S from './Dropdown.style';
import { dropDonwInfoType } from '../../type/Types';

const sizeObj: any = {
  large: '12.1rem',
  middle: '6.5rem',
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
      >
        {dropDownInfo.category.map((item: string) => {
          return (
            <>
              <S.DropdownItem
                size={sizeObj[dropDownInfo.size]}
                onClick={clickCategory}
              >
                {item}
              </S.DropdownItem>
            </>
          );
        })}
      </S.DropdownFrame>
    </>
  );
};

export { Dropdown };
