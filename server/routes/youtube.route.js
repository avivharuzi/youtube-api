const express = require('express');
const router = express.Router();

const RouteHandler = require('./../handlers/route.handler');
const YoutubeHandler = require('./../handlers/youtube.handler');

router.get('/videos/popular', async (req, res) => {
    try {
        const videos = await YoutubeHandler.getPopularVideos();
        res.send(videos);
    } catch (e) {
        RouteHandler.error(res, 409, 'There was problem to find popular videos');
    }
});

router.get('/videos/search/:q', async (req, res) => {
    try {
        const videos = await YoutubeHandler.getVideosBySearch(req.params.q);
        res.send(videos);
    } catch (e) {
        RouteHandler.error(res, 409, 'There was problem to find videos');
    }
});

router.get('/videos/details/:id', async (req, res) => {
    try {
        const video = await YoutubeHandler.getVideoDetailsById(req.params.id);
        res.send(video);
    } catch (e) {
        RouteHandler.error(res, 409, 'There was problem to find this video');
    }
});

router.get('/videos/page/:pageToken', async (req, res) => {
    try {
        const videos = await YoutubeHandler.getVideosByPageToken(req.params.pageToken);
        res.send(videos);
    } catch (e) {
        RouteHandler.error(res, 409, 'There page token is invalid no videos was found');
    }
});

module.exports = router;
