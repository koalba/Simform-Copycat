$(document).ready(function(){

    $(window).scroll(function(){
        if($(window).width() > 1120){
            let pixel = $(window).scrollTop()
        if(pixel > 1){
            $('.header').addClass('down')
        } else {
            $('.header').removeClass('down')
        }
        }
    })

    $('.nav__burger').click(() => {
        $('.nav').toggleClass('active')
        if($('.nav').hasClass('active') == true){
            $('body').css('overflow-y', 'hidden')
        } else{
            $('body').css('overflowY', 'auto')
        }
    })

    if($(window).width() <= 1120){
        $('.nav__li--sec').click(function(){
            var position = $('.nav__li--sec').index($(this))
            if($('.nav__li--sec').eq(position).hasClass('active') == false){
                $('.nav__li--sec').removeClass('active')
            }
            $('.nav__li--sec').eq(position).toggleClass('active')
        })
    }

    $('.code__bar').click(function(){
        let numcode = $('.code__bar').index($(this))
        let moveq
        if($(window).width() > 850){
            moveq = 3
        } else if($(window).width() <= 850 && $(window).width() > 750){
            moveq = 10
        }        
        else {
            moveq = 10
        }
        $('.code__bar').removeClass('active').eq(numcode).addClass('active')
        $('.code__ul').css('transform', `translate(-${numcode*(100/moveq)}%)`)
    })

    let position = 0

    if($(window).width() > 750){
        $('.why__person').click(function(){
            let numwhy = $('.why__person').index($(this))
            $('.why__person').removeClass('active').eq(numwhy).addClass('active')
            $('.why__ul').css('transform', `translate(-${numwhy*33.33}%)`)
        })
    } else{
        $('.why .rght').click(function(){
            position ++
            if(position > 2){
                position = 0
            }
            $('.why__person').removeClass('active').eq(position).addClass('active')
            $('.why__ul').css('transform', `translate(-${position*33.33}%)`)
            $('.quote__people').css('transform', `translate(-${position*33.33}%)`)
        })
        $('.why .lft').click(function(){
            position --
            if(position < 0){
                position = 2
            }
            $('.why__person').removeClass('active').eq(position).addClass('active')
            $('.why__ul').css('transform', `translate(-${position*33.33}%)`)
            $('.quote__people').css('transform', `translate(-${position*33.33}%)`)
        })
    }

    let numreview = 0

    $('.review .rght').click(() => {
        numreview ++

        if($(window).width() > 750){
            if(numreview > 2){
                numreview = 0
            }
            $('.review__ul').css('transform', `translate(-${numreview*33.5}%)`)
        } else{
            if(numreview > 8){
                numreview = 0
            }
            $('.review__ul').css('transform', `translate(-${numreview*(100/9 + .1)}%)`)
        }
    })

    $('.review .lft').click(() => {
        numreview --
    
        if($(window).width() > 750){
            if(numreview < 0){
            numreview = 2
        }
            $('.review__ul').css('transform', `translate(-${numreview*33.5}%)`)
        } else{
            if(numreview < 0){
                numreview = 8
            }
            $('.review__ul').css('transform', `translate(-${numreview*(100/9 + .1)}%)`)
        }
    })
})