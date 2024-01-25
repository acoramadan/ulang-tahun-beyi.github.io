AOS.init()
lightbox.option({
    'alwaysShowNavOnTouchDevices' : true,
    'wrapAround' : true
})
var musik = ''
var audio = document.querySelector('.audio')
if(musik){
    audio.src = musik
}
function mulai(){
    audio.play()
    window.scrollTo(0, 0);
    var mail_section = $('#mail-section');
    $('mail').attr('src','assets/img/mail1.gif')
    setTimeout(function(){
        mail_section.css('opacity',0)
        $('body').removeClass('overflow-hidden')
    },2000)
    setTimeout(function(){
        mail_section.removeClass('d-flex')
        mail_section.addClass('d-none')
    },4000)
}