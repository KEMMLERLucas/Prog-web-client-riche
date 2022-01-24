let a1 = document.querySelector("#add");
let aInfo = document.querySelector("#noteForm");
a1.addEventListener("click", (event) => {
    aInfo.classList.remove("create_edit_note-hidden");
});

let valide = document.querySelector("#form_add_note_valid");

valide.addEventListener("click", (event) => {
    //TODO
    aInfo.classList.add("create_edit_note-hidden");
});