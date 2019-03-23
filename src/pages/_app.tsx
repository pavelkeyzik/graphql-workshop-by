import React from 'react';
import { History } from 'history';
import { Container } from 'react-bootstrap';
import { Router } from 'react-router-dom';

import AppRoutes from './_routes'; 
import Menu from '../components/Menu';

interface Props {
  history: History;
}

const App= (props: Props) => {
  return (
    <Container>
      <Router history={props.history}>
        <Menu />
        <AppRoutes />
      </Router>
    </Container>
  );
};

export default App;
