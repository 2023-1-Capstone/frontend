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
import electricityIcon from '../assets/svg/electricityCategory.svg';
import gasIcon from '../assets/svg/gasCategory.svg';
import carbon from '../assets/svg/carbon.svg';
import { plugin } from './chartPlugin';

const monthCategory = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
];

const doughnutColor = [
  'rgb(255, 0, 0, 0.4)',
  'rgb(255, 94, 0, 0.4)',
  'rgb(255, 187, 0, 0.4)',
  'rgb(255, 228, 0, 0.4)',
  'rgb(171, 242, 0, 0.4)',
  'rgb(29, 219, 22, 0.4)',
  'rgb(0, 216, 255, 0.4)',
  'rgb(0, 84, 255, 0.4)',
  'rgb(1, 0, 255, 0.4)',
  'rgb(95, 0, 255, 0.4)',
  'rgb(255, 0, 221, 0.4)',
  'rgb(255, 0, 127, 0.4)',
];

const BuildingCarbonDoughnut = [
  'rgba(0, 99, 132, 0.5)',
  'rgba(25, 99, 132, 0.5)',
  'rgba(50, 99, 132, 0.5)',
  'rgba(75, 99, 132, 0.5)',
  'rgba(100, 99, 132, 0.5)',
  'rgba(125, 99, 132, 0.5)',
  'rgba(150, 99, 132, 0.5)',
  'rgba(175, 99, 132, 0.5)',
  'rgba(200, 99, 132, 0.5)',
  'rgba(225, 99, 132, 0.5)',
  'rgba(255, 99, 132, 0.5)',
];

const monthlyInitData: any = {
  labels: monthCategory,
  datasets: [
    {
      backgroundColor: ['#6E85B7'],
      borderColor: ['#6E85B7'],
      maxBarThickness: 35,
      borderRadius: 3,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      label: '사용량',
    },

    {
      type: 'pie',
      backgroundColor: ['#D8D8D8'],
      borderColor: ['#D8D8D8'],
      label: '예측값',
    },
    {
      backgroundColor: ['#ff6666'],
      borderColor: ['#ff6666'],
      type: 'pie',
      maxBarThickness: 35,
      borderRadius: 3,
      label: '실사용 > 예측',
    },
  ],
};

const monthlyInitDataCarbonAll: any = {
  labels: monthCategory,
  datasets: [
    {
      backgroundColor: ['#6E85B7'],
      borderColor: ['#6E85B7'],
      maxBarThickness: 35,
      borderRadius: 3,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      label: '사용량',
    },
  ],
};

const monthlyInitWaterData: any = {
  labels: monthCategory,
  datasets: [
    {
      backgroundColor: ['#6E85B7'],
      yAxisID: 'y-left',
      maxBarThickness: 35,
      borderRadius: 3,
      label: '사용량',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      type: 'line',
      yAxisID: 'y-right',
      backgroundColor: ['#FFFFFF'],
      borderColor: ['#9BA4B5'],
      maxBarThickness: 35,
      borderRadius: 3,
      borderWidth: 1,
      label: '요금',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      type: 'pie',
      yAxisID: 'y-left',
      backgroundColor: ['#D8D8D8'],
      borderColor: ['#D8D8D8'],
      label: '예측값',
    },
  ],
};

const monthlyInitAllData: any = {
  labels: monthCategory,
  datasets: [
    {
      type: 'line',
      yAxisID: 'y-right',
      backgroundColor: ['#FFFFFF'],
      borderColor: ['#9BA4B5'],
      maxBarThickness: 35,
      borderRadius: 3,
      borderWidth: 1,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      label: '요금',
    },
    {
      backgroundColor: ['#6E85B7'],
      yAxisID: 'y-left',
      maxBarThickness: 35,
      borderRadius: 3,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      label: '사용량',
    },

    {
      type: 'pie',
      yAxisID: 'y-left',
      backgroundColor: ['#D8D8D8'],
      borderColor: ['#D8D8D8'],
      label: '예측값',
    },
  ],
};

const monthlyInitDatas: any = {
  labels: monthCategory,
  datasets: [
    {
      backgroundColor: doughnutColor,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      borderRadius: 3,
    },
  ],
};

const seasonInitData: any = {
  labels: ['봄', '여름', '가을', '겨울'],
  datasets: [
    {
      maxBarThickness: 35,
      backgroundColor: ['#6E85B7'],
      borderColor: ['#6E85B7'],
      borderRadius: 3,
      data: [],
    },
  ],
};

const seasonInitDataDoughnut: any = {
  labels: ['봄', '여름', '가을', '겨울'],
  datasets: [
    {
      maxBarThickness: 35,
      backgroundColor: [
        'rgba(98, 182, 203,0.7)',
        'rgba(190, 233, 232,0.7)',
        'rgba(95, 168, 211,0.7)',
        'rgba(27, 73, 101,0.7)',
      ],
      borderColor: [
        'rgba(98, 182, 203,0.7)',
        'rgba(190, 233, 232,0.7)',
        'rgba(95, 168, 211,0.7)',
        'rgba(27, 73, 101,0.7)',
      ],
      borderRadius: 3,
      data: [],
    },
  ],
};

const areaInitData: any = {
  plugins: [plugin],

  labels: [
    '본관',
    '하이테크관',
    '정석',
    '60주년',
    '2,4호관',
    '5호관',
    '6,9호관',
    '학생회관',
    '서호관',
    '로스쿨관',
  ],

  datasets: [
    {
      maxBarThickness: 35,
      backgroundColor: BuildingCarbonDoughnut,
      borderColor: BuildingCarbonDoughnut,
      borderRadius: 3,
      data: [],
    },
  ],
};

