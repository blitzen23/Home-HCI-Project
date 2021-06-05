$(() =>{
    let slideCount = $('.image').length
    let slideWidth = $('.image').width()
    let totalWidth = slideCount * slideWidth
    let ctr = 2

    $('.slides').css({
        "width": totalWidth,
        "marginLeft": - slideWidth
    })
    $('.slider-dot > div:nth-child(2)').css({
        "opacity": "75%"
    })

    $('#left-arrow').click(function(){
        $('.slides').animate({left: + slideWidth}, 1000, function(){
            $('.image:last-child').prependTo('.slides')
            $('.slides').css({left: 0})
        })
        if (ctr == 1){
            $('.slider-dot > div:nth-child(1)').css({
                "opacity": "100%"
            })
        }
        else if (ctr == 2){
            $('.slider-dot > div:nth-child(2)').css({
                "opacity": "100%"
            })
        }
        else if (ctr == 3){
            $('.slider-dot > div:nth-child(3)').css({
                "opacity": "100%"
            })
        }
        ctr -= 1
        if (ctr <= 0){
            ctr = 3
        }
        if (ctr == 1){
            $('.slider-dot > div:nth-child(1)').css({
                "opacity": "75%"
            })
        }
        else if (ctr == 2){
            $('.slider-dot > div:nth-child(2)').css({
                "opacity": "75%"
            })
        }
        else if (ctr == 3){
            $('.slider-dot > div:nth-child(3)').css({
                "opacity": "75%"
            })
        }
    })

    $('#right-arrow').click(function(){
        $('.slides').animate({left: - slideWidth}, 1000, function(){
            $('.image:first-child').appendTo('.slides')
            $('.slides').css({left: 0})
        })
        if (ctr == 1){
            $('.slider-dot > div:nth-child(1)').css({
                "opacity": "100%"
            })
        }
        else if (ctr == 2){
            $('.slider-dot > div:nth-child(2)').css({
                "opacity": "100%"
            })
        }
        else if (ctr == 3){
            $('.slider-dot > div:nth-child(3)').css({
                "opacity": "100%"
            })
        }
        ctr += 1
        if (ctr > 3){
            ctr = 1
        }
        if (ctr == 1){
            $('.slider-dot > div:nth-child(1)').css({
                "opacity": "75%"
            })
        }
        else if (ctr == 2){
            $('.slider-dot > div:nth-child(2)').css({
                "opacity": "75%"
            })
        }
        else if (ctr == 3){
            $('.slider-dot > div:nth-child(3)').css({
                "opacity": "75%"
            })
        }
    })
})

// var ctr = 1
// var icon = document.getElementsByClassName("slider-dot")
// icon[ctr].style.opacity = "75%"

// function leftClick(){
//     icon[ctr].style.opacity = "100%"
//     ctr -= 1
//     if (ctr < 0){
//         ctr = 2
//     }
//     icon[ctr].style.opacity = "75%"
// }

// function rightClick(){
//     icon[ctr].style.opacity = "100%"
//     ctr += 1
//     if (ctr > 2){
//         ctr = 0
//     }
//     icon[ctr].style.opacity = "75%"
// }