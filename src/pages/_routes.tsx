import React from 'react';
import { Route } from 'react-router-dom';

import Index from './index';

const AppRoutes = () => (
  <>
    <Route path="/" exact component={Index} />
    <Route path="/orders" render={() => (<p>Orders</p>)} />
    <Route path="/products" render={() => (<p>Products</p>)} />
    <Route path="/customers" render={() => (<p>Customers</p>)} />
  </>
);

export default AppRoutes;