import { seasonIdx } from '../../../store/store';

const getAverageFee = (targetFeeArray: any, targetSeasonIdx: number) => {
  return seasonIdx[targetSeasonIdx]?.reduce((acc: number, cur: number) => {
    if (targetFeeArray) return acc + targetFeeArray[cur]?.fee;
    return 0;
  }, 0);
};

const findMostWasteIdx = (chart: any) => {
  return chart[chart.length - 1].usages.reduce(
    (iMax: number, x: number, idx: number, arr: number[]) =>
      x > arr[iMax] ? idx : iMax,
    0
  );
};

const findMostWasteIdxArr = (chart: any) => {
  return chart?.reduce(
    (iMax: number, x: number, idx: number, arr: number[]) =>
      x > arr[iMax] ? idx : iMax,
    0
  );
};

const findLessWasteIdxArr = (chart: any) => {
  return chart?.reduce(
    (iMax: number, x: number, idx: number, arr: number[]) =>
      x < arr[iMax] ? idx : iMax,
    0
  );
};

const getTargetBuildingsUsageArray = (
  curYear: any,
  curMonth: any,
  chartData: any
) => {
  const targetArr = chartData?.map((item: any) => {
    const targetYearData: any = item?.usagesList.filter(
      (usage: any) => usage.year === parseInt(curYear)
    )[0].usages[parseInt(curMonth) - 1];
    if (targetYearData?.data) return targetYearData?.data;
    return targetYearData?.prediction;
  });

  return targetArr;
};

const getRandomNumber = (max: number, min = 0) => {
  return Math.floor(Math.random() * max) + min;
};

const getUniqueNumberList = (count: number, max: number, min = 0) => {
  const list: Set<number> = new Set<number>();

  while (count > list.size) {
    list.add(getRandomNumber(max, min));
  }

  return Array.from(list);
};

export {
  getAverageFee,
  findMostWasteIdx,
  findMostWasteIdxArr,
  getUniqueNumberList,
  getTargetBuildingsUsageArray,
  findLessWasteIdxArr,
};
