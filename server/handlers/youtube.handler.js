const { google } = require('googleapis');
const youtube = google.youtube('v3');
const apiKey = process.env.YOUTUBE_API_KEY;

const options = {
    auth: apiKey,
    part: 'snippet',
    maxResults: 5,
    type: 'video'
}

class YoutubeHandler {
    static getVideosBySearch(q) {
        return new Promise((resolve, reject) => {
            const videosOptions = options;
            videosOptions.q = q;

            youtube.search.list(videosOptions)
                .then(response => {
                    resolve(response.data);
                })
                .catch(reject);
        });
    }

    static async getVideosByPageToken(pageToken) {
        return new Promise((resolve, reject) => {
            const videosOptions = options;
            videosOptions.pageToken = pageToken;

            youtube.search.list(videosOptions)
                .then(response => {
                    resolve(response.data);
                })
                .catch(reject);
        });
    }
}

module.exports = YoutubeHandler;