const carbonBuildingInitData: any = {
  plugins: [plugin],

  labels: [
    '본관',
    '하이테크관',
    '정석',
    '60주년',
    '2,4호관',
    '5호관',
    '6,9호관',
    '학생회관',
    '서호관',
    '로스쿨관',
  ],

  datasets: [
    {
      maxBarThickness: 10,
      backgroundColor: [
        'rgba(0, 99, 132, 0.6)',
        'rgba(25, 99, 132, 0.6)',
        'rgba(50, 99, 132, 0.6)',
        'rgba(75, 99, 132, 0.6)',
        'rgba(100, 99, 132, 0.6)',
        'rgba(125, 99, 132, 0.6)',
        'rgba(150, 99, 132, 0.6)',
        'rgba(175, 99, 132, 0.6)',
        'rgba(200, 99, 132, 0.6)',
        'rgba(225, 99, 132, 0.6)',
        'rgba(255, 99, 132, 0.6)',
      ],
      borderColor: [
        'rgba(0, 99, 132, 0.6)',
        'rgba(25, 99, 132, 0.6)',
        'rgba(50, 99, 132, 0.6)',
        'rgba(75, 99, 132, 0.6)',
        'rgba(100, 99, 132, 0.6)',
        'rgba(125, 99, 132, 0.6)',
        'rgba(150, 99, 132, 0.6)',
        'rgba(175, 99, 132, 0.6)',
        'rgba(200, 99, 132, 0.6)',
        'rgba(225, 99, 132, 0.6)',
      ],
      borderRadius: 3,
      data: [],
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

const buildingByIdx = [
  '본관',
  '하이테크관',
  '정석',
  '60주년',
  '2,4호관',
  '5호관',
  '6,9호관',
  '학생회관',
  '서호관',
  '로스쿨관',
];

const electricityChartCategory = [
  '월별 전기 사용량',
  '연별 전기 사용량',
  '동월 전기 사용량',
];

const gasChartCategory = [
  '월별 가스 사용량',
  '연별 가스 사용량',
  '동월 가스 사용량',
];

const waterChartCategory = [
  '월별 수도 사용량',
  '연별 수도 사용량',
  '동월 수도 사용량',
];

const yearCategory = ['2023', '2022', '2021', '2020', '2019', '2018', '2017'];

const optionsWater: any = {
  reponsive: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: true,
      onClick: (click: any, legendItem: any, legend: any) => {
        const datasets = legend.legendItems.map(
          (dataset: any, index: number) => {
            return dataset.text;
          }
        );

        const index = datasets.indexOf(legendItem.text);
        if (legend.chart.isDatasetVisible(index) === true)
          legend.chart.hide(index);
        else legend.chart.show(index);
      },
      labels: {
        usePointStyle: true,
        generateLabels: function (chart: any) {
          let visibility: any = [];
          for (let i = 0; i < chart.data.datasets.length; i++) {
            if (chart.isDatasetVisible(i) === true) visibility.push(false);
            else visibility.push(true);
          }

          let pointStyle: any = [];
          chart.data.datasets.forEach((dataset: any) => {
            if (dataset.type === 'line') pointStyle.push('line');
            else pointStyle.push('rect');
          });

          return chart.data.datasets.map((dataset: any, idx: number) => ({
            text: dataset.label,
            fillStyle: dataset.backgroundColor
              ? dataset?.backgroundColor[0]
              : null,
            strokeStyle: dataset.borderColor,
            pointStyle: pointStyle[idx],
            hidden: visibility[idx],
          }));
        },
      },
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label + '월',
        label: (context: any) => {
          let targetLabel = '';
          if (context.datasetIndex === 0)
            targetLabel = context.parsed.y.toLocaleString('ko-KR') + '톤';
          else targetLabel = context.parsed.y.toLocaleString('ko-KR') + '만원';

          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null ? targetLabel : null;
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
    'y-left': {
      type: 'linear',
      position: 'left',
      grace: '50%',
      grid: {
        display: false,
      },
    },
    'y-right': {
      type: 'linear',
      position: 'right',

      grid: {
        display: false,
      },
    },
  },
};

const optionsElectricityAll: any = {
  reponsive: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: true,
      onClick: (click: any, legendItem: any, legend: any) => {
        const datasets = legend.legendItems.map(
          (dataset: any, index: number) => {
            return dataset.text;
          }
        );

        const index = datasets.indexOf(legendItem.text);
        if (legend.chart.isDatasetVisible(index) === true)
          legend.chart.hide(index);
        else legend.chart.show(index);
      },
      labels: {
        usePointStyle: true,
        generateLabels: function (chart: any) {
          let visibility: any = [];
          for (let i = 0; i < chart.data.datasets.length; i++) {
            if (chart.isDatasetVisible(i) === true) visibility.push(false);
            else visibility.push(true);
          }

          let pointStyle: any = [];
          chart.data.datasets.forEach((dataset: any) => {
            if (dataset.type === 'line') pointStyle.push('line');
            else pointStyle.push('rect');
          });

          return chart.data.datasets.map((dataset: any, idx: number) => ({
            text: dataset.label,
            fillStyle: dataset.backgroundColor
              ? dataset?.backgroundColor[0]
              : null,
            strokeStyle: dataset.borderColor,
            pointStyle: pointStyle[idx],
            hidden: visibility[idx],
          }));
        },
      },
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label + '월',
        label: (context: any) => {
          let targetLabel = '';
          if (context.datasetIndex === 1)
            targetLabel = context.parsed.y.toLocaleString('ko-KR') + 'Mwh';
          else targetLabel = context.parsed.y.toLocaleString('ko-KR') + '만원';
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null ? targetLabel : null;
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
    'y-left': {
      type: 'linear',
      position: 'left',
      grace: '140%',
      grid: {
        display: false,
      },
    },
    'y-right': {
      type: 'linear',
      position: 'right',
      grid: {
        display: false,
      },
    },
  },
};

const optionsGasAll: any = {
  reponsive: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: true,
      onClick: (click: any, legendItem: any, legend: any) => {
        const datasets = legend.legendItems.map(
          (dataset: any, index: number) => {
            return dataset.text;
          }
        );

        const index = datasets.indexOf(legendItem.text);
        if (legend.chart.isDatasetVisible(index) === true)
          legend.chart.hide(index);
        else legend.chart.show(index);
      },
      labels: {
        usePointStyle: true,
        generateLabels: function (chart: any) {
          let visibility: any = [];
          for (let i = 0; i < chart.data.datasets.length; i++) {
            if (chart.isDatasetVisible(i) === true) visibility.push(false);
            else visibility.push(true);
          }

          let pointStyle: any = [];
          chart.data.datasets.forEach((dataset: any) => {
            if (dataset.type === 'line') pointStyle.push('line');
            else pointStyle.push('rect');
          });

          return chart.data.datasets.map((dataset: any, idx: number) => ({
            text: dataset.label,
            fillStyle: dataset.backgroundColor
              ? dataset?.backgroundColor[0]
              : null,
            strokeStyle: dataset.borderColor,
            pointStyle: pointStyle[idx],
            hidden: visibility[idx],
          }));
        },
      },
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label + '월',
        label: (context: any) => {
          let targetLabel = '';
          if (context.datasetIndex === 1)
            targetLabel = context.parsed.y.toLocaleString('ko-KR') + 'm3';
          else targetLabel = context.parsed.y.toLocaleString('ko-KR') + '만원';
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null ? targetLabel : null;
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
    'y-left': {
      type: 'linear',
      position: 'left',
      grace: '100%',
      grid: {
        display: false,
      },
    },
    'y-right': {
      type: 'linear',
      position: 'right',
      grace: '50',
      grid: {
        display: false,
      },
    },
  },
};

const options: any = {
  reponsive: false,
  plugins: {
    datalabels: {
      display: false,
    },

    legend: {
      display: true,
      onClick: (click: any, legendItem: any, legend: any) => {
        const datasets = legend.legendItems.map(
          (dataset: any, index: number) => {
            return dataset.text;
          }
        );

        const index = datasets.indexOf(legendItem.text);
        if (legend.chart.isDatasetVisible(index) === true)
          legend.chart.hide(index);
        else legend.chart.show(index);
      },
      labels: {
        usePointStyle: true,
        generateLabels: function (chart: any) {
          let visibility: any = [];
          for (let i = 0; i < chart.data.datasets.length; i++) {
            if (chart.isDatasetVisible(i) === true) visibility.push(false);
            else visibility.push(true);
          }

          let pointStyle: any = [];
          chart.data.datasets.forEach((dataset: any) => {
            if (dataset.type === 'line') pointStyle.push('line');
            else pointStyle.push('rect');
          });

          return chart.data.datasets.map((dataset: any, idx: number) => ({
            text: dataset.label,
            fillStyle: dataset.backgroundColor
              ? dataset?.backgroundColor[0]
              : null,
            strokeStyle: dataset.borderColor,
            pointStyle: pointStyle[idx],
            hidden: visibility[idx],
          }));
        },
      },
    },

    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label + '월',
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null ? context.parsed.y + 'Mwh' : null;
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
    },
  },
};

const optionsBuildingElectricitiy: any = {
  reponsive: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label + '월',
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null
            ? context.parsed.y.toLocaleString('ko-KR') + 'Mwh'
            : null;
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
    },
  },
};

