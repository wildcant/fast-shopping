import styled from 'styled-components';
import { lg, md, sm } from 'styles/breakpoints';

const Container = styled.section`
  margin: 0 1em;
  @media only screen and (min-width: ${sm}px) {
    margin: 0 2em;
  }
  @media only screen and (min-width: ${md}px) {
    margin: 0 3em;
  }
  @media only screen and (min-width: ${lg}px) {
    margin: 0 4em;
  }
`;

export default Container;
