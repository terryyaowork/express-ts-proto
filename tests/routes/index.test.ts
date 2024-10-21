import request from 'supertest';
import app from '../../src/app';

describe('GET /', () => {
  it('should return Welcome to the Home Page', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain('Welcome to the Home Page');
  });
});
