type navigationItemType = {
  id: string;
  src: string;
  message: string;
  status: string;
};

type homeCategoryType = {
  id: number;
  src: string;
  descriptTop: string;
  descriptBottom: string;
};

type buildingInfoType = {
  buildingName: string;
  src: string;
};

export type { navigationItemType, homeCategoryType, buildingInfoType };
