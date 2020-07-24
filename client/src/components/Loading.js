import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import styled from 'styled-components';

const ProgressWrapper = styled(LinearProgress)`
  width: '100%';
`;

export default () => (
  <ProgressWrapper>
    <LinearProgress />
  </ProgressWrapper>
);
