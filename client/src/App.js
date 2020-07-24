import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'components/home';
import Container from 'components/Container';
import NotFound from 'components/NotFound';
import { connect } from 'react-redux';
import { onLoad } from 'actions';
import CircularProgress from '@material-ui/core/CircularProgress';

function App({ onLoad }) {
  useEffect(() => {
    onLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <Container>
        <Header />
        <Suspense fallback={<CircularProgress />}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            {/* <Route path="/test" component={LoadingApp} /> */}
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
}

export default connect(null, { onLoad })(App);
