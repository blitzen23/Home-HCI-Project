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

     function rightSlideFunction(count){
        $('.slider-inner').animate({left: - perSliderItemWidth * count}, 1000, function(){
            for(let i = 0; i < count; i++){
                $('.slider-item:first-child').appendTo('.slider-inner')
            }
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
        
        ctr += count

        if (ctr > 5){
            ctr = ctr % 5
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

    }

    function leftSlideFunction(count){
        $('.slider-inner').animate({left: + perSliderItemWidth * count}, 1000, function(){
            for(let i = 0; i < count; i++){
                $('.slider-item:last-child').prependTo('.slider-inner')
            }
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
        ctr -= count
        if (ctr <= 0){
            ctr = 5 + ctr
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

    }

    function iconSlideDirection(count){
        if(ctr < count){
            rightSlideFunction(count - ctr)
        } else if(ctr > count){
            leftSlideFunction(ctr - count)
        }
    }

    $('#left-arrow').click(()=>{
        leftSlideFunction(1)
    })

    $('#right-arrow').click(()=>{
        rightSlideFunction(1)
    })


    $('#slider-icon-1').click(function(){
        iconSlideDirection(1)
    })

    $('#slider-icon-2').click(function(){
        iconSlideDirection(2)
    })

    $('#slider-icon-3').click(function(){
        iconSlideDirection(3)
    })

    $('#slider-icon-4').click(function(){
        iconSlideDirection(4)
    })

    $('#slider-icon-5').click(function(){
        iconSlideDirection(5)
    })
})
