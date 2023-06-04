import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
  width: 39rem;
  height: 84.4rem;
  background-color: ${(props) => (props.color ? props.color : '#99bfcf')};
  border: #eeeeee 1px solid; // 임시용
  
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const WrapperInner = styled.div`
  position: relative;
  left: 0rem;
  top: 10rem;
  width: 39rem;
  background-color: #99bfcf;
  
  height: 63.3rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 0 2rem 3rem 2rem;
`;

export { Wrapper, WrapperInner };
