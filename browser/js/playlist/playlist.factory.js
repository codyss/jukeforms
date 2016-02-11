'use strict';

juke.factory('PlaylistFactory', function ($http, SongFactory, $stateParams) {

  var PlaylistFactory = {};

  var cachedPlaylists = [];

  PlaylistFactory.newPlaylist = function(data){
    return $http.post('api/playlists', data)
    .then(function(res){
      var playlist = res.data;
      cachedPlaylists.push(playlist)
      return playlist;
    })

  }

  PlaylistFactory.getPlaylists = function () {
    return $http.get('api/playlists')
      .then(res=> {
        angular.copy(res.data, cachedPlaylists);
        return cachedPlaylists;
      });
  }

  PlaylistFactory.fetchById = function (id) {
    return $http.get('api/playlists/'+id)
    .then(res=> {
      console.log(res.data);
      return res.data
    })
  }

  PlaylistFactory.getAllSongs = function () {
    return $http.get('api/songs')
    .then(res=>res.data)
  }


  PlaylistFactory.addSong = function (song) {
    // /:playlistId/songs/:songId
    console.log(song);
    return $http.post('/api/playlists/' + $stateParams.Id + '/songs', {song: song})
    .then(res => res.data)
  }

  return PlaylistFactory;

});
