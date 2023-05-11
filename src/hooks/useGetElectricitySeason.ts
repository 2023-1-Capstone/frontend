import { useState } from 'react';
import api from '../api/api';
import { useQuery } from '@tanstack/react-query';
import { chartInfoType } from '../type/Types';

const useGetElectricitySeason = () => {
  const [chartData, setChartData] = useState<chartInfoType[]>([]);

  const getElectricity = async () => {
    const data = await api('/api/electricity');
  };

  const query = useQuery(['getElectricity']);
};

export default useGetElectricitySeason;
