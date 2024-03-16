import axios from 'axios';

export default axios.create({
    baseURL: 'https://9b25-2603-6080-7c04-3c9e-80a3-a986-af57-a5fa.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning":"true" }
});