const { google } = require('googleapis');
const youtube = google.youtube('v3');
const apiKey = process.env.YOUTUBE_API_KEY;

class YoutubeHandler {
    static async getVideos(q) {
        const options = {
            auth: apiKey,
            part: 'snippet',
            q: q,
            maxResults: 5,
            type: 'video'
        }

        try {
            const result = await youtube.search.list(options);
            return result.data;
        } catch (e) {
            return e;
        }
    }
}

module.exports = YoutubeHandler;
