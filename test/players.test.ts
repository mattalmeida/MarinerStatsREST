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
        expect(res.body.player.pitch_stats).to.be.empty;
        expect(res.body.player.full_name).to.equal("Testy McKinsley");
        expect(res.body.player.starting_date).to.equal(Date(?));
        expect(res.body.player.team_list).to.equal(["Seattle Pilots", "Jersey Devils"]);
        expect(res.body.player.bat_hand).to.equal("r");
        expect(res.body.player.pitch_hand).to.be.empty;
        let batStats = res.body.player.bat_stats;
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
        expect(batStats.at_bats).to.equal(1000);
        expect(batStats.hits).to.equal(275);
        expect(batStats.walks).to.equal(100);
        expect(batStats.strike_outs).to.equal(250);
        expect(batStats.runs).to.equal(60);
        expect(batStats.rbi).to.equal(50);
        expect(batStats.home_run).to.equal(25);
        expect(batStats.bat_avg).to.equal(0.275);
        expect(batStats.obp).to.equal(0.376);
        expect(batStats.ops).to.equal(0.857);
        expect(batStats.stolen_bases).to.equal(17);

      });
  });

  it('should return Test Pitcher', () => {
    return chai.request(app).get('/api/v1/players/test_pitcher')
      .then(res => {
        expect(res.body).to.be.json;
        expect(res.body.player.bat_stats).to.be.empty;
        expect(res.body.player.full_name).to.equal("Johnny Spitball");
        expect(res.body.player.starting_date).to.equal(Date(?));
        expect(res.body.player.team_list).to.equal(["New York Mets", "Springfield Isotopes"]);
        expect(res.body.player.bat_hand).to.be.empty;
        expect(res.body.player.pitch_hand).to.equal("l");
        let pitchStats = res.body.player.pitch_stats;
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
      });
  });

  it('should return Test Ohtani', () => {
    return chai.request(app).get('/api/v1/players/test_ohtani')
      .then(res => {
        expect(res.body).to.be.json;
        expect(res.body.player.full_name).to.equal("Mister Bothways");
        expect(res.body.player.starting_date).to.equal(Date(?));
        expect(res.body.player.team_list).to.equal(["Los Angeles Dodgers"]);
        expect(res.body.player.bat_hand).to.equal("l");
        expect(res.body.player.pitch_hand).to.equal("r");
        let pitchStats = res.body.player.pitch_stats;
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
        let batStats = res.body.player.bat_stats;
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
      });
    });
});

describe('GET v1/players/:player_id/stat/:stat', () => {
  it('should return a stat from Test Ohtani', () => {
    return chai.request(app).get('/api/v1/players/test_ohtani/stat/bHits')
      .then(res => {
        expect(res.body).to.be.json;
        expect(res.body.???).to.equal("140"); //TODO figure out json and implement body
    });
  });

  it('should return a stat does not exist failure from a stat request that does not exist', () => {
    return chai.request(app).get('/api/v1/players/test_pitcher/stat/bHits')
      .then(res => {
        expect();
    });
  });

  it('should return a player does not exist failure from a player that does not exist', () => {
    return chai.request(app).get('/api/v1/players/test_bat_boy/stat/bHits')
      .then(res => {
        expect();
    });
  });
});

describe('GET v1/players/all_names', () => {
  it('should return all player names in datastore', () => {
    return chai.request(app).get('/api/v1/players/all_names')
      .then(res => {

    });
  });
});