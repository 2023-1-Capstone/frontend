const optionsGasAllYear: any = {
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
            targetLabel = context.parsed.y.toLocaleString('ko-KR') + 'm3';
          else targetLabel = context.parsed.y.toLocaleString('ko-KR') + '원';
          let label = context.dataset.label + '' || '';
          return context.parsed.y !== null ? targetLabel : null;
        },
      },
    },
  },
  scales: {
    x: {
      categoryPercentage: 0.3,
      barPercentage: 0.2,
      grid: {
        offset: true,
        display: false, // x축 간격 조절을 위해 그리드 오프셋 활성화
      },
      ticks: {
        autoSkip: false, // 레이블 자동 생략 비활성화
      },
    },
    'y-left': {
      type: 'linear',
      position: 'left',
      grace: '150%',
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

const gasYearAllData: any = {
  datasets: [
    {
      yAxisID: 'y-left',
      maxBarThickness: 35,
      backgroundColor: ['#6E85B7'],
      borderColor: ['#6E85B7'],
      borderRadius: 3,

      data: [],
      label: '사용량',
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
    },
  ],
};

export { gasYearAllData, optionsGasAllYear };