const optionsBuildingGas: any = {
  reponsive: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label + '월',
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null
            ? context.parsed.y.toLocaleString('ko-KR') + 'm3'
            : null;
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
    },
  },
};

const optionsSeason: any = {
  reponsive: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label,
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null ? context.parsed.y + 'Mwh' : null;
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
    },
  },
};

const optionsSeasonGas: any = {
  reponsive: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label,
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null ? context.parsed.y + 'm3' : null;
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
    },
  },
};

const optionsDoughnut: any = {
  layout: {
    padding: {
      top: 40,
      left: 10,
      bottom: 30,
    },
  },
  cutout: '65%',
  plugins: {
    tooltips: {
      callbacks: {
        title: (context: any) => context[0].label + '월',
      },
    },
    datalabels: {
      labels: {
        index: {
          font: {
            size: 14,
            weight: 'bold',
          },
          color: '#404040',
          formatter: function (value: any, context: any) {
            return context.chart.data.labels[context.dataIndex];
          },
          align: 'end',
          anchor: 'end',
        },
        value: {
          font: {
            size: 12,
            weight: 'bold',
          },
          color: '#fff',
          formatter: function (value: any, context: any) {
            const percentage =
              Math.round(
                (value / context.chart.getDatasetMeta(0).total) * 100
              ) + '%';
            return percentage;
          },

          align: 'middle',
          anchor: 'middle',
        },
      },
    },
    legend: {
      display: false,
    },
  },
};

