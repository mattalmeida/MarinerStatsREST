import * as mocha from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from "../src/app";

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/players/:player_id', () => {

  it('responds with single JSON object', () => {
    return chai.request(app)
    .get('/api/v1/players/test_batter')
    .then(res => {
      expect(res.status).to.equal(200);
      expect(res).to.be.json;
    })
  });

  it('fails with appropriate code', () => {
      return chai.request(app)
      .get('/api/v1/players/test_bat_boy')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
      });
    });

  it('should return Test Batter', () => {
      return chai.request(app).get('/api/v1/players/test_batter')
        .then(res => {
          expect(res.body.hero.name).to.equal('Luke Cage');
        });
  });

  it('should return Test Batter', () => {
      return chai.request(app).get('/api/v1/players/test_batter')
        .then(res => {
          expect(res.body.hero.name).to.equal('Luke Cage');
        });
  });

   it('should return Test Pitcher', () => {
        return chai.request(app).get('/api/v1/players/test_pitcher')
          .then(res => {
            expect(res.body.hero.name).to.equal('Luke Cage');
        });
   });

   it('should return Test Pitcher', () => {
         return chai.request(app).get('/api/v1/players/test_pitcher')
             .then(res => {
               expect(res.body.hero.name).to.equal('Luke Cage');
         });
   });

});

//example
//   it('should include Wolverine', () => {
//     return chai.request(app).get('/api/v1/heroes')
//       .then(res => {
//         let Wolverine = res.body.find(hero => hero.name === 'Wolverine');
//         expect(Wolverine).to.exist;
//         expect(Wolverine).to.have.all.keys([
//           'id',
//           'name',
//           'aliases',
//           'occupation',
//           'gender',
//           'height',
//           'hair',
//           'eyes',
//           'powers'
//         ]);
//       });
//   });
//
// });
