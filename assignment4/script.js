

function imageExpand(imgs) {
    var expandIMG = document.getElementById("expandedImage");
    expandIMG.src = imgs.src;
    expandIMG.parentElement.style.display = "block";
}

// expandIMG.addEventListener("click", imageExpand);

