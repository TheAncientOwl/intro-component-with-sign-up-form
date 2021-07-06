import styled from 'styled-components';
import Breakpoints from './Breakpoints';
import DesktopBackgroundSrc from './images/bg-intro-desktop.png';
import MobileBackgroundSrc from './images/bg-intro-mobile.png';

import Info from './components/info';
import SignUpForm from './components/form';

const Container = styled.div`
  min-height: 100vh;
  display: flex;

  background-image: ${`url('${DesktopBackgroundSrc}')`};
  background-color: hsl(0, 100%, 74%);

  @media (max-width: ${Breakpoints.mobile}) {
    background-image: ${`url('${MobileBackgroundSrc}')`};
  }
`;

const Grid = styled.div`
  width: 80%;
  margin: auto;

  display: grid;
  grid-template-columns: 50% 50%;

  @media (max-width: ${Breakpoints.mobile}) {
    display: block;
    padding: 3em 1em;
  }
`;

export default function App() {
  return (
    <Container>
      <Grid>
        <Info />
        <SignUpForm />
      </Grid>
    </Container>
  );
}
