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
  background-color: 
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const WrapperInner = styled.div`
  position: relative;
  left: 0rem;
  top: 8rem;
  width: 39rem;
  background-color: #99bfcf;
  padding-bottom: 1rem;
  height: 63.3rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  padding: 0 2rem;
  padding-bottom: 5rem;
`;

export { Wrapper, WrapperInner };
