import { areaDataType } from '../../../type/Types';
import { buildingByIdx } from '../../../store/store';

const getBuildingTargetDataElectricity = (
  areaInfo: areaDataType[],
  buildingData: any,
  year: string,
  month: string
) => {
  const targetUsage = areaInfo?.map((item: areaDataType, idx: number) => {
    const targetYearData: any = item?.usagesList.filter(
      (usage) => usage.year === parseInt(year)
    )[0].usages[parseInt(month) - 1];
    if (targetYearData.prediction)
      return (
        (targetYearData.prediction * 1000) /
        buildingData[idx].elecArea
      ).toFixed(2);
    return ((targetYearData.data * 1000) / buildingData[idx].elecArea).toFixed(
      2
    );
  });
  return targetUsage;
};

const getBuildingUsageArrElectricity = (
  areaInfo: areaDataType[],
  year: string,
  month: string
) => {
  const targetUsage = areaInfo?.map((item: areaDataType, idx: number) => {
    const targetYearData: any = item?.usagesList.filter(
      (usage) => usage.year === parseInt(year)
    )[0].usages[parseInt(month) - 1];
    if (targetYearData.prediction) return targetYearData.prediction;
    return targetYearData.data;
  });
  return targetUsage;
};

const getLowestCorrectionValueArr = (
  buildingData: any,
  averageList: any,
  usageList: any,
  average: number
) => {
  const aboveAverageBuildingIdx = averageList
    ?.map((item: any, idx: number) => {
      if (item > average) return idx;
      return;
    })
    .filter((val: any) => val !== undefined);

  const aboveAverageBuildingName = aboveAverageBuildingIdx.map(
    (val: number) => buildingByIdx[val]
  );
  const aboveAverageBuildingUsage = aboveAverageBuildingIdx.map((val: number) =>
    Math.floor(buildingData[val].elecArea * average)
  );

  const aboveBuildingRealUsage = aboveAverageBuildingIdx.map(
    (val: number, idx: number) => {
      return usageList[val] * 1000 - aboveAverageBuildingUsage[idx];
    }
  );

  return {
    aboveAverageBuildingName,
    aboveAverageBuildingUsage,
    aboveBuildingRealUsage,
  };
};

const getBuildingTargetDataGas = (
  areaInfo: areaDataType[],
  buildingData: any,
  year: string,
  month: string
) => {
  const targetUsage = areaInfo?.map((item: areaDataType, idx: number) => {
    const targetYearData: any = item?.usagesList.filter(
      (usage) => usage.year === parseInt(year)
    )[0].usages[parseInt(month) - 1];
    if (targetYearData.prediction)
      return (targetYearData.prediction / buildingData[idx].gasArea).toFixed(2);
    return (targetYearData.data / buildingData[idx].gasArea).toFixed(2);
  });
  return targetUsage;
};

const findMostWasteIdx = (data: number[]) => {
  return data?.reduce(
    (iMax: any, x: number, idx: number, arr: any) =>
      x > parseFloat(arr[iMax]) ? idx : iMax,
    0
  );
};

export {
  getBuildingTargetDataElectricity,
  getBuildingTargetDataGas,
  findMostWasteIdx,
  getBuildingUsageArrElectricity,
  getLowestCorrectionValueArr,
};
