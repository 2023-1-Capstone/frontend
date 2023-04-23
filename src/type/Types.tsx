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
  buildingName: string;
  src: string;
};

type dropDonwInfoType = {
  height: string;
  xCoordinate: string;
  size: string;
  category: string[];
  setChartCategory: React.Dispatch<React.SetStateAction<string>>;
  setIsCategoryModalOn: React.Dispatch<React.SetStateAction<Boolean>>;
};

export type {
  navigationItemType,
  homeCategoryType,
  buildingInfoType,
  dropDonwInfoType,
};
