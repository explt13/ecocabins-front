export const wrapItems = () => {
    const mql820 = window.matchMedia('(max-width: 820px) and (min-width: 601px)')
    const mql600 = window.matchMedia('(max-width: 600px)')
    function wrap(){
        if (mql820.matches){
            if ($('.feature__column_ftr').children().length === 0 && ($('.feature__column_comp').children().length > 0)){
                $('.feature__column_comp .feature__item:nth-child(1n + 4)').appendTo('.feature__column_ftr')
            } else if ($('.feature > .container').find('.feature__column_comp').length === 0){
                $('.feature__row').append('<div class=\"feature__column feature__column_comp\">')
                $('.feature__item:nth-child(1n + 4)').appendTo('.feature__column_comp')
            } 
        } else if (mql600.matches) {
            if ($('.feature > .container').find('.feature__column_comp').length === 0){
                $('.feature__row').append('<div class=\"feature__column feature__column_comp\">')
            } 
            $('.feature__column_ftr .feature__item:nth-child(1n + 1)').appendTo('.feature__column_comp') 


        } else {
            $('.feature__column_comp .feature__item').appendTo('.feature__column_ftr')
            $('.feature__column_comp').remove()
        }
    }
    $(window).on('resize', wrap)
    wrap()
}