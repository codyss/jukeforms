'use strict';

juke.factory('PlaylistFactory', function ($http, SongFactory) {

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
    .then(res=> res.data)
  }

  return PlaylistFactory;

});
