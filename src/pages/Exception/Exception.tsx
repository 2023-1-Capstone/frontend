import { useEffect } from 'react';

const Exception = () => {
  useEffect(() => {
    alert('인증이 만료되었습니다. 다시 회원가입을 시도해주세요');
    window.location.href = 'http://localhost:3000';
  }, []);

  return <>예외처리 페이지입니다.</>;
};

export default Exception;
