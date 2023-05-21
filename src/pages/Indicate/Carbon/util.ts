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
};
