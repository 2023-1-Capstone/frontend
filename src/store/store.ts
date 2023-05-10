import 본관 from '../assets/schoolImage/본관.jpg';
import 주년60 from '../assets/schoolImage/60주년.jpg';
import 하이테크 from '../assets/schoolImage/하이테크.jpg';
import 정석 from '../assets/schoolImage/정석.jpg';
import 호관2 from '../assets/schoolImage/2호관.jpg';
import 호관5 from '../assets/schoolImage/5호관.jpg';
import 호관6 from '../assets/schoolImage/6호관.jpg';
import 로스쿨관 from '../assets/schoolImage/로스쿨관.jpg';
import 서호관 from '../assets/schoolImage/서호관.jpg';
import 학생회관 from '../assets/schoolImage/학생회관.jpg';
import { buildingInfoType } from '../type/Types';
import electricityIcon from '../assets/svg/electricityCategory.svg';
import gasIcon from '../assets/svg/gasCategory.svg';
import carbon from '../assets/svg/carbon.svg';

const monthlyInitData: any = {
  labels: [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ],
  datasets: [
    {
      type: 'bar',
      backgroundColor: ['rgb(75, 192, 192)'],
      maxBarThickness: 35,
      borderRadius: 7,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
  ],
};

const seasonInitData: any = {
  labels: ["봄", "여름", "가을", "겨울"],

  datasets: [
    {
      type: "bar",
      backgroundColor: "rgb(75, 192, 192)",
      data: [100, 400, 300, 200],
    },
  ],
};

const buildingSrc = [
  본관,
  하이테크,
  정석,
  주년60,
  호관2,
  호관5,
  호관6,
  학생회관,
  서호관,
  로스쿨관,
];

const buildingCode: any = Object.freeze({
  본관: 1,
  하이테크관: 2,
  정석학술정보관: 3,
  '60주년기념관': 4,
  '2,4호관': 5,
  '5호관': 6,
  '6,9호관': 7,
  학생회관: 8,
  서호관: 9,
  로스쿨관: 10,
});

const electricityChartCategory = [
  "월별 전기 사용량",
  "연별 전기 사용량",
  "동월 전기 사용량",
];

const gasChartCategory = [
  "월별 가스 사용량",
  "연별 가스 사용량",
  "동월 가스 사용량",
];

const monthCategory = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

const yearCategory = ["2023", "2022", "2021", "2020", "2019", "2018", "2017"];

const options: any = {
  reponsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label,
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null ? context.parsed.y + 'kwh' : null;
        },
      },
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

      title: {
        display: true,
        text: '단위 : kwh',
      },
    },
  },
};

const indicateCategory = [
  {
    content: "계절별 전력사용 순위",
    src: electricityIcon,
    route: "/indicator/season/electricity",
  },
  {
    content: "계절별 가스사용 순위",
    src: gasIcon,
    route: "/indicator/season/gas",
  },
  {
    content: "면적당 전력사용 순위",
    src: electricityIcon,
    route: "/indicator/area/electricity",
  },
  {
    content: "면적당 가스사용 순위",
    src: gasIcon,
    route: "/indicator/area/gas",
  },
  {
    content: "건물별 탄소 배출량",
    src: carbon,
    route: "/indicator/carbon/buildings",
  },
  {
    content: "연도별 탄소 배출량",
    src: carbon,
    route: "/indicator/carbon/all",
  },
];

export {
  monthlyInitData,
  buildingCode,
  electricityChartCategory,
  monthCategory,
  options,
  yearCategory,
  indicateCategory,
  seasonInitData,
  gasChartCategory,
  buildingSrc,
};
