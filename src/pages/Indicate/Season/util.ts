import { seasonIdx } from '../../../store/store';

const getAverageFee = (targetFeeArray: any, targetSeasonIdx: number) => {
  return (
    seasonIdx[targetSeasonIdx]?.reduce((acc: number, cur: number) => {
      if (targetFeeArray)
        return (
          acc +
          Math.floor(targetFeeArray[cur]?.fee / targetFeeArray[cur]?.usages)
        );
      return 0;
    }, 0) / 3
  );
};

export { getAverageFee };
