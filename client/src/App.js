import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Home from 'components/home';
import Container from 'components/Container';

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
