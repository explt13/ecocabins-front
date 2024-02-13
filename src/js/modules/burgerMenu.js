export const burgerMenu = () =>{
    const mql = matchMedia('(max-width: 767px)')
    let isMqlMatches = mql.matches
    const handleBM = () => {
        $('.icon-menu').on('click', function(event){
            $('.menu__body').addClass('mobile')
            $(this).toggleClass('active');
            $('.menu__body').toggleClass('active')
            $('body').toggleClass('lock') // overflow: hidden
            
        });
    }
    $(window).on('resize', function(){
        if (isMqlMatches !== mql.matches){
            isMqlMatches = mql.matches;
            if (mql.matches){
                handleBM()
            } else {
                $('.menu__body').removeClass('mobile');
                $('.icon-menu').off('click');
                $('.menu__body').removeClass('active')
            }
        }
    })
    if (mql.matches){
        handleBM();
    }
}