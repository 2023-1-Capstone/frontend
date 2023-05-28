import api from './api';
import silentRefresh from './silentRefresh';

const test = async (buildingCode: number) => {
  try {
    const response = await api({
      url: `/api/electricity/${buildingCode}`,
      method: 'GET',
    });

    return response.data;
  } catch (e) {
    // silentRefresh().then((data) => console.log('리프레시 토큰 발급: ', data));
  }
};

export default test;
