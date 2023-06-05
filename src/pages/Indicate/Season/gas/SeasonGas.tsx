import { useEffect } from 'react';
import { useState } from 'react';
import { WrapperInner } from '../../../../components/Wrapper/Wrapper.style';
import { Chart as ChartJS, Tooltip, Legend } from 'chart.js/auto';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  optionsGas,
  seasonInitData,
  seasonInitDataDoughnut,
  season,
  optionsDoughnut,
} from '../../../../store/store';
import downArrow from '../../../../assets/svg/downArrow.svg';
import * as S from './SeasonGas.style';
import { Dropdown } from '../../../../components/Dropdown/Dropdown';
import { dropdownInfoCreater } from '../../../BuildingElectricity/util';
import { useQuery } from '@tanstack/react-query';
import { getAverageFee, findMostWasteIdx } from '../util';
import api from '../../../../api/api';
import TransItem from '../../Component/TrasnItem/TransItem';
import informationSVG from '../../../../assets/svg/information.svg';
import { BuildingGasPlugin } from '../../../../store/chartPlugin';
import { SummaryFrame, Li } from '../../../../components/Summary/Summary.style';

ChartJS.register(Tooltip, Legend);

const seasonInfo = [
  { season: '봄', month: '3,4,5월' },
  { season: '여름', month: '6,7,8월' },
  { season: '가을', month: '9,10,11월' },
  { season: '겨울', month: '12,1,2월' },
];

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
  const [chartDataDoughnut, setChartDataDoughtnut] = useState(
    seasonInitDataDoughnut
  );
  const [yearList, setYearList] = useState([]);
  const [isDropdownOn, setIsDropdownOn] = useState<Boolean>(false);
  const [curYear, setCurYear] = useState<string>('2023');
  const [infoData, setInfoData] = useState({ watt: 0, fee: 0 });
  const [infoModalState, setInfoModalState] = useState<string>('hidden');

  const getPercent = (usageArr: number[], targetUsage: number) => {
    let numOfNotNullSeason = 0;
    const averageWatt = Math.floor(
      usageArr.reduce((acc: number, cur: number) => {
        if (cur !== 0) numOfNotNullSeason++;
        return acc + cur;
      }, 0) / numOfNotNullSeason
    );

    return ((targetUsage / averageWatt) * 100 - 100).toFixed(2);
  };

  useEffect(() => {
    const chartRes = chartDatas?.data.result;
    const feeRes = feeData?.data.result;
    if (chartRes && feeRes) {
      const validData = chartRes.filter(
        (item: any) => !item.usages.every((val: number) => val === 0)
      );
      // 차트 정보 세팅
      const chartDataCopy = JSON.parse(JSON.stringify(chartData));
      const chartDataDoughnutCopy = JSON.parse(
        JSON.stringify(chartDataDoughnut)
      );
      const usageList = validData[validData.length - 1].usages;
      chartDataCopy.datasets[0].data = usageList.filter(
        (val: number) => val !== 0
      );
      chartDataDoughnut.datasets[0].data = usageList.filter(
        (val: number) => val !== 0
      );
      setChartData(chartDataCopy);

      //유효하지 않은 계절 제거
      const validSeason = usageList
        .filter((item: any) => item !== 0)
        .map((item: any, idx: number) => seasonInfo[idx].season);
      chartDataCopy.labels = validSeason;

      // 가장 사용을 많이 한 계절 인덱스 탐색
      const targetSeasonIdx = findMostWasteIdx(validData);

      // 가장 최근 년도
      const latestYear = validData[validData.length - 1].startYear;

      // 요금 정보 세팅
      const target = feeRes.filter((item: any) => item.year === latestYear)[0]
        ?.feeResponses;
      const averageFee = getAverageFee(target, targetSeasonIdx);

      // 연도 리스트 세팅
      const curYearList = validData
        ?.map((item: any) => item.startYear)
        .reverse();

      setYearList(curYearList);
      // 가장 사용량이 많은 계절 인덱스 세팅
      setMostWasteSeasonIdx(targetSeasonIdx);

      // 가장최근 년도 세팅
      setCurYear(latestYear);

      // 가장 많은 사용량, kwh당 요금 정보 세팅
      setInfoData((infoData) => ({
        ...infoData,
        watt: validData[validData.length - 1].usages[targetSeasonIdx],
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
      chartDataCopy.datasets[0].data = target.filter(
        (val: number) => val !== 0
      );

      const targetSeasonIdx = target?.reduce(
        (iMax: number, x: number, idx: number, arr: number[]) =>
          x > arr[iMax] ? idx : iMax,
        0
      );

      const validSeason = target
        .filter((item: any) => item !== 0)
        .map((item: any, idx: number) => seasonInfo[idx].season);
      chartDataCopy.labels = validSeason;

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
    <WrapperInner>
      <S.SeasonWrapper>
        <S.SeasonTitle>계절별 가스 사용량</S.SeasonTitle>
        {isDropdownOn && (
          <Dropdown
            dropDownInfo={dropdownInfoCreater(
              '10rem',
              '11.9rem',
              '12.8rem',
              'middle',
              yearList,
              setCurYear,
              setIsDropdownOn
            )}
          ></Dropdown>
        )}
        <S.BuildingInfoFrame modalState={infoModalState}>
          <S.BuildingInfoNotice>
            ※ 아래는 각 계절에 포함된 월에 대한 정보에요
          </S.BuildingInfoNotice>
          <S.BuildingInfoItem>
            <S.SeasonInfoDescriptionFrame>
              {seasonInfo.map((item: any, idx: number) => {
                return (
                  <S.SeasonInfoDescriptionItem key={idx}>
                    <S.BuildingInfoItemTitle>
                      {item.season}
                    </S.BuildingInfoItemTitle>
                    <S.BuildingInfoItemContent>
                      {item.month}
                    </S.BuildingInfoItemContent>
                  </S.SeasonInfoDescriptionItem>
                );
              })}
            </S.SeasonInfoDescriptionFrame>
          </S.BuildingInfoItem>
        </S.BuildingInfoFrame>
        <S.Calculate>
          계절정보
          <S.InfoImage
            width="20px"
            height="20px"
            src={informationSVG}
            onMouseEnter={() => {
              setInfoModalState('visible');
            }}
            onMouseLeave={() => {
              setInfoModalState('hidden');
            }}
          ></S.InfoImage>
        </S.Calculate>
        <S.Container>
          <S.ChartTopFrame>
            <S.ChartCategoryBox>계절별 사용량</S.ChartCategoryBox>
            <S.ChartYearBox onClick={() => setIsDropdownOn(true)}>
              {curYear} &nbsp;<img src={downArrow}></img>
            </S.ChartYearBox>
          </S.ChartTopFrame>
          <Bar
            width="350"
            height="250"
            data={chartData}
            options={optionsGas}
          ></Bar>
        </S.Container>
        <S.BottomWrapper>
          <S.BuildingMoreInfoTitle>요약 정보</S.BuildingMoreInfoTitle>
          <S.ChartIndicatorLine></S.ChartIndicatorLine>
          <Doughnut
            options={optionsDoughnut}
            data={chartDataDoughnut}
            plugins={[BuildingGasPlugin]}
          ></Doughnut>
          <SummaryFrame>
            <Li>
              해당년도 사용 1위는 '{season[mostWasteSeasonIdx]}'이며 계절 평균
              대비 &nbsp;
              {getPercent(chartData?.datasets[0].data, infoData?.watt)}%가
              높습니다.
            </Li>
            <Li>
              총 사용량은 {infoData.watt.toLocaleString('ko-KR')}m3 입니다.
            </Li>
            <Li>
              예상 사용 요금은 &nbsp;
              {Math.floor(infoData.fee).toLocaleString('ko-KR')}원 입니다.
            </Li>
          </SummaryFrame>
          <TransItem
            type={'resource'}
            waste={infoData.fee}
            curYear={curYear}
          ></TransItem>
        </S.BottomWrapper>
      </S.SeasonWrapper>
    </WrapperInner>
  );
};

export default SeasonGas;
