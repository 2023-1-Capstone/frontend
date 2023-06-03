import { chartInfoType } from '../../type/Types';

const dropdownInfoCreater = (
  height: string,
  xCoordinate: string,
  yCoordinate: string,
  size: string,
  category: string[],
  setChartCategory: React.Dispatch<React.SetStateAction<string>>,
  setIsCategoryModalOn: React.Dispatch<React.SetStateAction<Boolean>>
) => {
  return {
    height: height,
    xCoordinate: xCoordinate,
    yCoordinate: yCoordinate,
    size: size,
    category: category,
    setChartCategory: setChartCategory,
    setIsCategoryModalOn: setIsCategoryModalOn,
  };
};

const findMostWasteIdx = (chart: any) => {
  return chart?.reduce(
    (iMax: number, x: number, idx: number, arr: number[]) =>
      x > arr[iMax] ? idx : iMax,
    0
  );
};

const createChartCategoryArray = (
  chart: chartInfoType[],
  monthCategory: any
) => {
  const yearData = chart?.map((item: chartInfoType) => item.year);
  const yearLabel = yearData?.map((year: any) => year?.toString());
  const yearTotalWaste = chart?.map((item: chartInfoType) =>
    item.usages.reduce((acc: any, cur: any) => {
      if (!cur?.prediction) return acc + cur?.data;
      return acc + cur?.prediction;
    }, 0)
  );
  const monthLabel = monthCategory;

  const yearBackgroundColor = chart?.map((item: chartInfoType) => {
    for (let i = 0; i < item.usages.length; i++) {
      if (item.usages[i].prediction) return 'rgb(0,0,0,0.1)';
    }
    return 'rgb(75, 192, 192)';
  });

  const matchChartCategory: any = {
    '월별 수도 사용량': ['2023', yearData, monthLabel],
    '연별 수도 사용량': [
      null,
      null,
      yearLabel,
      yearTotalWaste,
      yearBackgroundColor,
    ],
    '동월 수도 사용량': ['12월', monthCategory, yearLabel],
  };
  return matchChartCategory;
};

export { dropdownInfoCreater, createChartCategoryArray, findMostWasteIdx };
