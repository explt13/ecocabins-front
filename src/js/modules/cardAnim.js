export const contactcardsAnim = (hasDefault) => {
    $('.cards__item').on('mouseenter', function(){
        $(this).addClass('cards__item_m')
    })
    
    $('.cards__item').on('mouseleave', function(){
        $(this).removeClass('cards__item_m')
    })

    // if by default card modified
    if(hasDefault){
        $($(this).parent()).siblings().each(function(){
            if($(this).find('.cards__item_m')){
                $(this).find('.cards__item_m').removeClass('cards__item_m')
            }
        })

        $('.cards').on('mouseleave', function(){
            $($(this).find('.cards__column')[1]).find('.cards__item').addClass('.cards__item_m')
        })
    }
    
}

// structure
// cards
//   cards__column
//     cards__item