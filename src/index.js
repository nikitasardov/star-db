// fetch('https://swapi.dev/api/people/1/')
//   .then((res) => {
//     return res.json();
//   })
//   .then((body) => {
//     console.log(body);
//   });


class SwapiService {
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
    return res.results;
  }
  
  getPerson(id) {
    return this.getResource(`/people/${id}`);
  }
}

const swapi = new SwapiService();
swapi.getAllPeople()
  .then((people) => {
    people.forEach((p) => console.log(p.name));
  })
  .catch((err) => {
    console.error('Could not fetch', err);
  });