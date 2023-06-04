import { homeCategoryType } from '../../type/Types';
import electricity from '../../assets/svg/electricityCategory.svg';
import gas from '../../assets/svg/gasCategory.svg';
import carbon from '../../assets/svg/carbon.svg';
import water from '../../assets/svg/water.svg';

const category: homeCategoryType[] = [
  {
    id: 1,
    route: 'electricity',
    src: electricity,
    descriptTop: '우리학교 전기 에너지 확인하기',
    descriptBottom: `인하대학교 건물들의 
    전기 사용량을 확인해보세요!`,
  },

  {
    id: 2,
    route: 'gas',
    src: gas,
    descriptTop: '우리학교 가스 에너지 확인하기',
    descriptBottom: `인하대학교 건물들의 
    가스 사용량을 확인해보세요!`,
  },
  {
    id: 3,
    route: 'water',
    src: water,
    descriptTop: '우리학교 수도 사용량 확인하기',
    descriptBottom: `인하대학교의` + `\n` + `수도 사용량을 확인해보세요!`,
  },
  {
    id: 4,
    route: 'carbon',
    src: carbon,
    descriptTop: '우리학교 탄소 사용량 확인하기',
    descriptBottom: `인하대학교의` + `\n` + `탄소 배출량을 확인해보세요!`,
  },
];

export default category;
