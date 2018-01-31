var SpotifyWebApi = require('spotify-web-api-node');

// Remember to paste here your credentials
var clientId = '6413006c502e44f8a7e43387588b503c',
    clientSecret = '35fb9238538244efbdbf7b9fd2b31266';

var spotifyApi = new SpotifyWebApi({
  clientId : clientId,
  clientSecret : clientSecret
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then(function(data) {
    spotifyApi.setAccessToken(data.body['access_token']);
  }, function(err) {
    console.log('Something went wrong when retrieving an access token', err);
});