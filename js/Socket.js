import Stage from './Stage.js';

const socket = io('http://localhost');

socket.on('connect', () => {
	console.log('connected');
});

export default socket;