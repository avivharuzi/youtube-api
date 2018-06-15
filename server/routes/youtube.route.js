const express = require('express');
const router = express.Router();

const RouteHandler = require('./../handlers/route.handler');
const YoutubeHandler = require('./../handlers/youtube.handler');

router.get('/search/:q', async (req, res) => {
    try {
        const videos = await YoutubeHandler.getVideos(req.params.q);
        res.send(videos);
    } catch (e) {
        RouteHandler.error(res, 409, '', e);
    }
});

module.exports = router;
