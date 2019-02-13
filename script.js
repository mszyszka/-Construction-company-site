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
            readyToSend++;
        } else {
            //To prevent sending form every time if something is invalid
            event.preventDefault()
            $(".input-imie").attr("placeholder", "Wpisz imię").val("").focus().blur();
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')) {
            readyToSend++;
        } else {
            event.preventDefault()
            $(".input-email").attr("placeholder", "Wpisz email(np. michal@gmail.com)").val("").focus().blur();
        }

        if(tytul.length >= 2) {
            readyToSend++;
        } else {
            event.preventDefault()
            $(".input-tytul").attr("placeholder", "Wpisz tytul(np. Współpraca)").val("").focus().blur();
        }

        if(textareaWiadomosc.length > 15) {
            readyToSend++;
            if(readyToSend == 4) {
                $('.statusEl').html('Wiadomość gotowa do wysłania')
            }
        } else {
            event.preventDefault()
            $(".textarea-wiadomosc").attr("placeholder", "Wpisz swoją wiadomość").val("").focus().blur();
        }


    })

})