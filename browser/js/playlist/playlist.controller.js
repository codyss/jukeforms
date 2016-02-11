'use strict';


juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory) {
  PlaylistFactory.getPlaylists()
  .then(function(res){
      $scope.playlists = res;
  });

  $scope.playlist = {};

  $scope.logPlaylist = function (data) {
    PlaylistFactory.newPlaylist(data);
    $scope.playlist= {};
  }

  console.log('playlist hmmm')

});

juke.controller('EachPlaylistCtrl', function ($scope, PlaylistFactory, thePlaylist) {
  
  $scope.playlist = thePlaylist;

});
