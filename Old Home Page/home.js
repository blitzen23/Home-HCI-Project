$(() =>{
    let sliderItemCount = $('.slider-item').length
    let perSliderItemWidth = $('.slider-item').width()
    let totalSliderWidth = sliderItemCount * perSliderItemWidth;
    let ctr = 3

    $('.slider-inner').css({
        "width": totalSliderWidth,
        "marginLeft": - 2 * perSliderItemWidth
    })
    $('.slider-icon:nth-child(3)').css({
        "opacity": "75%",
        "color": "white"
    })

    $('#left-arrow').click(function(){
        $('.slider-inner').animate({left: + perSliderItemWidth}, 1000, function(){
            $('.slider-item:last-child').prependTo('.slider-inner')
            $('.slider-inner').css({left: 0})
        })
        if (ctr == 1){
            $('.slider-icon:nth-child(1)').css({
                "opacity": "100%",
                "color": "gray"
            })
        }
        else if (ctr == 2){
            $('.slider-icon:nth-child(2)').css({
                "opacity": "100%",
                "color": "gray"
            })
        }
        else if (ctr == 3){
            $('.slider-icon:nth-child(3)').css({
                "opacity": "100%",
                "color": "gray"
            })
        }
        else if (ctr == 4){
            $('.slider-icon:nth-child(4)').css({
                "opacity": "100%",
                "color": "gray"
            })
        }
        else if (ctr == 5){
            $('.slider-icon:nth-child(5)').css({
                "opacity": "100%",
                "color": "gray"
            })
        }
        ctr -= 1
        if (ctr <= 0){
            ctr = 5
        }
        if (ctr == 1){
            $('.slider-icon:nth-child(1)').css({
                "opacity": "75%",
                "color": "white"
            })
        }
        else if (ctr == 2){
            $('.slider-icon:nth-child(2)').css({
                "opacity": "75%",
                "color": "white"
            })
        }
        else if (ctr == 3){
            $('.slider-icon:nth-child(3)').css({
                "opacity": "75%",
                "color": "white"
            })
        }
        else if (ctr == 4){
            $('.slider-icon:nth-child(4)').css({
                "opacity": "75%",
                "color": "white"
            })
        }
        else if (ctr == 5){
            $('.slider-icon:nth-child(5)').css({
                "opacity": "75%",
                "color": "white"
            })
        }
    })

    $('#right-arrow').click(function(){
        $('.slider-inner').animate({left: - perSliderItemWidth}, 1000, function(){
            $('.slider-item:first-child').appendTo('.slider-inner')
            $('.slider-inner').css({left: 0})
        })
        if (ctr == 1){
            $('.slider-icon:nth-child(1)').css({
                "opacity": "100%",
                "color": "gray"
            })
        }
        else if (ctr == 2){
            $('.slider-icon:nth-child(2)').css({
                "opacity": "100%",
                "color": "gray"
            })
        }
        else if (ctr == 3){
            $('.slider-icon:nth-child(3)').css({
                "opacity": "100%",
                "color": "gray"
            })
        }
        else if (ctr == 4){
            $('.slider-icon:nth-child(4)').css({
                "opacity": "100%",
                "color": "gray"
            })
        }
        else if (ctr == 5){
            $('.slider-icon:nth-child(5)').css({
                "opacity": "100%",
                "color": "gray"
            })
        }
        ctr += 1
        if (ctr > 5){
            ctr = 1
        }
        if (ctr == 1){
            $('.slider-icon:nth-child(1)').css({
                "opacity": "75%",
                "color": "white"
            })
        }
        else if (ctr == 2){
            $('.slider-icon:nth-child(2)').css({
                "opacity": "75%",
                "color": "white"
            })
        }
        else if (ctr == 3){
            $('.slider-icon:nth-child(3)').css({
                "opacity": "75%",
                "color": "white"
            })
        }
        else if (ctr == 4){
            $('.slider-icon:nth-child(4)').css({
                "opacity": "75%",
                "color": "white"
            })
        }
        else if (ctr == 5){
            $('.slider-icon:nth-child(5)').css({
                "opacity": "75%",
                "color": "white"
            })
        }
    })
})
