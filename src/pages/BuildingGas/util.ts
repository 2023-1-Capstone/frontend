const dropdownInfoCreater = (
  height: string,
  xCoordinate: string,
  size: string,
  category: string[],
  setChartCategory: React.Dispatch<React.SetStateAction<string>>,
  setIsCategoryModalOn: React.Dispatch<React.SetStateAction<Boolean>>
) => {
  return {
    height: height,
    xCoordinate: xCoordinate,
    size: size,
    category: category,
    setChartCategory: setChartCategory,
    setIsCategoryModalOn: setIsCategoryModalOn,
  };
};

export { dropdownInfoCreater };
