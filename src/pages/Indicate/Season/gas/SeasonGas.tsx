import { useEffect } from 'react';
import { useState } from 'react';
import {
  Wrapper,
  WrapperInner,
} from '../../../../components/Wrapper/Wrapper.style';
import Header from '../../../../components/Header/Header';
import NavigationBar from '../../../../components/NavigationBar/NavigationBar';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { optionsGas, seasonInitData, season } from '../../../../store/store';
import downArrow from '../../../../assets/svg/downArrow.svg';
import * as S from './SeasonGas.style';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { dropdownInfoCreater } from '../../../BuildingElectricity/util';
import { useQuery } from '@tanstack/react-query';
import { getAverageFee, findMostWasteIdx } from '../util';
import api from '../../../../api/api';
import TransItem from '../../Component/TransItem';
import refreshSVG from '../../../../assets/svg/refresh.svg';
import { getUniqueNumberList } from '../util';

ChartJS.register(Tooltip, Legend);

const SeasonGas = () => {
  const { data: chartDatas }: { data: any } = useQuery(
    ['getSeasonElectricity'],
    () => api('/api/gas/season')
  );
  const { data: feeData }: { data: any } = useQuery(
    ['getElectricityFee'],
    () => api('/api/gas/fee'),
    {
      enabled: !!chartDatas,
    }
  );

  const [mostWasteSeasonIdx, setMostWasteSeasonIdx] = useState<number>(0);
  const [chartData, setChartData] = useState(seasonInitData);
  const [isDropdownOn, setIsDropdownOn] = useState<Boolean>(false);
  const [curYear, setCurYear] = useState<string>('2023');
  const [infoData, setInfoData] = useState({ watt: 0, fee: 0 });
  const [randomIdxList, setRandomIdxList] = useState<number[]>(
    getUniqueNumberList(4, 6)
  );

  const getPercent = (usageArr: number[], targetUsage: number) => {
    let numOfNotNullSeason = 0;
    const averageWatt = Math.floor(
      usageArr.reduce((acc: number, cur: number) => {
        if (cur !== 0) numOfNotNullSeason++;
        return acc + cur;
      }, 0) / numOfNotNullSeason
    );
    return ((targetUsage / averageWatt) * 10).toFixed(2);
  };

  useEffect(() => {
    const chartRes = chartDatas?.data.result;
    const feeRes = feeData?.data.result;
    if (chartRes && feeRes) {
      // 차트 정보 세팅
      const chartDataCopy = JSON.parse(JSON.stringify(chartData));
      chartDataCopy.datasets[0].data = chartRes[chartRes.length - 1].usages;
      setChartData(chartDataCopy);

      // 가장 사용을 많이 한 계절 인덱스 탐색
      const targetSeasonIdx = findMostWasteIdx(chartRes);

      // 요금 정보 세팅
      const target = feeRes.filter((item: any) => item.year === curYear)[0]
        ?.feeResponses;
      const averageFee = getAverageFee(target, targetSeasonIdx);

      // 가장 사용량이 많은 계절 인덱스 세팅
      setMostWasteSeasonIdx(targetSeasonIdx);

      // 가장 많은 사용량, kwh당 요금 정보 세팅
      setInfoData((infoData) => ({
        ...infoData,
        watt: chartRes[chartRes.length - 1].usages[targetSeasonIdx],
        fee: averageFee,
      }));
    }
  }, [feeData]);

  useEffect(() => {
    const target = chartDatas?.data.result.filter(
      (item: any) => item.startYear === parseInt(curYear)
    )[0].usages;
    if (target) {
      const chartDataCopy = JSON.parse(JSON.stringify(chartData));
      chartDataCopy.datasets[0].data = target;

      const targetSeasonIdx = target?.reduce(
        (iMax: number, x: number, idx: number, arr: number[]) =>
          x > arr[iMax] ? idx : iMax,
        0
      );
      const targetFeeData = feeData?.data.result.filter(
        (val: any) => val.year === parseInt(curYear)
      )[0]?.feeResponses;
      const averageFee = getAverageFee(targetFeeData, targetSeasonIdx);

      setMostWasteSeasonIdx(targetSeasonIdx);
      setChartData(chartDataCopy);
      setInfoData((infoData) => ({
        ...infoData,
        watt: target[targetSeasonIdx],
        fee: averageFee,
      }));
    }
  }, [curYear]);

  return (
    <>
      <Wrapper>
        <Header></Header>
        <WrapperInner>
          <S.SeasonWrapper>
            <S.SeasonTitle>👑계절별 가스 사용량 순위</S.SeasonTitle>
            <S.ChartChangeFrame>
              {isDropdownOn && (
                <Dropdown
                  dropDownInfo={dropdownInfoCreater(
                    '10rem',
                    '26.2rem',
                    '2.3rem',
                    'middle',
                    chartDatas?.data.result.map((val: any) => val.startYear),
                    setCurYear,
                    setIsDropdownOn
                  )}
                ></Dropdown>
              )}
              <S.ChartTopFrame>
                <S.ChartCategoryBox>계절별 사용량</S.ChartCategoryBox>
                <S.ChartYearBox onClick={() => setIsDropdownOn(true)}>
                  {curYear}년 &nbsp;<img src={downArrow}></img>
                </S.ChartYearBox>
              </S.ChartTopFrame>
              <S.ChartIndicatorLine></S.ChartIndicatorLine>
            </S.ChartChangeFrame>
            <Line
              width="350"
              height="200"
              data={chartData}
              options={optionsGas}
            ></Line>
            <S.BottomWrapper>
              <S.BottomTitle>
                해당년도 사용 1위는 '{season[mostWasteSeasonIdx]}' 입니다.
              </S.BottomTitle>
              <S.BottomInfoBox>
                <S.BottomInfoBoxInner>
                  <li>
                    총 사용 가스량은 &nbsp;
                    {infoData.watt.toLocaleString('ko-KR')}
                    m3 입니다.
                  </li>
                  <li>
                    예상 사용 요금은 &nbsp;
                    {Math.floor(infoData.fee).toLocaleString('ko-KR')}원 입니다.
                  </li>
                  <li>
                    계절 평균 대비 &nbsp;
                    {getPercent(chartData?.datasets[0].data, infoData?.watt)}%가
                    높습니다.
                  </li>
                </S.BottomInfoBoxInner>
              </S.BottomInfoBox>
              <S.BottomTitle>
                이 가스 사용량으로...
                <S.RefreshButton
                  src={refreshSVG}
                  onClick={() => setRandomIdxList(getUniqueNumberList(4, 6))}
                ></S.RefreshButton>
              </S.BottomTitle>
              <TransItem
                type={'resource'}
                waste={infoData.fee}
                randomIdxList={randomIdxList}
              ></TransItem>
            </S.BottomWrapper>
          </S.SeasonWrapper>
        </WrapperInner>
        <NavigationBar navigationStatus="indicator"></NavigationBar>
      </Wrapper>
    </>
  );
};

export default SeasonGas;
