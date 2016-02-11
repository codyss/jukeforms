'use strict';

juke.config(function ($stateProvider) {

  // $stateProvider.state('playlists', {
  //   url: '/playlists',
  //   templateUrl: '/js/album/templates/albums.html',
  //   controller: 'PlaylistCtrl'
  //   // resolve: {
  //   //   allAlbums: function (AlbumFactory) {
  //   //     return AlbumFactory.fetchAll();
  //   //   }
  //   // }
  // });

  // $stateProvider.state('playlist', {
  //   url: '/playlists/:playlistId',
  //   templateUrl: '/js/playlist/templates/playlist.html',
  //   controller: 'PlaylistCtrl'
  //   // resolve: {
  //   //   theAlbum: function (PlaylistFactory, $stateParams) {
  //   //     return PlaylistFactory.fetchById($stateParams.albumId);
  //   //   }
  //   // }
  // });


    $stateProvider.state('newplaylist', {
    url: '/playlists/new',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl'
  });

  $stateProvider.state('playlist', {
    url: '/playlists/:Id',
    templateUrl: '/js/playlist/templates/playlist1.html',
    controller: 'EachPlaylistCtrl',
    resolve: {
      thePlaylist: function (PlaylistFactory, $stateParams) {
        return PlaylistFactory.fetchById($stateParams.Id);
      },
      allSongs: function(PlaylistFactory) {
        return PlaylistFactory.getAllSongs();
      }
    }
  });


});
