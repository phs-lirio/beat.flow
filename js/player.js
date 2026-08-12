const Player = {
  audio: new Audio(),
  currentIndex: 0,
  playlist: [],

  load(list) {
    this.playlist = list;
    this.currentIndex = 0;
  },

  play(index = this.currentIndex) {
    this.currentIndex = index;

    const song = this.playlist[index];

    if (!song) return;

    this.audio.src = song.url;
    this.audio.play();

    UI.updateNowPlaying(song);
  },

  pause() {
    this.audio.pause();
  },

  next() {
    if (this.currentIndex < this.playlist.length - 1) {
      this.play(this.currentIndex + 1);
    }
  },

  prev() {
    if (this.currentIndex > 0) {
      this.play(this.currentIndex - 1);
    }
  }
};