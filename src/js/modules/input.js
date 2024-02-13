export const input = () => {
    
    $('input').on('focus', function(){
        $(this).attr('placeholder', '')
    })
    $('input').on('blur', function(){
        $(this).attr('placeholder', $(this).data('placeholder'))
    })
}
