import axios from 'axios';

const REST_API_USERS_URL = 'http://localhost:8081/api/standings';

class StandingsService {

    getStandings() {
        return axios.get(REST_API_USERS_URL);
    }
}

export default new StandingsService()