const btnElement = document.querySelector("#btn");

btnElement.addEventListener("click", ()=> {
  const noteTag = document.querySelector("#note");
  const note = noteTag.value.trim();

  const color = document.querySelector("#div-color").value;

  if(note.length == 0) {
    alert("Enter some text");
    return;
  }

  const noteContent = document.querySelector('#written-notes');
  const emptyMssg = document.querySelector("span");
  if(emptyMssg) {
    emptyMssg.remove();
  }

  const noteElement = document.createElement("div");
  noteElement.classList.add('note-element');
  noteElement.style.backgroundColor = color;

  let description = document.createElement("p");
  description.innerText = note;

  // let textArea = document.createElement("textarea");
  

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";

  deleteBtn.addEventListener("click", () =>{
    noteContent.removeChild(noteElement);
    if(noteContent.childElementCount === 0) {
      noteContent.innerHTML ="<span>You have not added a note yet.</span>";
    }
  });

  noteElement.appendChild(description);
  noteElement.appendChild(deleteBtn);

  noteContent.appendChild(noteElement);
  noteTag.value = "";
});
