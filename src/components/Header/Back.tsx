import styled from 'styled-components';
import back from '../../assets/svg/back.svg';
import { useNavigate } from 'react-router-dom';

const HeaderBackArrow = styled.img`
  background: url(${(props) => props.src});
  position: absolute;
  /* Inside auto layout */
  left: 2rem;
  top: 2rem;
  flex: none;
  order: 0;
  flex-grow: 0;
  cursor: pointer;
`;

const Back = () => {
  const navigate = useNavigate();
  const moveBack = () => {
    navigate(-1);
  };
  return <HeaderBackArrow src={back} onClick={moveBack}></HeaderBackArrow>;
};

export default Back;
