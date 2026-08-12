let playlists = JSON.parse(localStorage.getItem("playlists")) || [];

function createPlaylist(name) {
  playlists.push({
    name,
    songs: []
  });

  localStorage.setItem("playlists", JSON.stringify(playlists));
  alert("Playlist criada!");
}

function addSong(playlistIndex, song) {
  playlists[playlistIndex].songs.push(song);
  localStorage.setItem("playlists", JSON.stringify(playlists));
}