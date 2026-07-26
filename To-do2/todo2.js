let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", function(){
        let item = document.createElement("li");
        item.innerText = input.value;
        let delBtn = document.createElement("button");
        delBtn.innerText = "Delete";
        item.appendChild(delBtn);
        
        ul.appendChild(item);
        input.value = "";
})
ul.addEventListener("click", function(e){
   if(e.target.tagName === "BUTTON"){
        let par = e.target.parentElement;
        par.remove();
   }
})


