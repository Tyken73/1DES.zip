function getHeight() {
    divElement = document.querySelector(".box");
    elemHeight = divElement.offsetHeight;
    document.querySelector(".output")
    .textContent = elemHeight + "px";
}



document.querySelector('.card')