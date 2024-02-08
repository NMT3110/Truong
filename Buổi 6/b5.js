var images=[
    "anh/1.jpeg",
    "anh/2.jpeg",
    "anh/3.jpeg",
    "anh/4.jpeg",
    "anh/5.jpeg"
];
var index=0;
function back(){
    index--;
    if(index<-0) index=images.length-1;
    document.getElementById("anh").src=images[index];
    document.getElementById("anh").src=images[index];
}
function next(){
    index++;
    if(index==images.length) index=0;
    document.getElementById("anh").src=images[index];
}