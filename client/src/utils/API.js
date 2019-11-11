import axios from 'axios';

export default {
    getMyDude: function(id) {
        return axios.get('/api/characters/' + id)
    }
}