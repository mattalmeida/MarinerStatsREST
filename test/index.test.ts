import * as mocha from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from "../src/app";

chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {

  it('should be html', () => {
    return chai.request(app)
    .get('/')
    .then(res => {
      expect(res.status).to.equal(200);
      expect(res).to.be.html;
    })
  });
});
