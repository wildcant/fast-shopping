import React from 'react';
import * as rrd from 'react-router-dom';

rrd.BrowserRouter = ({ children }) => <>{children}</>;
module.exports = rrd;
