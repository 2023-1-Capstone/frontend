import styled from 'styled-components';

const StartInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 99px;

  position: relative;
  width: 276px;
  height: fit-content;

  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
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

const SignUpTitle = styled.div`
  width: fit-content;
  height: fit-content;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 3rem;
  line-height: 36px;

  margin-bottom: 1.5rem;
  color: #ffffff;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside auto layout */

  flex: none;

  flex-grow: 0;
`;

const TopInput = styled.input<{ color: string; border: string }>`
  box-sizing: border-box;
  position: relative;
  width: 25.7rem;
  height: 3.6rem;
  font-family: 'Pretendard';
  background: #ffffff;
  border: ${(props) => props.border} solid ${(props) => props.color};
  border-radius: 0.4rem 0.4rem 0rem 0rem;

  /* Inside auto layout */

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 1rem;
`;

const MiddleInput = styled.input<{ color: string; border: string }>`
  box-sizing: border-box;
  position: relative;
  width: 25.7rem;
  height: 3.6rem;
  font-family: 'Pretendard';
  background: #ffffff;
  border: ${(props) => props.border} solid ${(props) => props.color};

  /* Inside auto layout */

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 1rem;
`;

const BottomInput = styled.input<{ color: string; border: string }>`
  box-sizing: border-box;
  position: relative;
  width: 25.7rem;
  height: 3.6rem;
  font-family: 'Pretendard';
  background: #ffffff;
  border: ${(props) => props.border} solid ${(props) => props.color};
  border-radius: 0rem 0rem 0.4rem 0.4rem;

  /* Inside auto layout */

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 1rem;
`;

const BottomInputError = styled.input<{ color: string; border: string }>`
  box-sizing: border-box;
  position: relative;
  width: 25.7rem;
  height: 3.6rem;
  font-family: 'Pretendard';
  background: #ffffff;
  border: 2px solid red;
  border-radius: 0rem 0rem 0.4rem 0.4rem;

  /* Inside auto layout */

  &:hover {
    outline: none;
  }

  &:focus {
    outline: none;
  }

  flex: none;
  order: 0;
  flex-grow: 0;
  padding: 1rem;
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
  gap: 0px;
  width: fit-content;
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

const LoginButton = styled.button`
  position: relative;
  width: 25.7rem;
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
  color: #99bfcf;
  top: 1rem;
  border: 0px;
  background: #ffffff;
  border-radius: 4px;
`;

export {
  StartInner,
  SymbolMark,
  SignUpTitle,
  Form,
  TopInput,
  MiddleInput,
  BottomInput,
  LoginWrapper,
  LoginBottomTextWrapper,
  LoginButton,
  BottomInputError,
};
