// import axios from 'axios';

// Patrón adaptador (Adapter Pattern) & Principio de Abierto/Cerrado (Open/Closed Principle)
export class HttpClient {
  //   async get(url: string) {
  //     const { data, status } = await axios.get(url);
  //     console.log({ status });
  //     return { data, status };
  //   }

  async get(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    const status = response.status;
    console.log({ status });
    return { data, status };
  }
}
