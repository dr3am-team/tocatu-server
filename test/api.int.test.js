import { expect } from 'chai';
import supertest from 'supertest';
import generador from './generador/user.js';

import Server from '../server.js';

//This test suit needs to have the server off
describe('Test API REST ful: Test Interno', () => {
  describe('GET', () => {
    it('Debería retornar un status 200', async () => {
      const server = new Server();
      const app = await server.start();

      const request = supertest(app);
      const response = await request.get('/api/bars');

      expect(response.status).to.eql(200);

      await server.stop();
    });
  });

  describe('POST', () => {
    it('Debería agregar un usuario', async () => {
      const server = new Server();
      const app = await server.start();

      const request = supertest(app);

      const user = generador.get();
      console.log(user);

      const response = await request.post('/api/users').send(user);
      expect(response.status).to.eql(200);

      const userResponse = response.body;
      expect(userResponse).to.include.keys('username', 'password', 'mail');

      expect(userResponse.username).to.eql(user.username);
      expect(userResponse.password).to.eql(user.password);
      expect(userResponse.mail).to.eql(user.mail);

      await server.stop();
    });
  });
});
