type navigationItemType = {
  id: string;
  src: string;
  message: string;
  status: string;
};

type homeCategoryType = {
  id: number;
  route: string;
  src: string;
  descriptTop: string;
  descriptBottom: string;
};

type buildingInfoType = {
  id: number;
  name: string;
  elecArea: number;
  elecDescription: number | null;
  gasArea: number;
  gasDescription: number | null;
};

type dropDonwInfoType = {
  height: string;
  xCoordinate: string;
  yCoordinate: string;
  size: string;
  category: string[];
  setChartCategory: React.Dispatch<React.SetStateAction<string>>;
  setIsCategoryModalOn: React.Dispatch<React.SetStateAction<Boolean>>;
};

type chartInfoType = {
  year: number;
  usages: chartInfoUsageType[];
};

type chartInfoUsageType = {
  data: number;
  prediction: boolean;
};

export type {
  navigationItemType,
  homeCategoryType,
  buildingInfoType,
  dropDonwInfoType,
  chartInfoType,
  chartInfoUsageType,
};
