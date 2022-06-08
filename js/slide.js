const swiper = new Swiper('.swiper', {
    // speed:400
    loop:true,
    // 루프 빼면 3에서 1로 안 넘어감(반복 안됨)
    // 네비게이션이 객체니까 콤마찍어야함
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        clickable: true
      },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
    effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    //     },
    // autoplay: {
    //     delay: 1000,
    //   },   
    // 플러그인 모듈에서 넣고 싶은거 넣으면 됨
})

// 플러그인에서 스크립트 가져올때 import빼고 const 만 / ...에 옵션넣기