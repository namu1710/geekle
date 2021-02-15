$(document).ready(function() {

$('.mob-menu').click(function() {
    $(this).toggleClass('mob-menu-active')
    $('.header-menu').slideToggle()
})

$('.main-content-mob-list').click(function(){
    $('#mob-list-items').slideToggle()
})

$('#mob-list-items').children().click(function(){
    var text = $(this).text()
    $('#mob-list-p').text(text)
})

})