let a1 = document.querySelector("#add");
let aInfo = document.querySelector("#noteForm");
let currentNote=document.querySelector("#currentNoteView");
let valide = document.querySelector("#form_add_note_valid");
let listeNote=document.querySelector("#noteListView");
var note = {
    titre: "titre",
    contenu: "Insérez du contenu",
    date: new Date(),
    Note: function (titre, contenu) {
        let date = new Date();
        date.getTime();
        this.titre = titre;
        this.contenu = contenu;
        this.date = date;
    },

    setTitre: function (title) {
        this.titre = title;
    },
    setContenu: function (content) {
        this.contenu = content;
    }

};
let noteFormView = {
    display:function (){
            aInfo.classList.remove("create_edit_note-hidden");
    },
    hide : function (){
            aInfo.classList.add("create_edit_note-hidden");
    },
    validate: function (){
            //TODO
            aInfo.classList.add("create_edit_note-hidden");
            let atext=document.querySelector("#form_add_note_text").value;
            let aTitre=document.querySelector("#form_add_note_title").value;
            note=new note.Note(aTitre, atext);
            console.log("Titre : "+note.titre);
            console.log("Date : "+note.date);
            console.log("Content : "+note.contenu);
            return note;
    }
}
let NoteView = {
    htmltext : "null",
    convert: function (n){
        let titre=n.titre;
        let texte=n.contenu;
        let date=n.date;
        let conv=new showdown.Converter();
        this.htmltext=conv.makeHtml(`<h1>${titre}</h1> <p>${date}</p> <p2>${texte}</p2>`);
    },
    afficher:function (){
        currentNote.innerHTML=this.htmltext;
    }
}
let mainMenuView ={
    addHandler:function () {
        a1.addEventListener("click", (event) => {
            noteFormView.display();

        });

        valide.addEventListener("click", (event) => {
            NoteView.convert(noteFormView.validate());
            NoteView.afficher();
            noteFormView.hide();
        });
    }
}
let noteList ={
    tableauNote : [],
    addNote :function (n){
        this.tableauNote.push(n);
        return this.tableauNote.indexOf(n);
    },
    get:function (place){
      return this.tableauNote[place];
    },
    getList:function (){
      return this.tableauNote.values();
    }

}
let noteListView ={
    displayItem : function (n){
        text=`${n.titre}  ${n.date}`;
        listeNote.appendChild(document.createElement('div'));
        listeNote.lastChild.
    }
}

let globalVar ={
    //noteCourante : noteFormView.validate(),
    loader : function () {
        window.addEventListener("load", ()=>{
            mainMenuView.addHandler();
        });
    }
}
globalVar.loader();





