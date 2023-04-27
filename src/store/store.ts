import 본관 from '../assets/schoolImage/본관.jpg';
import 주년60 from '../assets/schoolImage/60주년.jpg';
import 하이테크 from '../assets/schoolImage/하이테크.jpg';
import 정석 from '../assets/schoolImage/정석.jpg';
import 호관2 from '../assets/schoolImage/2호관.jpg';
import { buildingInfoType } from '../type/Types';
import electricityIcon from '../assets/svg/electricityCategory.svg';
import gasIcon from '../assets/svg/gasCategory.svg';
import carbon from '../assets/svg/carbon.svg';

const monthlyInitData: any = {
  labels: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],

  datasets: [
    {
      type: 'bar',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  ],
};

const seasonInitData: any = {
  labels: ['봄', '여름', '가을', '겨울'],

  datasets: [
    {
      type: 'bar',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [100, 400, 300, 200],
    },
  ],
};

const buildingList: buildingInfoType[] = [
  { buildingName: '본관', src: 본관 },
  { buildingName: '60주년', src: 주년60 },
  { buildingName: '하이테크', src: 하이테크 },
  { buildingName: '정석', src: 정석 },
  { buildingName: '2호관', src: 호관2 },
];

const buildingCode: any = Object.freeze({
  본관: 1,
  '60주년': 2,
  '2호관': 3,
  하이테크: 4,
  정석: 5,
});

const electricityChartCategory = [
  '월별 전기 사용량',
  '연별 전기 사용량',
  '동월 전기 사용량',
];

const monthCategory = [
  '1월',
  '2월',
  '3월',
  '4월',
  '5월',
  '6월',
  '7월',
  '8월',
  '9월',
  '10월',
  '11월',
  '12월',
];

const yearCategory = ['2023', '2022', '2021', '2020', '2019', '2018', '2017'];

const options = {
  reponsive: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const indicateCategory = [
  { content: '계절별 전력사용 순위', src: electricityIcon },
  { content: '계절별 가스사용 순위', src: electricityIcon },
  { content: '면적당 전력사용 순위', src: electricityIcon },
  { content: '면적당 가스사용 순위', src: electricityIcon },
  { content: '건물별 탄소 배출량', src: electricityIcon },
  { content: '연도별 탄소 배출량', src: electricityIcon },
];

export {
  buildingList,
  monthlyInitData,
  buildingCode,
  electricityChartCategory,
  monthCategory,
  options,
  yearCategory,
  indicateCategory,
  seasonInitData,
};
