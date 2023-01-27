import { createServer } from 'http';
import { gatewayApp } from './gateway';

createServer(gatewayApp).listen(4000, () => {
  console.log('Gateway listening http://localhost:4000/graphql');
});
