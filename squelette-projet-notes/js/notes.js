let a1 = document.querySelector("#add");
let aInfo = document.querySelector("#noteForm");
a1.addEventListener("click", (event) => {
    aInfo.classList.remove("create_edit_note-hidden");
});
