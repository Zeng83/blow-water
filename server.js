'use strict';

const Hapi = require('hapi');

// create new server instance
const server = new Hapi.Server()

// add server’s connection information
server.connection({host: 'localhost', port: 3000});

server.register(require('inert'), (err) => {

  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/bundle.js',
    handler: function (request, reply) {
      reply.file('./public/bundle.js');
    }
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.file('./public/index.html');
    }
  });
});

server.start((err) => {

  if(err) {
      throw err;
  }
  console.log("server running at: " + server.info.uri);
})