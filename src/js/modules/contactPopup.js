import { input } from './input.js';
export const contactPopup = () => {
    const mql = window.matchMedia('(max-width: 767px)') // burger menu adaptive max-width
    $('.menu__contact').on('click', function(){
        if ($('.page').find('.contactPopup').length === 0){
            $('.page').append('<div class="contactPopup">')
            if (!$('body').hasClass('lock')){
                $('body').addClass('lock')
            }
            $('.contactPopup').append(`
            <div class="contactPopup__body">
                <form action="#" class="contactPopup__form">
                    <input class="contactPopup__name contactPopup__field" data-placeholder="Your name" placeholder="Your name" type="text"></input>
                    <input class="contactPopup__tel contactPopup__field" data-placeholder="+1 (123) 456-7890" placeholder="+1 (123) 456-7890" minlength="9" maxlength="14" type="tel"></input>
                    <button class="contactPopup__sumbit">Contact</button>
                </form>
            <div class="contactPopup__contactUs">or contact us<br/><a href="tel:+1 (123) 456-7890"><b>+1 (123) 456-7890</b></div>
            `)
            input()
            
            $('.contactPopup').on('click', function(){
                if (!mql.matches && $('body').hasClass('lock')){
                    $('body').removeClass('lock')
                }
                $('.page').find('.contactPopup').remove()
            })
            $('.contactPopup__body').on('click', function(event){
                event.stopPropagation()
            })
        }
    })
}