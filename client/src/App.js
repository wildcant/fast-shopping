import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'components/home';
import Container from 'components/Container';
import NotFound from 'components/NotFound';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
