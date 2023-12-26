/* eslint-disable no-underscore-dangle */
class Listener {
  constructor(musicsService, mailSender) {
    this._musicsService = musicsService;
    this._mailSender = mailSender;

    this.listen = this.listen.bind(this);
  }

  async listen(message) {
    try {
      const { playlistId, targetEmail } = JSON.parse(message.content.toString());
      console.log(JSON.parse(message.content.toString()));

      const musicsapi = await this._musicsService.getPlaylist(playlistId);
      await this._mailSender.sendEmail(targetEmail, JSON.stringify(musicsapi));
    //   console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Listener;
