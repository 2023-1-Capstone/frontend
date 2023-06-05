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
      if (!cur.prediction) return acc + cur.data;
      return acc + cur.prediction;
    }, 0)
  );
  const monthLabel = monthCategory;

  const yearBackgroundColor = chart.map((item: chartInfoType) => {
    for (let i = 0; i < item.usages.length; i++) {
      if (item.usages[i].prediction) return 'rgb(0,0,0,0.1)';
    }
    return 'rgb(91,125,177,0.9)';
  });

  const matchChartCategory: any = {
    '월별 가스 사용량': ['2023', yearData.reverse(), monthLabel],
    '연별 가스 사용량': [
      null,
      null,
      yearLabel,
      yearTotalWaste,
      yearBackgroundColor,
    ],
    '동월 가스 사용량': ['12월', monthCategory, yearLabel],
  };
  return matchChartCategory;
};

export { dropdownInfoCreater, createChartCategoryArray };
