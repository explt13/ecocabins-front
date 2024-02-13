export const videos = () => {
    $('.video-container').on('click', function(){
        if ($(this).find('video').prop('paused')){
            $(this).find('video').get(0).play();
            $(this).addClass('active');
        } else {
            $(this).find('video').get(0).pause();
            $(this).removeClass('active');
        }
    })
    // $('.about__video').trigger($('video').prop('paused') ? 'play' : 'pause')
}