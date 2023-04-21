import React from 'react';
import * as S from './Dropdown.style';

const Dropdown = ({
  category,
  setChartCategory,
  setIsCategoryModalOn,
}: {
  category: string[];
  setChartCategory: any;
  setIsCategoryModalOn: any;
}) => {
  const clickCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    setChartCategory(e.currentTarget.innerHTML);
    setIsCategoryModalOn(false);
  };

  return (
    <>
      <S.DropdownFrame>
        {category.map((item: string) => {
          return (
            <>
              <S.DropdownItem onClick={clickCategory}>{item}</S.DropdownItem>
            </>
          );
        })}
      </S.DropdownFrame>
    </>
  );
};

export { Dropdown };
