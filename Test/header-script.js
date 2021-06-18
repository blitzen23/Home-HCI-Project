$(()=>{
    var top = $('.header-items').height();
    console.log(top);
    $('nav').css('paddingTop', top);
    
})