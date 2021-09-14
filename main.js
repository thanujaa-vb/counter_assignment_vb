var count=0;
document.getElementById("value").textContent=count;
var reset=document.getElementById("reset");

function increase(){
    count=count + 1;
    document.getElementById("value").textContent= count;

}

function decrease(){
    if(count!=0){
    count=count - 1;
    document.getElementById("value").textContent= count;
    }
}

reset.addEventListener("click",() => {
    count=0;
    document.getElementById("value").textContent= count;
})
