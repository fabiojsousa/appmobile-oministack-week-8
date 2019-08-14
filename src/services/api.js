import axios from 'axios';

/**
 * Se der problema ao usar a api no Android, basta executar o comando: adb reverse tcp:3333 tcp:3333
 */

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

export default api;