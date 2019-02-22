//operating on nav
$('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('change')
    $('.nav-ul').toggleClass('open')
    $('.top-nav').toggleClass('nav-open')
});
//form validation
$(document).ready(function() {
    $('.submit').click(function(event) {
        console.log('Clicked button')

        let imie = $('.input-imie').val()
        let email = $('.input-email').val()
        let tytul = $('.input-tytul').val()
        let textareaWiadomosc = $('.textarea-wiadomosc').val()
        let statusEl = $('.status')
        
        statusEl.empty()

        if(imie.length > 2) {
        } else {
            //To prevent sending form every time if something is invalid
            event.preventDefault()
            $(".input-imie").attr("placeholder", "Wpisz imię").val("").focus().blur();
            $(".input-imie").addClass('placeholder-color');
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
        } else {
            event.preventDefault()
            $(".input-email").attr("placeholder", "Wpisz email(np. michal@gmail.com)").val("").focus().blur().css('color', 'red');
            $(".input-email").addClass('placeholder-color');
        }

        if(tytul.length >= 2) {
        } else {
            event.preventDefault()
            $(".input-tytul").attr("placeholder", "Wpisz tytul(np. Współpraca)").val("").focus().blur();
            $(".input-tytul").addClass('placeholder-color');
        }

        if(textareaWiadomosc.length > 15) {
            
        } else {
            event.preventDefault()
            $(".textarea-wiadomosc").attr("placeholder", "Wpisz swoją wiadomość").val("").focus().blur();
            $(".textarea-wiadomosc").addClass('placeholder-color');
        }
    })
})
//scrollTo
$(".a-o-nas").click(function(){
    $.scrollTo($('.o-nas'), 500);
});

$(".a-co-zrobimy").click(function(){
    $.scrollTo($('.co-mozemy'), 500);
});
$(".a-realizacje").click(function(){
    $.scrollTo($('.zaufali-nam'), 500);
});
$(".a-kontakt").click(function(){
    $.scrollTo($('.kontakt'), 500);
});
$(".logo").click(function(){
    $.scrollTo(0, 500);
});