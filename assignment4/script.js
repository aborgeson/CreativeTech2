var expandIMG = document.getElementById("expandedImage");
var t1 = document.getElementById("thumb-1");
var t2 = document.getElementById("thumb-2");
var t3 = document.getElementById("thumb-3");
var t4 = document.getElementById("thumb-4");

function imageExpand(evnt) {
    console.info(evnt);
    expandIMG.src = evnt.target.src;
    // makes the source of expandIMG the target of the souce event - whichever is clicked
}

t1.addEventListener("click", imageExpand)
t2.addEventListener("click", imageExpand)
t3.addEventListener("click", imageExpand)
t4.addEventListener("click", imageExpand)
