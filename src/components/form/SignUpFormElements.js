import styled from 'styled-components';
import Breakpoints from '../../Breakpoints';
import Colors from '../../Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.2em;

  @media (max-width: ${Breakpoints.mobile}) {
    padding: 0;
    margin-top: 2.5em;
  }
`;

export const Spacer = styled.div`
  height: 1em;
`;

const CARD_WIDTH = 'calc(100% - 2.4em)';

export const Card = styled.div`
  margin-top: 1.2em;
  width: ${CARD_WIDTH};
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  padding: 1.5em;
  background: white;
  border-radius: 0.5em;

  box-shadow: 0 0.4em 0em hsl(249, 10%, 26%, 0.3);
`;

export const Input = styled.input`
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;

  width: 100%;

  font-family: cursive;
  font-weight: bold;
  border: 0.2em solid ${Colors.grayBlue};
  padding: 0.9em 2em;
  border-radius: 0.5em;
  outline: none;

  &::placeholder {
    color: ${Colors.grayBlue};
    opacity: 0.7;
  }
`;

export const ClaimButton = styled.div`
  cursor: pointer;
  color: white;
  background: ${Colors.green};
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  padding: 1em;
  border-radius: 0.5em;
  border: 0.1em solid hsla(154, 59%, 41%, 0.9);
  box-shadow: 0 0.3em 0em hsla(154, 59%, 41%, 0.9);
  transition: 65ms linear;

  &:hover {
    transform: scale(1.05);
    transition: 65ms linear;
  }
`;

export const FreeTrial = styled.div`
  color: white;
  background: ${Colors.blue};
  padding: 1.2em;
  width: ${CARD_WIDTH};
  text-align: center;
  border-radius: 0.5em;
  box-shadow: 0 0.4em 0em hsl(249, 10%, 26%, 0.3);
`;

export const TermsAndServices = styled.div`
  color: ${Colors.grayBlue};
  text-align: center;
  margin-top: 0.2em;
  font-size: 0.7em;
`;

export const Link = styled.a`
  text-decoration: none;
  color: ${Colors.red};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
