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
          expect(res.body).to.be.json;
          expect(res.body.pitch_stats).to.be.empty;
          let batStats = res.body.bat_stats;
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
          expect(batStats.at_bats).to.equal();
          expect(batStats.hits).to.equal();
          expect(batStats.walks).to.equal();
          expect(batStats.strike_outs).to.equal();
          expect(batStats.runs).to.equal();
          expect(batStats.rbi).to.equal();
          expect(batStats.home_run).to.equal();
          expect(batStats.bat_avg).to.equal();
          expect(batStats.obp).to.equal();
          expect(batStats.ops).to.equal();
          expect(batStats.stolen_bases).to.equal();
        });
  });

  it('should return Test Pitcher', () => {
      return chai.request(app).get('/api/v1/players/test_pitcher')
        .then(res => {
          expect(res.body).to.be.json;
          expect(res.body.bat_stats).to.be.empty;
          let pitchStats = res.body.pitch_stats;
          expect(pitchStats).to.have.all.keys([
            'innings',
            'hits',
            'walks',
            'strike_outs',
            'earned_runs',
            'home_runs',
            'whip'
            'era',
            'wins',
            'saves',
            ]);
          expect(pitchStats.innings).to.equal();
          expect(pitchStats.hits).to.equal();
          expect(pitchStats.walks).to.equal();
          expect(pitchStats.strike_outs).to.equal();
          expect(pitchStats.earned_runs).to.equal();
          expect(pitchStats.home_runs).to.equal();
          expect(pitchStats.whip).to.equal();
          expect(pitchStats.era).to.equal();
          expect(pitchStats.wins).to.equal();
          expect(pitchStats.saves).to.equal();
        });
  });

   it('should return Test Ohtani', () => {
        return chai.request(app).get('/api/v1/players/test_ohtani')
          .then(res => {
            expect(res.body).to.be.json;
            let pitchStats = res.body.pitch_stats;
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
            expect(pitchStats.innings).to.equal();
            expect(pitchStats.hits).to.equal();
            expect(pitchStats.walks).to.equal();
            expect(pitchStats.strike_outs).to.equal();
            expect(pitchStats.earned_runs).to.equal();
            expect(pitchStats.home_runs).to.equal();
            expect(pitchStats.whip).to.equal();
            expect(pitchStats.era).to.equal();
            expect(pitchStats.wins).to.equal();
            expect(pitchStats.saves).to.equal();
            let batStats = res.body.bat_stats;
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
            expect(batStats.at_bats).to.equal();
            expect(batStats.hits).to.equal();
            expect(batStats.walks).to.equal();
            expect(batStats.strike_outs).to.equal();
            expect(batStats.runs).to.equal();
            expect(batStats.rbi).to.equal();
            expect(batStats.home_run).to.equal();
            expect(batStats.bat_avg).to.equal();
            expect(batStats.obp).to.equal();
            expect(batStats.ops).to.equal();
            expect(batStats.stolen_bases).to.equal();
        });
   });


