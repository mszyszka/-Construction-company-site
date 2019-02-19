$('.hamburger').on('click', function(){
    $('.hamburger').toggleClass('change')
    $('.nav-ul').toggleClass('open')
    $('.top-nav').toggleClass('nav-open')
});

$(document).ready(function() {
    $('.submit').click(function(event) {
        console.log('Clicked button')

        let imie = $('.input-imie').val()
        let email = $('.input-email').val()
        let tytul = $('.input-tytul').val()
        let textareaWiadomosc = $('.textarea-wiadomosc').val()
        let statusEl = $('.status')
        let readyToSend = 0;
        
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