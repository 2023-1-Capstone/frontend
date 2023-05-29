const carbonAllPlugin = {
  id: 'centerText',
  afterDraw(chart: any, args: any, options: any) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;

    let total = 0;

    chart.data.datasets.forEach((dataset: any, idx: number) => {
      total = dataset.data?.reduce((acc: number, cur: number) => acc + cur, 0);
    });

    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0]?.x;
    const yCoor = chart.getDatasetMeta(0).data[0]?.y;
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseLine = 'middle';
    ctx.font = 'bold 15px Pretendard';
    ctx.fillStyle = '#92C111';
    ctx.fillText('총 탄소 배출량', xCoor, yCoor - 10);
    ctx.font = 'bold 20px Pretendard';
    ctx.borderColor = '#757575';
    ctx.fillStyle = '#757575';
    ctx.fillText(total.toLocaleString('ko-KR') + 'kg', xCoor, yCoor + 20);
  },
};

const BuildingElectricityPlugin = {
  id: 'centerText',
  afterDraw(chart: any, args: any, options: any) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;

    let total = 0;

    chart.data.datasets.forEach((dataset: any, idx: number) => {
      total = dataset.data?.reduce((acc: number, cur: number) => acc + cur, 0);
    });

    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0]?.x;
    const yCoor = chart.getDatasetMeta(0).data[0]?.y;
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseLine = 'middle';
    ctx.font = 'bold 17px Pretendard';
    ctx.fillStyle = '#FFB84C';
    ctx.fillText('총 전기 사용량', xCoor, yCoor - 10);
    ctx.font = 'bold 20px Pretendard';
    ctx.borderColor = '#757575';
    ctx.fillStyle = '#757575';
    ctx.fillText(
      (total * 1000).toLocaleString('ko-KR') + 'kwh',
      xCoor,
      yCoor + 20
    );
  },
};

const BuildingGasPlugin = {
  id: 'centerText',
  afterDraw(chart: any, args: any, options: any) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;

    let total = 0;

    chart.data.datasets.forEach((dataset: any, idx: number) => {
      total = dataset.data?.reduce((acc: number, cur: number) => acc + cur, 0);
    });

    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0]?.x;
    const yCoor = chart.getDatasetMeta(0).data[0]?.y;
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseLine = 'middle';
    ctx.font = 'bold 17px Pretendard';
    ctx.fillStyle = '#FFB84C';
    ctx.fillText('총 가스 사용량', xCoor, yCoor - 10);
    ctx.font = 'bold 20px Pretendard';
    ctx.borderColor = '#757575';
    ctx.fillStyle = '#757575';
    ctx.fillText(
      (total * 1000).toLocaleString('ko-KR') + 'm3',
      xCoor,
      yCoor + 20
    );
  },
};

const plugin = {
  id: 'emptyDoughnut',
  afterDraw(chart: any, args: any, options: any) {
    const {
      ctx,
      chartArea: { top, bottom, left, right, width, height },
    } = chart;
    let total = 0;
    chart.data.datasets.forEach((dataset: any, idx: number) => {
      total = dataset.data?.reduce((acc: number, cur: number) => acc + cur, 0);
      chart.getDatasetMeta(idx).data.forEach((datapoint: any, index: any) => {
        const { x, y } = datapoint.tooltipPosition();

        const halfwidth = width / 2;
        const halfheight = height / 2;

        const xLine = x >= halfwidth ? x + 20 : x - 20;
        const yLine = y >= halfwidth ? y + 30 : y - 30;
        const extraLine = x >= halfwidth ? 15 : -15;

        ctx.beginPath();
        ctx.moveTo(x, y);
        if (chart.data.labels[index] === '로스쿨관') {
          ctx.lineTo(xLine, yLine - 10);
          ctx.lineTo(xLine + extraLine, yLine - 10);
        } else {
          ctx.lineTo(xLine, yLine);
          ctx.lineTo(xLine + extraLine, yLine);
        }

        ctx.strokeStyle = dataset.borderColor[index];
        ctx.stroke();

        //text
        ctx.font = 'bold 13px Arial';
        //position
        const textXPosition = x >= halfwidth ? 'left' : 'right';
        const plusFivePx = x >= halfwidth ? 5 : -5;
        ctx.textAlign = textXPosition;

        ctx.textBaseLine = 'middle';
        ctx.fillStyle = dataset.borderColor[index];

        if (chart.data.labels[index] === '로스쿨관')
          ctx.fillText(chart.data.labels[index], xLine + extraLine, yLine - 10);
        else ctx.fillText(chart.data.labels[index], xLine + extraLine, yLine);
      });
    });
    ctx.save();
    const xCoor = chart.getDatasetMeta(0).data[0]?.x;
    const yCoor = chart.getDatasetMeta(0).data[0]?.y;
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseLine = 'middle';
    ctx.font = 'bold 15px Pretendard';
    ctx.fillStyle = '#92C111';
    ctx.fillText('총 탄소 배출량', xCoor, yCoor - 10);
    ctx.font = 'bold 20px Pretendard';
    ctx.borderColor = '#757575';
    ctx.fillStyle = '#757575';
    ctx.fillText(total.toLocaleString('ko-KR'), xCoor - 10, yCoor + 20);
    ctx.fillText('kg', xCoor + 47, yCoor + 20);
  },
};

export {
  carbonAllPlugin,
  plugin,
  BuildingElectricityPlugin,
  BuildingGasPlugin,
};
