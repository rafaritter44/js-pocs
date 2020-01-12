import { TestBed, async } from '@angular/core/testing';

import { StarWarsService } from './star-wars.service';
import { Character } from './character.model';

describe('StarWarsService', () => {
  const luke = new Character('Luke Skywalker', 'light');
  const vader = new Character('Darth Vader', 'dark');

  let service: StarWarsService;
  let httpClientSpy: { get: jasmine.Spy };
  let logServiceSpy: { writeLog: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    logServiceSpy = jasmine.createSpyObj('LogService', ['writeLog']);
    service = new StarWarsService(<any> httpClientSpy, logServiceSpy);
  });

  describe('getCharacters', () => {

    beforeEach(() => {
      service.addCharacter(luke);
      service.addCharacter(vader);
    });

    it('should return all', () => {
      const result = service.getCharacters('all');
      expect(result).toContain(luke);
      expect(result).toContain(vader);
    });

    it('should only return light', () => {
      const result = service.getCharacters('light');
      expect(result).toContain(luke);
      expect(result).not.toContain(vader);
    });

    it('should only return dark', () => {
      const result = service.getCharacters('dark');
      expect(result).not.toContain(luke);
      expect(result).toContain(vader);
    })

  })

});
