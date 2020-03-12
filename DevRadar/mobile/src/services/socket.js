const socketio = require("socket.io-client");

const api = process.env.API_URL || "http://backend-devradar.herokuapp.com/";

const socket = socketio(api, {
  autoConnect: false
});

function subscribeToNewDevs(subscribeFunction) {
  socket.on("newDev", subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  };
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewDevs };
