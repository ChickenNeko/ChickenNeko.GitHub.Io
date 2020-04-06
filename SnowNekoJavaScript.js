function dateFunction()
{
    var date = new Date();
    document.getElementById("dt").innerHTML = date.toDateString();

}

window.addEventListener("load", (event) => { i = document.getElementById("para"); i.innerHTML = new Date().toDateString(); })

function myFunction() 
{
    alert("hello");
}
