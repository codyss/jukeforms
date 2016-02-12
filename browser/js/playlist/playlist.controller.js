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

juke.controller('EachPlaylistCtrl', function ($scope, PlaylistFactory, PlayerFactory, thePlaylist, allSongs, SongFactory) {
  
  $scope.playlist = thePlaylist;

  $scope.allSongs = allSongs;

  $scope.postmanPostSong = function (song) {
    PlaylistFactory.addSong(song)
    .then(song=> { 
      console.log(song);
      SongFactory.convert(song);
      $scope.playlist.songs.push(song)
    });
  }

  $scope.remove = function (song) {
    PlaylistFactory.remove(song);
    $scope.playlist.songs.forEach(function (playlistSong, index) {
      if(playlistSong._id === song._id) {
        $scope.playlist.songs.splice(index, 1);
      }
    })
  }

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.playlist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

});
