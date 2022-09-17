
const headerSection =document.querySelector('.header__section')
const arrowLeft = document.querySelector('.header__section_left')
const arrowRight = document.querySelector('.header__section_right')
let currentImage=0
let imagesArray = [
    "url('image/back1.png')",
    "url('image/back2.png')",
    "url('image/back3.png')",
]
const prev = document.querySelector('.fa-arrow-left')
const next = document.querySelector('.fa-arrow-right')



prev.addEventListener('click', ()=>{
    headerSection.style.backgroundImage= imagesArray[currentImage]
    arrowLeft.style.backgroundImage = imagesArray[currentImage - 1]
    currentImage--
    if(currentImage < 1){
        currentImage = imagesArray.length

    }

})

next.addEventListener('click', ()=>{
    headerSection.style.backgroundImage= imagesArray[currentImage]
    arrowRight.style.backgroundImage = imagesArray[currentImage + 1]
    currentImage++
    if(currentImage > imagesArray.length-1){
        currentImage =0
    } 
})



// images Gallery
const imagesBody = document.querySelectorAll('.img-body')
const imgSection = document.querySelector('.images')
const nextBtn = document.getElementById('btn1')
const prevBtn = document.getElementById('btn2')


// move the images


let cuurentIndex = 0
function translateImage(){
        imgSection.classList.add('active')
        imgSection.style.transition = `transform 6s ease-in`
    setTimeout(()=>{
        imgSection.classList.remove('active')
        imgSection.style.transition = `transform 6s ease-in`
    },6000)

}

setInterval(()=>{
    setTimeout(()=>{
    translateImage()
},6000)
},12000)

// move images using arrow
nextBtn.addEventListener('click',()=>{
    imgSection.classList.add('active')

})
prevBtn.addEventListener('click',()=>{
    imgSection.classList.remove('active')

})