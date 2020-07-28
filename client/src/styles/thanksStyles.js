import styled from 'styled-components';
import { sm, md } from './breakpoints';

export const ThanksSection = styled.section`
  text-align: center;
  padding: 1em;
  @media only screen and (min-width: ${md}px) {
    padding: 4em 6em;
  }
`;
export const AddMargin = styled.div`
  & * {
    margin: 0.5em 0;
  }
`;
export const ThanksIcon = styled.img`
  width: 80px;
  @media only screen and (min-width: ${sm}px) {
    width: 10vw;
  }
`;

export const Name = styled.span`
  text-transform: capitalize;
`;
