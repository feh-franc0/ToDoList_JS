var form = document.getElementById("addform");
var listItem=document.getElementById("list");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    var newItem=document.getElementById("item").value;
    // console.log(newItem);
    var li=document.createElement('li');
    li.className="list-group-item";
    li.innerHTML=newItem;


    var button=document.createElement('button');
    button.className="btn btn-danger float-end";
    button.innerHTML="X";

    li.appendChild(button);
    listItem.appendChild(li);
});


listItem.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('btn')){
        var li = e.target.parentElement;
        // console.log(li);
        listItem.removeChild(li);
    }
});