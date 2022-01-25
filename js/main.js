$('.owl-stages').owlCarousel({
    loop:true,
    margin:25,
    navText:["<img src='img/left.svg'>", "<img src='img/right.svg'>"],
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1.5
        },
        768:{
            items:2.5
        },
        992:{
            items:2.5
        },
        1200:{
            items:3.5
        }
    }
})

$('.owl-portfolio').owlCarousel({
    center: true,
    loop:true,
    margin:140,
    nav: true,
    navText:["<img src='img/prev.svg'>", "<img src='img/next.svg'>"],
    dots: false,
    responsive:{
        0:{
            items:1
        },
        1200:{
            items:1.5
        },
        1400:{
            items:2
        }
    }
});

$('.owl-articles').owlCarousel({
    loop:false,
    margin:25,
    nav:false,
    dots: false,
    autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        992:{
            items:1.5
        },
        1200:{
            items:2.5
        }
    }
})

const tabs = document.getElementById('desc-stage__tabs');
const contents = document.getElementById('desc-stage__contents');
console.log(tabs);
const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++) {
        tabs.children[i].classList.remove('active');
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    const currTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < contents.children.length; i++) {
        contents.children[i].classList.remove('active');
        if(contents.children[i].dataset.content === currTab) {
            contents.children[i].classList.add('active');
        }
    }
})