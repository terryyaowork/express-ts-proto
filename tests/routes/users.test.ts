import request from 'supertest';
import app from '../../src/app';

describe('GET /users', () => {
  it('should return Welcome to the Home Page', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('respond with a resource');
  });
});
