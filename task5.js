
function fruit(){
//array variable
    let fruit = [" orange ", " apple"," papaya "," mango "," banana "," pineapple "," pear "];
    
    // using the for ...of to access the values inside an array directly. 
    for( let i of fruit)  {
        // take value from id and store the value of variable.
        document.getElementById("list").innerHTML = fruit;
    }
    
}
//take the value from function and display array by click 
document.getElementById("").addEventListener("click",fruit());