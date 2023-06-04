import { homeCategoryType } from '../../type/Types';
import electricity from '../../assets/svg/electricityCategory.svg';
import gas from '../../assets/svg/gasCategory.svg';
import indicator from '../../assets/svg/indicatorCategory.svg';
import water from '../../assets/svg/water.svg';
import carbon from '../../assets/svg/carbon.svg';

const category: homeCategoryType[] = [
  {
    id: 1,
    route: 'electricity',
    src: electricity,
    descriptSummary: '전기',
    descriptTop: '우리학교 전기 에너지 확인하기',
    descriptBottom: `인하대학교 건물들의 
    전기 사용량을 확인해보세요!`,
  },

  {
    id: 2,
    route: 'gas',
    src: gas,
    descriptSummary: '가스',
    descriptTop: '우리학교 가스 에너지 확인하기',
    descriptBottom: `인하대학교 건물들의 
    가스 사용량을 확인해보세요!`,
  },
  {
    id: 4,
    route: 'water',
    src: water,
    descriptSummary: '수도',
    descriptTop: '우리학교 수도 사용량 확인하기',
    descriptBottom: `인하대학교의` + `\n` + `수도 사용량을 확인해보세요!`,
  },
  /*{
    id: 3,
    route: 'indicator',
    src: indicator,
    descriptSummary: '지표',
    descriptTop: '다양한 형식의 지표',
    descriptBottom:
      `학교 건물들의 에너지 사용량을` + `\n` + `다양한 방식으로 확인해보세요!`,
  },*/
  {
    id: 5,
    route: 'indicator/carbon/buildings', // 추후 수정
    src: carbon, // 탄소로 변경할 것
    descriptSummary: '탄소',
    descriptTop: '우리학교 탄소 사용량 확인하기',
    descriptBottom: '인하대학교의' + '\n' + '탄소 사용량을 확인해보세요!'
  }
];

export default category;
