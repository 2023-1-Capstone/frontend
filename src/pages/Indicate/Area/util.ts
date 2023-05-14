import { areaDataType } from '../../../type/Types';

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
      return (
        (targetYearData.prediction * 100) /
        buildingData[idx].elecArea
      ).toFixed(2);
    return ((targetYearData.data * 100) / buildingData[idx].gasArea).toFixed(2);
  });
  return targetUsage;
};

const findMostWasteIdx = (data: number[]) => {
  return data.reduce(
    (iMax: any, x: number, idx: number, arr: any) =>
      x > parseFloat(arr[iMax]) ? idx : iMax,
    0
  );
};

export {
  getBuildingTargetDataElectricity,
  getBuildingTargetDataGas,
  findMostWasteIdx,
};
