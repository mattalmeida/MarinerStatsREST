import { helloTest } from '../src/service/player_service';
import { expect } from 'chai';
import 'mocha';

describe('get player',
  () => {
    it('should return an optional player response for an existing player'), () => {
      let result = PlayerService.find()
      expect(result).to???
    }

    it('should return empty for a non-existent player', () => {
      let result = PlayerService.find()
      expect(result).to???
    }

    it('should return an exception for an improperly formatted player id'), () => {
      let result = PlayerService.find()
      expect(result).to???
    }
});

describe('get player stat',
  () => {
    it('should return a statistic for a player'), () => {
      let result = PlayerService.findStat()
      expect(result).to???
    }

    it('should return an exception for a statistic for a player that does not have that stat'), () => {
      let result = PlayerService.findStat()
      expect(result).to???
    }

    it('should return an exception for a statistic for a player that does not exist'), () => {
      let result = PlayerService.findStat()
      expect(result).to???
    }
});

describe('get all player names',
  () => {
    it('should return all player names when queried'), () => {
      let result = PlayerService.findNames()
      expect(result).to???
    }
});
