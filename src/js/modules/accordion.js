export const accordion = () => {
    
    const mql = window.matchMedia('(max-width: 399px)')
    const handleAccrd = () => {
  
        $('._showMore').on('click', function(event){
            $('._showMore').each(function(){
                if (!(this === event.target)){
                    $(this).removeClass('active')
                    $(this).siblings().animate({
                        height: 0,
                        opacity: 0,
                        margin: 0,
                    }, 500, function(){
                        $(this).css('display', 'none')
                    })
                }
            })
            if (!($(this).hasClass('active'))){
                console.log(1)
                $(this).addClass('active')
                $(this).siblings().css('display', 'block').animate({
                    height: '50px',
                    opacity: 1,
                }, 500)
                
            } else if ($(this).hasClass('active')) {
                console.log('2')
                $(this).removeClass('active')
                $(this).siblings().animate({
                    height: 0,
                    opacity: 0,
                    margin: 0,
                }, 500, function(){
                    $(this).css('display', 'none')
                })
            }
        })
    }
    if (mql.matches){
        handleAccrd()
    }

    let isMqlMathces = mql.matches // false
    $(window).on('resize', function(){
        if (isMqlMathces !== mql.matches){ // if false === true => 
            isMqlMathces = mql.matches;
            if (isMqlMathces){
                $('._showMore').each(function(){
                    $(this).siblings().css({'display': 'none', 'height': '0', 'opacity': '0'})
                })
                handleAccrd()
            } else if (!isMqlMathces){
                $('._showMore').each(function(){
                    console.log($(this).siblings())
                    $(this).off('click');
                    $(this).siblings().css({'display': 'block', 'height': 'auto', 'opacity': '1'})
                })
            }
        }
        
    })
   
}