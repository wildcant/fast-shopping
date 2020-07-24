import styled from 'styled-components';

const Container = styled.section`
  margin: 0 1em;
  @media only screen and (min-width: 600px) {
    margin: 0 2em;
  }
  @media only screen and (min-width: 960px) {
    margin: 0 3em;
  }
  @media only screen and (min-width: 1280px) {
    margin: 0 4em;
  }
`;

export default Container;