const optionsDoughnutCarbon: any = {
  layout: {
    padding: {
      top: 80,
      left: 10,
      bottom: 30,
    },
  },
  cutout: '65%',
  plugins: {
    title: {
      display: true,
    },
    tooltips: {
      callbacks: {
        title: (context: any) => context[0].label + '월',
      },
    },

    datalabels: {
      labels: {
        // index: {
        //   font: {
        //     size: 14,
        //     weight: 'bold',
        //   },
        //   color: '#404040',
        //   formatter: function (value: any, context: any) {
        //     return context.chart.data.labels[context.dataIndex];
        //   },
        //   align: 'end',
        //   anchor: 'end',
        // },
        value: {
          formatter: function (value: any, context: any) {
            return `${Math.round(
              (value /
                context.chart.getDatasetMeta(context.datasetIndex).total) *
                100
            )}%`;
          },
          color: '#fff',
        },
      },
    },
    legend: {
      display: false,
    },
  },
};

const optionsArea: any = {
  reponsive: false,
  indexAxis: 'y',
  plugins: {
    datalabels: {
      formatter: (value: any, context: any) => {
        return value?.toLocaleString('ko-KR') + 'Kwh/㎡';
      },
      color: '#fff',
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label,
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null ? context.parsed.x + 'Kwh/㎡' : null;
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

      title: {},
    },
  },
};

const optionsAreaGas: any = {
  reponsive: false,
  indexAxis: 'y',
  plugins: {
    datalabels: {
      formatter: (value: any, context: any) => {
        return value?.toLocaleString('ko-KR') + 'm3/㎡';
      },
      color: '#fff',
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label,
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null ? context.parsed.x + 'm3/㎡' : null;
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

      title: {},
    },
  },
};

const optionsGas: any = {
  reponsive: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: true,
      onClick: (click: any, legendItem: any, legend: any) => {
        const datasets = legend.legendItems.map(
          (dataset: any, index: number) => {
            return dataset.text;
          }
        );

        const index = datasets.indexOf(legendItem.text);
        if (legend.chart.isDatasetVisible(index) === true)
          legend.chart.hide(index);
        else legend.chart.show(index);
      },
      labels: {
        usePointStyle: true,
        generateLabels: function (chart: any) {
          let visibility: any = [];
          for (let i = 0; i < chart.data.datasets.length; i++) {
            if (chart.isDatasetVisible(i) === true) visibility.push(false);
            else visibility.push(true);
          }

          let pointStyle: any = [];
          chart.data.datasets.forEach((dataset: any) => {
            if (dataset.type === 'line') pointStyle.push('line');
            else pointStyle.push('rect');
          });

          return chart.data.datasets.map((dataset: any, idx: number) => ({
            text: dataset.label,
            fillStyle: dataset.backgroundColor
              ? dataset?.backgroundColor[0]
              : null,
            strokeStyle: dataset.borderColor,
            pointStyle: pointStyle[idx],
            hidden: visibility[idx],
          }));
        },
      },
    },

    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label + '월',
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null ? context.parsed.y + 'm3' : null;
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
    },
  },
};

const optionsCarbon: any = {
  reponsive: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label,
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null ? context.parsed.y + 'kg' : null;
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
    },
  },
};

const optionsCarbonAll: any = {
  reponsive: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label + '월',
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null
            ? Math.floor(context.parsed.y * 1000).toLocaleString('ko-KR') + 'kg'
            : null;
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
    },
  },
};

