document.querySelector("h1").style.color ="#800080";
document.querySelector("h1").style.textAlign ="center";

document.addEventListener("dblclick").alert();

document.querySelector("#emailBox").addEventListener("check", function(){
    console.log ("got the checkbox");
    if(this.checked){
        console.log("email toggle seen")
        document.querySelector("#emailBox").style.display='block';
    }
    else{
        console.log("email toggle gone")
        document.querySelector("#emailBox").style.display='none';

    }
});