'use strict';


juke.controller('PlaylistCtrl', function ($scope, PlaylistFactory, $state) {
  PlaylistFactory.getPlaylists()
  .then(function(res){
      $scope.playlists = res;
  });

  $scope.playlist = {};

  $scope.logPlaylist = function (data) {
    PlaylistFactory.newPlaylist(data)
    .then(playlist=> {
      // console.log(playlist);
      $scope.playlist= {};
      $state.go('playlist', {Id: playlist._id});  
    });
  }

  console.log('playlist hmmm')

});

juke.controller('EachPlaylistCtrl', function ($scope, PlaylistFactory, thePlaylist) {
  
  $scope.playlist = thePlaylist;

});
