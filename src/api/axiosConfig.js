import axios from 'axios';

export default axios.create({
    baseURL: 'https://cheerful-stinkbug-careful.ngrok-free.app/',
    headers: {"ngrok-skip-browser-warning":"true" }
});