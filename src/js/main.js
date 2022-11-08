const wrapperNews = document.querySelector('.news__carousel');
const newsItem = document.querySelector('.news-item');
let nextButton = document.querySelector('#next-news')
let prevButton = document.querySelector('#prev-news')
let halfWidthNew = newsItem.offsetWidth / 2;

let pressed = false;
let startX = 0;

document.addEventListener('DOMContentLoaded', () => {

    //NEW SECTION CAROUSEL CONTROL BUTTONS PREV AND NEXT
    nextButton.addEventListener('click', () => {
        wrapperNews.scrollLeft += halfWidthNew;
    })
    prevButton.addEventListener('click', () => {
        wrapperNews.scrollLeft -= halfWidthNew;
    })

    //NEWS SECTION CAROUSEL DRAG AND MOVE
        wrapperNews.addEventListener('mousedown', (e) => {
            pressed = true;
            startX = e.clientX;
            wrapperNews.style.cursor = 'grabbing';
        })
        wrapperNews.addEventListener('mouseleve', (e) => {
            pressed = false;
        })
        wrapperNews.addEventListener('mouseup', (e) => {
            pressed = false;
            startX = e.clientX;
            wrapperNews.style.cursor = 'grab';
        })
        wrapperNews.addEventListener('mousemove', (e) => {
            if(!pressed){
                return
            }
            wrapperNews.scrollLeft += startX - e.clientX 
        })
})

