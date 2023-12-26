/* eslint-disable no-underscore-dangle */
const { Pool } = require('pg');

class MusicsService {
  constructor() {
    this._pool = new Pool();
  }

  async getPlaylist(playlistId) {
    const queryPlaylist = {
      text: `SELECT id, name 
      FROM playlists
      WHERE id = $1`,
      values: [playlistId],
    };

    const resultQueryPlaylist = await this._pool.query(queryPlaylist);
    const mapQueryPlaylist = resultQueryPlaylist.rows[0];

    console.log(mapQueryPlaylist);

    const queryPlaylistSong = {
      text: `SELECT songs.id, songs.title, songs.performer 
      FROM songs
      LEFT JOIN playlist_songs ON playlist_songs.song_id = songs.id
      WHERE playlist_songs.playlist_id = $1`,
      values: [playlistId],
    };

    const resultQueryPlaylistSong = await this._pool.query(queryPlaylistSong);

    return {
      playlist: {
        ...mapQueryPlaylist,
        songs: resultQueryPlaylistSong.rows,
      },
    };
  }
}

module.exports = MusicsService;
