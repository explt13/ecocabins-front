import $ from 'jquery'
window.$ = $;
import { ibg } from './modules/ibg.js';
import { isWebp } from './modules/isWebp.js';
import { contactPopup } from './modules/contactPopup.js';
import { burgerMenu } from './modules/burgerMenu.js';
import { slickSlider } from './modules/slickSlider.js'
import { wrapItems } from './modules/wrapItems.js';
import { accordion } from './modules/accordion.js';

$(document).ready(function(){
    ibg();
    isWebp();
    contactPopup();
    burgerMenu();
    slickSlider();
    wrapItems();
    accordion();
})