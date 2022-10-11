const firstSection = document.querySelector('.firstSection');
const lastSection = document.querySelector('.lastSection');

function carouselAnimate(section){
    let children = Array.from(section.children);

    if(children.length > 6){
        section.classList.add('carousel');
        let track = document.createElement('div');
        track.classList.add('track');
        section.appendChild(track);
        let horseys = Array.from(section.querySelectorAll(':scope > .articleBox'));
        horseys.forEach(el => {
            el.classList.add('horsey');
            track.appendChild(el);
        });
        
        let slideWidth = track.firstChild.getBoundingClientRect().width;
        let slides = Array.from(track.children);

        slides.forEach((slide, index) => slide.style.left = `${slideWidth * index}px`);

        slides[0].classList.add('active');

        let btnNext = document.createElement('div');
        btnNext.classList.add('btn-next');
        let nextIcon = document.createElement('span');
        nextIcon.classList.add('fa-solid', 'fa-angle-right');
        btnNext.appendChild(nextIcon);
        
        let btnPrev = document.createElement('div');
        btnPrev.classList.add('btn-prev');
        let prevIcon = document.createElement('span');
        prevIcon.classList.add('fa-solid', 'fa-angle-left');
        btnPrev.appendChild(prevIcon);

        section.appendChild(btnPrev);
        section.appendChild(btnNext); 

        let breadcrumbs = document.createElement('div');
        breadcrumbs.classList.add('breadcrumbs');
        
        children.forEach((child, index) => {
            let breadcrumb = document.createElement('div');
            breadcrumb.classList.add('breadcrumb');
            breadcrumbs.appendChild(breadcrumb);
        }) 

        section.appendChild(breadcrumbs);
        breadcrumbs.firstChild.classList.add('activeB');
    }
} 

carouselAnimate(firstSection);
carouselAnimate(lastSection);

let nextbtns = Array.from(document.querySelectorAll('.btn-next')); 

nextbtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let current = e.currentTarget.parentElement.querySelector('.track .active');
        let currentB = e.currentTarget.parentElement.querySelector('.breadcrumbs .activeB');
        let next = current.nextSibling;
        let nextB = currentB.nextSibling;
    
        if(next){
           let track = e.currentTarget.parentElement.querySelector('.track');
           track.style.transform = `translateX(-${next.style.left})`;
           current.classList.remove('active');
           currentB.classList.remove('activeB');
           next.classList.add('active');
           nextB.classList.add('activeB'); 
        }
    });
});

let prevbtns = Array.from(document.querySelectorAll('.btn-prev')); 

prevbtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        let current = e.currentTarget.parentElement.querySelector('.track .active');
        let currentB = e.currentTarget.parentElement.querySelector('.breadcrumbs .activeB');
        let next = current.previousSibling;
        let nextB = currentB.previousSibling;
    
        if(next){
           let track = e.currentTarget.parentElement.querySelector('.track');
           track.style.transform = `translateX(-${next.style.left})`;
           current.classList.remove('active');
           currentB.classList.remove('activeB');
           next.classList.add('active');
           nextB.classList.add('activeB'); 
        }
    });
});