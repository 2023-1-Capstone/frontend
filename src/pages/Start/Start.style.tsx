import styled from 'styled-components';

const StartInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 99px;

  position: absolute;
  width: 276px;
  height: 627px;
  left: 57px;
  top: 99px;
`;

const SymbolMark = styled.img`
  width: 245px;
  height: 255px;
  background: url(${(props) => props.color});
  border-radius: 122.5px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const StartTitle = styled.div`
  width: 178px;
  height: 38px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  flex: none;

  flex-grow: 0;
`;

const StartDescription = styled.div`
  width: 276px;
  height: 14px;
  position: relative;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  flex: none;

  flex-grow: 0;
`;

const StartNext = styled.div`
  width: 60px;
  height: 23px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  cursor: pointer;
  flex: none;

  flex-grow: 0;
`;

const LoginInput = styled.input`
  width: 19.3rem;
  height: 3.1rem;
  font-family: 'Pretendard';
  background: #ffffff;
  border-radius: 0.4rem;
  border: 0px;
  /* Inside auto layout */
  text-align: left;
  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  &:placeholder {
    color: blue;
    font-size: 2.5em;
  }
  padding: 1rem;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const LoginBottomText = styled.span`
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 250;
  font-size: 1.2rem;

  color: #ffffff;

  /* Inside auto layout */
  cursor: pointer;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const LoginBottomTextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 19.3rem;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 19.3rem;
  gap: 1.1rem;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 1.1rem;
  position: relative;
  width: 19.3rem;
  height: fit-content;
`;

const LoginButton = styled.div`
  position: relative;
  width: 19.3rem;
  height: 4.4rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* identical to box height */
  cursor: pointer;
  color: #0065b3;
  top: 1rem;
  background: #ffffff;
  border-radius: 4px;
`;

export {
  StartInner,
  SymbolMark,
  StartTitle,
  StartDescription,
  StartNext,
  Form,
  LoginInput,
  LoginBottomText,
  LoginWrapper,
  LoginBottomTextWrapper,
  LoginButton,
};
