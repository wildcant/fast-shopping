import React from 'react';
import * as rrd from 'react-router-dom';

// eslint-disable-next-line react/prop-types
rrd.BrowserRouter = ({ children }) => <>{children}</>;
module.exports = rrd;
