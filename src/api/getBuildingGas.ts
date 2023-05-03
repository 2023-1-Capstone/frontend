import api from './api';

const getBuildingGas = async (buildingCode: number) => {
  try {
    const response = await api({
      url: `/api/gas/${buildingCode}`,
      method: 'GET',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getBuildingGas;
