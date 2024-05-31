const btn = document.getElementById("btn");
const NotesContainer = document.querySelector(".Notes-Container")
const notes = document.querySelectorAll(".input-box");

function showNotes(){
    NotesContainer.innerHTML =localStorage.getItem("notes")
};
showNotes();

function storage() {
    console.log(NotesContainer  , "fctvghjj")
   localStorage.setItem("notes", NotesContainer.inner)
}

btn.addEventListener("click",()=>{
    const originalClss = btn.className
    setTimeout(() => {
        btn.className = "BTNN"
        setTimeout(() => {
            btn.className = originalClss
        }, 100);
    }, 0.2);
})

btn.addEventListener("click",()=>{
        let inputBox = document.createElement("p")
        let img = document.createElement("img");
        inputBox.className = "input-box"
        inputBox.setAttribute("contenteditable" , "true")
        img.src = "images/delete.png";
        NotesContainer.appendChild(inputBox).appendChild(img)
})

NotesContainer.addEventListener("click", function(e){
      if(e.target.tagName === "IMG"){
       
        e.target.parentElement.remove();
        storage()
      }
})
