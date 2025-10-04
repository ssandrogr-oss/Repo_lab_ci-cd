const request = require('supertest');
const { app, server } = require('./app');
describe('GET /', () => {
 afterAll((done) => {
 server.close(done); // Cierra el servidor después de las pruebas
 });
 it('debería responder con el texto correcto', async () => {
 const response = await request(app).get('/');
 expect(response.statusCode).toBe(200);
 expect(response.text).toContain('¡Hola, Mundo con Docker y GitHub Actions!');
 });
});
