import { onLoad } from 'actions';
import Container from 'components/Container';
import Header from 'components/Header';
import Home from 'components/home';
import NotFound from 'components/NotFound';
import PropTypes from 'prop-types';
import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = ({ onLoad }) => {
  useEffect(() => {
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Container>
        <Header />
        <Suspense>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
};
App.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default connect(null, { onLoad })(App);
