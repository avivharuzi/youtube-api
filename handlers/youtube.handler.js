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
    static getPopularVideos() {
        return new Promise((resolve, reject) => {
            const videosOptions = Object.assign({
                chart: 'mostPopular',
            }, options, {
                maxResults: 50
            });

            youtube.videos.list(videosOptions)
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }

    static getVideosBySearch(q) {
        return new Promise((resolve, reject) => {
            const videosOptions = Object.assign({
                q
            }, options);

            youtube.search.list(videosOptions)
                .then(response => {
                    resolve(response.data);
                })
                .catch(reject);
        });
    }

    static getVideoDetailsById(id) {
        return new Promise((resolve, reject) => {
            const videosOptions = Object.assign({
                id
            }, options, {
                part: 'snippet,contentDetails,statistics',
                maxResults: 1
            });

            youtube.videos.list(videosOptions)
            .then(response => {
                resolve(response.data);
            })
            .catch(reject);
        });
    }

    static getVideosByPageToken(q, pageToken) {
        return new Promise((resolve, reject) => {
            const videosOptions = Object.assign({
                q,
                pageToken
            }, options);

            youtube.search.list(videosOptions)
                .then(response => {
                    resolve(response.data);
                })
                .catch(reject);
        });
    }
}

module.exports = YoutubeHandler;
