import styled from 'styled-components';
import { md } from './breakpoints';
import { Button, TableContainer, Paper } from '@material-ui/core';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  @media only screen and (min-width: ${md}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CustomerSection = styled.div`
  @media only screen and (min-width: ${md}px) {
    width: 38%;
  }
`;
export const OrderSection = styled.div`
  @media only screen and (min-width: ${md}px) {
    width: 60%;
  }
`;

export const RatioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  @media only screen and (min-width: ${md}px) {
    flex-direction: row;
  }
`;

export const AuthWrapper = styled.div`
  border: 1px solid;
  padding: '1em 3em';
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
`;
export const Left = styled.div`
  @media only screen and (min-width: ${md}px) {
    width: 20%;
    text-align: right;
  }
`;
export const Right = styled.div`
  width: 100%;
  @media only screen and (min-width: ${md}px) {
    width: 80%;
    padding: 0 2em;
  }
`;
export const Btn = styled(Button)`
  float: right;
`;

export const TableWraper = styled(Paper)`
  width: 100%;
`;
export const TableContainerFixed = styled(TableContainer)`
  max-height: 300px;
`;
export const RightAlignDiv = styled.div`
  float: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1em 0;
`;
