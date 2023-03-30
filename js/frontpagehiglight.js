const imageSlider = document.querySelector("#image-slider")
const prev = document.querySelector("#prev")
const next = document.querySelector("#next")
let currentImageIndex = 0

const images = [
    { url: "img/menu/billedeog.jpg" },
    { url: "img/menu/package1.jpg" },
    { url: "img/menu/packagedelivery.jpg" },
    { url: "img/menu/packageworld.jpg" },
    { url: "img/menu/storage1.jpg" },
]

for (let index = 0; index < images.length; index++) {
    const img = document.createElement("img")
    img.setAttribute("src", images[index].url)
    img.classList.add("billede")
    imageSlider.appendChild(img)

    /* Add active class to first element in array */
    if (index === 0) img.classList.add("active")
}

function nextImage() {
    const currentImage = document.getElementsByClassName("billede")[currentImageIndex]

    currentImageIndex++

    if (currentImageIndex === images.length) {
        currentImageIndex = 0
    }

    const nextImage = document.getElementsByClassName("billede")[currentImageIndex]

    currentImage.classList.remove("active")
    nextImage.classList.add("active")
}

function prevImage() {
    const currentImage = document.getElementsByClassName("billede")[currentImageIndex]


    if (currentImageIndex === 0) {
        currentImageIndex = images.length - 1
    }

    currentImageIndex--

    const prevImage = document.getElementsByClassName("billede")[currentImageIndex]

    currentImage.classList.remove("active")
    prevImage.classList.add("active")
}

next.addEventListener("click", nextImage)
prev.addEventListener("click", prevImage)