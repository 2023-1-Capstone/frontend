function calculateMovingAverage(data: number[], windowSize: number): number[] {
  const movingAverages: number[] = [];
  const n: number = data.length;

  for (let i = 0; i < n - windowSize + 1; i++) {
    const window: number[] = data.slice(i, i + windowSize);
    const sum: number = window.reduce((acc, val) => acc + val, 0);
    const average: number = sum / windowSize;
    movingAverages.push(average);
  }

  return movingAverages;
}

function determineTrend(movingAverages: number[]): string {
  const n: number = movingAverages.length;

  if (n < 2) {
    return 'Cannot determine trend with less than 2 data points';
  }

  const diff: number = movingAverages[n - 1] - movingAverages[n - 2];

  if (diff > 0) {
    return '상향세';
  } else if (diff < 0) {
    return '하향세';
  } else {
    return '변동 없음';
  }
}

export { determineTrend, calculateMovingAverage };
