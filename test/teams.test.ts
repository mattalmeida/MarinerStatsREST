import * as mocha from 'mocha';
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from "../src/app";

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/teams/:team_id', () => {

  it('responds with single JSON object', () => {
    return chai.request(app)
    .get('/api/v1/teams/test_team')
    .then(res => {
      expect(res.status).to.equal(200);
      expect(res).to.be.json;
    })
  });

  it('fails with appropriate code', () => {
      return chai.request(app)
      .get('/api/v1/teams/test_milb_team')
      .end(function (err, res) {
        expect(err).to.be.null;
        expect(res).to.have.status(404);
      });
    });

   it('should return Test Team', () => {
        return chai.request(app).get('/api/v1/teams/test_team')
          .then(res => {
            expect(res.body).to.be.json;
            expect(res.body.team.full_name).to.equal("Portland Pwords");
            let pitchStats = res.body.team.pitch_stats;
            expect(pitchStats).to.have.all.keys([
              'innings',
              'hits',
              'walks',
              'strike_outs',
              'earned_runs',
              'home_runs',
              'whip',
              'era',
              'wins',
              'saves',
            ]);
            expect(pitchStats.innings).to.equal(270);
            expect(pitchStats.hits).to.equal(100);
            expect(pitchStats.walks).to.equal(80);
            expect(pitchStats.strike_outs).to.equal(150);
            expect(pitchStats.earned_runs).to.equal(90);
            expect(pitchStats.home_runs).to.equal(50);
            expect(pitchStats.whip).to.equal(0.667);
            expect(pitchStats.era).to.equal(3.000);
            expect(pitchStats.wins).to.equal(11);
            expect(pitchStats.saves).to.equal(1);
            let batStats = res.body.team.bat_stats;
            expect(batStats).to.have.all.keys([
              'at_bats',
              'hits',
              'walks',
              'strike_outs',
              'runs',
              'rbi',
              'home_run',
              'bat_avg',
              'obp',
              'ops',
              'stolen_bases'
            ]);
            expect(batStats.at_bats).to.equal(500);
            expect(batStats.hits).to.equal(140);
            expect(batStats.walks).to.equal(40);
            expect(batStats.strike_outs).to.equal(140);
            expect(batStats.runs).to.equal(43);
            expect(batStats.rbi).to.equal(30);
            expect(batStats.home_run).to.equal(25);
            expect(batStats.bat_avg).to.equal(0.280);
            expect(batStats.obp).to.equal(0.360);
            expect(batStats.ops).to.equal(0.639);
            expect(batStats.stolen_bases).to.equal(5);
            expect(res.body.team.players).to.be.an.instanceof(Array);
            let playersArray = res.body.players;
            expect(playersArray).to.have.lengthOf(3);
            expect(playersArray).to.equal(["test_batter", "test_pitcher", "test_ohtani"])
        });
   });
})
