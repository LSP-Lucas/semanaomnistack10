import socketio from 'socket.io-client';

const socket = socketio('http://10.14.101.126:3334', {
    autoConnect: false,
});

function subscribeToNewDavs(subscribeFunction){
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    };
    
    socket.connect();
}

function disconnect() {
    if (socket.connect){
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDavs
};