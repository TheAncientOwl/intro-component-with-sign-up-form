import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';

export const Container = styled.div`
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.2em;

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 0;
    display: block;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 2.5em;
  max-width: 15ch;

  @media (max-width: ${Breakpoints.mobile}) {
    text-align: center;
    margin: 0 auto;
    font-size: 1.5em;
  }
`;

export const Paragraph = styled.div`
  max-width: 50ch;
  margin-top: 1.5em;

  @media (max-width: ${Breakpoints.mobile}) {
    text-align: center;
    margin: 1em auto 0 auto;
    max-width: 40ch;
  }
`;
