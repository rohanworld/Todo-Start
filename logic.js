let submit=document.querySelector(".submit");
let notesElem=document.querySelector('.notes');
let title=document.querySelector("#text");
let notes=JSON.parse(localStorage.getItem("notes"));

var input = document.getElementById("text");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addNotes();    
  }
});
if(notes){
    notes.forEach(element => {
        addNotes(element)
    });
}
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    addNotes()
})
function addNotes(obj) {
    let card=document.createElement("div");
    card.classList.add("card");
    let titleval=title.value;
    if(obj){
        titleval=obj.title;
    }
    if(titleval){
        card.innerHTML=`<h3>${titleval}</h3> <br> <br>
                                  
                             <button class="del">Delete</button>`;
        notesElem.appendChild(card);
        updateLs()
    }
    let del=card.querySelector(".del");
    del.addEventListener('click', ()=>{
        card.remove();
        updateLs();
    })
}
function updateLs() {
    let card=document.querySelectorAll(".card");
    let arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[0].innerText,
        })
    });
    localStorage.setItem("notes", JSON.stringify(arr));
}
