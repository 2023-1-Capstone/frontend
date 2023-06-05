import styled from 'styled-components';

const SummaryFrame = styled.div`
  position: relative;
  width: 33rem;
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  /* or 164% */

  border: 2px solid #fff;
  background-color: #eee;
  border-radius: 1rem;
  padding: 1rem;
  letter-spacing: 0.02rem;
  position: relative;

  /* Black/600 */
  gap: 0.8rem;
  color: #757575;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Li = styled.li`
  padding-left: 2.1rem;
  text-indent: -2.1rem;
`;

export { SummaryFrame, Li };
