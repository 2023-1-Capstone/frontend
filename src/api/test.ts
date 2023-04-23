import api from './api';

const test = async (buildingCode: number) => {
  try {
    const response = await api({
      url: `/api/electricity/${buildingCode}`,
      method: 'GET',
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default test;
