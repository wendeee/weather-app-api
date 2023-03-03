const request = require('supertest')
const app = require('../src/app')
const api = request(app);
require('dotenv').config();

describe('Get a city', () => {
    let city = 'California'
    it('should get the weather details of the passed in city',  async () => {
        await api
          .get(`/api/v1/city/${city}`)
          .set("Accept", "text/xml")
          .expect("Content-Type", /text\/xml/)
          .expect(200);
        })
})