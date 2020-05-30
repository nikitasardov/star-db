export default class SwapiService {
    _apiBase = 'https://swapi.dev/api';
  
    async getResource(uri) {
      uri = this._apiBase + uri;
      const res = await fetch(uri);
      if (!res.ok)
        throw new Error(`Could not fetch ${uri}, received ${res.status}`);
  
      return await res.json();
    }
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results.map(this._transformPerson);
    }
    
    async getPerson(id) {
      const person =  this.getResource(`/people/${id}`);
      return this._transformPerson(person);
    }
    
    async getAllPlanets() {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
    
    async getPlanet(id) {
      const planet = await this.getResource(`/planets/${id}`);
      return this._transformPlanet(planet);
    }
    
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results.map(this._transformStarship);
    }
    
    async getStarship(id) {
      const starship = this.getResource(`/starships/${id}`);
      return this._transformStarship(starship);
    }

    _extractId(url) {
      const idRegExp = /\/([0-9]*)\/$/;
      return url.match(idRegExp)[1];
    }

    _transformPlanet(planet) {
      return {
        id: this._extractId(planet.url),
        url: planet.url,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      }
    }

    _transformStarship(starship) {
      return {
        id: this._extractId(starship.url),
        name: starship.name,
        model: starship.model,
        manufacturer: starship.manufacturer,
        costInCredits: starship.costInCredits,
        length: starship.length,
        crew: starship.crew,
        passengers: starship.passengers,
        cargo: starship.cargo
      }
    }

    _transformPerson(person) {
      return {
        id: this._extractId(person.url),
        name: person.name,
        gender: person.gender,
        birthDate: person.birthDate,
        eyeColor: person.eyeColor
      }
    }
  }

// fetch('https://swapi.dev/api/people/1/')
//   .then((res) => {
//     return res.json();
//   })
//   .then((body) => {
//     console.log(body);
//   });

