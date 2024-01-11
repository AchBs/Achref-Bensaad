document.addEventListener('DOMContentLoaded', function () {
    const videoPlayer = document.getElementById('videoPlayer');


    const videos = [
        'animalvideo/Dog_index_video.mp4',
        'animalvideo/Cat_index_video.mp4'
    ];

    let currentVideoIndex = 0;


    videoPlayer.src = videos[currentVideoIndex];

    videoPlayer.addEventListener('ended', function () {

        currentVideoIndex = (currentVideoIndex + 1) % videos.length;


        videoPlayer.src = videos[currentVideoIndex];

        videoPlayer.load();
        videoPlayer.play();
    });
});