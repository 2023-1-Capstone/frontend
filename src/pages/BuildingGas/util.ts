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

const createChartCategoryArray = (
  chart: chartInfoType[],
  monthCategory: any
) => {
  const yearData = chart.map((item: chartInfoType) => item.year);
  const yearLabel = yearData.map((year: any) => year.toString());
  const yearTotalWaste = chart.map((item: chartInfoType) =>
    item.usages.reduce((acc: any, cur: any) => {
      return acc + cur.data;
    }, 0)
  );
  const monthLabel = monthCategory;
  const matchChartCategory: any = {
    '월별 가스 사용량': ['2023', yearData, monthLabel],
    '연별 가스 사용량': [null, null, yearLabel, yearTotalWaste],
    '동월 가스 사용량': ['12월', monthCategory, yearLabel],
  };
  return matchChartCategory;
};

export { dropdownInfoCreater, createChartCategoryArray };
