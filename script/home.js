$(() =>{
    let sliderItemCount = $('.slider-item').length
    let perSliderItemWidth = $('.slider-item').width()
    let totalSliderWidth = sliderItemCount * perSliderItemWidth;
    let ctr = 2

    $('.slider-inner').css({
        "width": totalSliderWidth,
        "marginLeft": - perSliderItemWidth
    })
    $('.slider-icon-container > div:nth-child(2)').css({
        "opacity": "75%"
    })

    $('#left-arrow').click(function(){
        $('.slider-inner').animate({left: + perSliderItemWidth}, 1000, function(){
            $('.slider-item:last-child').prependTo('.slider-inner')
            $('.slider-inner').css({left: 0})
        })
        if (ctr == 1){
            $('.slider-icon-container > div:nth-child(1)').css({
                "opacity": "100%"
            })
        }
        else if (ctr == 2){
            $('.slider-icon-container > div:nth-child(2)').css({
                "opacity": "100%"
            })
        }
        else if (ctr == 3){
            $('.slider-icon-container > div:nth-child(3)').css({
                "opacity": "100%"
            })
        }
        ctr -= 1
        if (ctr <= 0){
            ctr = 3
        }
        if (ctr == 1){
            $('.slider-icon-container > div:nth-child(1)').css({
                "opacity": "75%"
            })
        }
        else if (ctr == 2){
            $('.slider-icon-container > div:nth-child(2)').css({
                "opacity": "75%"
            })
        }
        else if (ctr == 3){
            $('.slider-icon-container > div:nth-child(3)').css({
                "opacity": "75%"
            })
        }
    })

    $('#right-arrow').click(function(){
        $('.slider-inner').animate({left: - perSliderItemWidth}, 1000, function(){
            $('.slider-item:first-child').appendTo('.slider-inner')
            $('.slider-inner').css({left: 0})
        })
        if (ctr == 1){
            $('.slider-icon-container > div:nth-child(1)').css({
                "opacity": "100%"
            })
        }
        else if (ctr == 2){
            $('.slider-icon-container > div:nth-child(2)').css({
                "opacity": "100%"
            })
        }
        else if (ctr == 3){
            $('.slider-icon-container > div:nth-child(3)').css({
                "opacity": "100%"
            })
        }
        ctr += 1
        if (ctr > 3){
            ctr = 1
        }
        if (ctr == 1){
            $('.slider-icon-container > div:nth-child(1)').css({
                "opacity": "75%"
            })
        }
        else if (ctr == 2){
            $('.slider-icon-container > div:nth-child(2)').css({
                "opacity": "75%"
            })
        }
        else if (ctr == 3){
            $('.slider-icon-container > div:nth-child(3)').css({
                "opacity": "75%"
            })
        }
    })
})
