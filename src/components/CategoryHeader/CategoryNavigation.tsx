import React, { useState } from 'react';
import * as S from './CategoryNavigation.style';

const CategoryNavigation = ({
  categories,
  setCategory,
  categoryState,
}: {
  categories: string[];
  setCategory: any;
  categoryState: any;
}) => {
  return (
    <S.NavigateBox>
      {categories.map((item: string) => {
        return (
          <S.NavigateItem
            len={categories.length}
            focus={categoryState === `${item}`}
            onClick={() => setCategory(item)}
          >
            <S.NavigateItemText focus={categoryState === `${item}`}>
              {item}
            </S.NavigateItemText>
          </S.NavigateItem>
        );
      })}
    </S.NavigateBox>
  );
};

export default CategoryNavigation;