const optionsCarbonBuilding: any = {
  reponsive: false,
  indexAxis: 'y',
  plugins: {
    datalabels: {
      formatter: (value: any, context: any) => {
        return value?.toLocaleString('ko-KR') + 'kg';
      },
      color: '#fff',
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context: any) => context[0].label,
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null
            ? context.parsed.x.toLocaleString('ko-KR') + 'Kg'
            : null;
        },
      },
    },
  },
  scales: {
    x: {
      offset: false,
      grid: {
        display: false,
      },
      ticks: {
        callback: function (val: any, index: any): any {
          return val / 10000 + '만';
        },
      },
    },
    y: {
      grid: {
        display: false,
      },

      title: {},
    },
  },
};

const optionsAreaStacked: any = {
  responsive: false,
  indexAxis: 'y',
  plugins: {
    title: {
      display: false,
      text: 'Chart.js Bar Chart - Stacked',
    },
    legend: {
      labesl: {
        boxWidth: 10,
      },
    },
    datalabels: {
      display: false,
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
};

const areaStackedInitData: any = {
  labels: [
    '본관',
    '하이테크관',
    '정석',
    '60주년',
    '2,4호관',
    '5호관',
    '6,9호관',
    '학생회관',
    '서호관',
    '로스쿨관',
  ],

  datasets: [
    {
      label: '감소값',
      data: [1, 2, 3, 4, 5],
      backgroundColor: ['rgb(138, 200, 240)'],
    },
    {
      label: '실제 사용량',
      data: [1, 2, 3, 4, 5],
      backgroundColor: ['rgb(214, 214, 214)'],
    },
  ],
};

const indicateCategory = [
  {
    content: '계절별 전력사용',
    src: electricityIcon,
    route: '/indicator/season/electricity',
  },
  {
    content: '계절별 가스사용',
    src: gasIcon,
    route: '/indicator/season/gas',
  },
  {
    content: '면적당 전력사용',
    src: electricityIcon,
    route: '/indicator/area/electricity',
  },
  {
    content: '면적당 가스사용',
    src: gasIcon,
    route: '/indicator/area/gas',
  },
  {
    content: '건물별 탄소 배출량',
    src: carbon,
    route: '/indicator/carbon/buildings',
  },
  {
    content: '연도별 탄소 배출량',
    src: carbon,
    route: '/indicator/carbon/all',
  },
];

const seasonIdx = [
  [2, 3, 4],
  [5, 6, 7],
  [8, 9, 10],
  [11, 0, 1],
];

const stuffPrice = {
  빅맥: 7000,
  '주안역 511왕복': 1900,
  아이폰: 1400000,
  '서호관 라면': 500,
};

const optionsWaterFee: any = {
  reponsive: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: (context: any) =>
          context[0].label + `${context[0].label.length >= 4 ? '년' : '월'}`,
        label: (context: any) => {
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null
            ? context.parsed.y.toLocaleString('ko-KR') + 't'
            : null;
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
    },
  },
};

const season = ['봄', '여름', '가을', '겨울'];
export {
  monthlyInitData,
  monthlyInitDatas,
  buildingCode,
  electricityChartCategory,
  monthCategory,
  options,
  yearCategory,
  indicateCategory,
  seasonInitData,
  seasonInitDataDoughnut,
  gasChartCategory,
  buildingSrc,
  seasonIdx,
  season,
  stuffPrice,
  optionsGas,
  areaInitData,
  optionsArea,
  buildingByIdx,
  optionsAreaGas,
  optionsDoughnut,
  doughnutColor,
  optionsCarbon,
  optionsCarbonBuilding,
  optionsDoughnutCarbon,
  carbonBuildingInitData,
  areaStackedInitData,
  optionsAreaStacked,
  BuildingCarbonDoughnut,
  waterChartCategory,
  optionsWater,
  monthlyInitWaterData,
  optionsCarbonAll,
  optionsSeason,
  optionsElectricityAll,
  optionsGasAll,
  monthlyInitAllData,
  optionsBuildingElectricitiy,
  monthlyInitDataCarbonAll,
  optionsBuildingGas,
  optionsSeasonGas,
};
