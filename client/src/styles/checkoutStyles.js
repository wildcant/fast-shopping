import styled from 'styled-components';
import { sm, md } from './breakpoints';
import {
  Button,
  TableContainer,
  Paper,
  Typography,
  TableCell,
} from '@material-ui/core';

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
  padding: 0 1em;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 1em;
`;
export const Left = styled.div`
  @media only screen and (min-width: ${md}px) {
    width: 15%;
  }
`;
export const Right = styled.div`
  width: 100%;
  @media only screen and (min-width: ${md}px) {
    width: 85%;
    padding: 0 1em;
  }
`;
export const Btn = styled(Button)`
  float: right;
`;

export const TableWraper = styled(Paper)`
  width: 100%;
`;
export const TableContainerFixed = styled(TableContainer)`
  max-height: 80vh;
  @media only screen and (min-width: ${sm}px) {
    max-height: 300px;
  }
`;
export const RightAlignDiv = styled.div`
  float: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 1em 0;
`;
export const DataWrapper = styled.div`
  & h4 {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`;
export const LinkStyle = styled(Typography)`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  margin-top: 1rem;
`;

export const ColumnHeader = styled(TableCell)`
  @media only screen and (min-width: ${sm}px) {
    white-space: nowrap;
  }
`;
export const ErrorMessage = styled(Typography)`
  display: flex;
`;
