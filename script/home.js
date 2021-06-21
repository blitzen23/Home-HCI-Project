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

    var leftSlideFunction = function(){
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
    }

    var rightSlideFunction = function(){
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
    }

    var rightSlideIcon = function(count){
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

    var leftSlideIcon = function(count){
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

    $('#left-arrow').click(leftSlideFunction)

    $('#right-arrow').click(rightSlideFunction)

    $('#slider-icon-1').click(function(){
        let tempCtr = 1 
        let count = 0
        while(tempCtr != ctr){
            tempCtr = (tempCtr % 5) + 1;
            count++;
        }

        if(count != 0){
            if(count <= 2){
                leftSlideIcon(count)
            } else {
                count = 5 - count
                rightSlideIcon(count)
            }

        }

    })

    $('#slider-icon-2').click(function(){
        let tempCtr = 2
        let count = 0
        while(tempCtr != ctr){
            tempCtr = (tempCtr % 5) + 1;
            count++;
        }

        if(count != 0){
            if(count <= 2){
                leftSlideIcon(count)
            } else {
                count = 5 - count
                rightSlideIcon(count)
            }

        }

    })

    $('#slider-icon-3').click(function(){
        let tempCtr = 3
        let count = 0
        while(tempCtr != ctr){
            tempCtr = (tempCtr % 5) + 1;
            count++;
        }

        if(count != 0){
            if(count <= 2){
                leftSlideIcon(count)
            } else {
                count = 5 - count
                rightSlideIcon(count)
            }

        }

    })

    $('#slider-icon-4').click(function(){
        let tempCtr = 4
        let count = 0
        while(tempCtr != ctr){
            tempCtr = (tempCtr % 5) + 1;
            count++;
        }

        if(count != 0){
            if(count <= 2){
                leftSlideIcon(count)
            } else {
                count = 5 - count
                rightSlideIcon(count)
            }
        }
    })

    $('#slider-icon-5').click(function(){
        let tempCtr = 5
        let count = 0
        while(tempCtr != ctr){
            tempCtr = (tempCtr % 5) + 1;
            count++;
        }

        if(count != 0){
            if(count <= 2){
                leftSlideIcon(count)
            } else {
                count = 5 - count
                rightSlideIcon(count)
            }

        }

    })
})
