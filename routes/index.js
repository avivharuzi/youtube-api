const youtubeRoute = require('./youtube.route');

module.exports = (app) => {
    app.use('/api/youtube', youtubeRoute);
};
