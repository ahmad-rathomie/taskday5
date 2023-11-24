
// this is the function
function message() {
    // this is the array
    let array = ["You are handsome today","You are beautiful today","Gwenchana"];
    // this is formula to display random text from array
    let randomIndex = array[Math.floor(Math.random() * array.length)];

//this code will get the id and take the value from randomIndex 
    document.getElementById("quote").innerHTML = randomIndex;

}
// this code will take the value from function and will be display the function thru click.
document.getElementById("").addEventListener("click", message());