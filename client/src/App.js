import { onLoad } from 'actions';
import Cart from 'components/cart';
import Checkout from 'components/checkout';
import Container from 'components/Container';
import Header from 'components/Header';
import Home from 'components/home';
import NotFound from 'components/NotFound';
import Thanks from 'components/Thanks';
import PropTypes from 'prop-types';
import React, { Suspense, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = ({ onLoad }) => {
  useEffect(() => {
    onLoad();
  }, []);

  return (
    <Router>
      <Container>
        <Header />
        <Suspense>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/thanks" component={Thanks} />
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
