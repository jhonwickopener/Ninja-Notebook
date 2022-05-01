showNotes();
let addbtn = document.getElementById('addBtn');
addbtn.addEventListener('click', function (e) {

    let addtxt = document.getElementById('addTxt')
    let addTitle = document.getElementById("addTitle")
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addtxt.value
    }
    const ab = "";
    var l = ab.length;
    if (addTitle.value == "" || addTitle.length == 0 && addtxt.value == "" || addtxt.length == 0) {
        alert("Enter some text");
    } else {
        notesobj.push(myObj);
        localStorage.setItem("notes", JSON.stringify(notesobj))
        addtxt.value = "";
        addTitle.value = "";
        showNotes();
    }
    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        showcase.classList.toggle('active');
    })

})
// function to show notes from localstorage
function showNotes() {
    let notes = localStorage.getItem('notes')

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="notecard my-2 mx-2 card" style="width: 18rem;">
           <div class="card-body">
               <h5 class="card-title">${element.title} </h5>
               <p class="card-text">${element.text}</p>
               <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-outline-dark">Delete Note</button>
           </div>
       </div>`
    });

    let noteselm = document.getElementById('notes')
    if (notesobj.length != 0) {
        noteselm.innerHTML = html;
    }

    else {
        noteselm.innerHTML = `You didn't added notes yet- use "Add notes to add a note"`
    }
}

function deleteNote(index) {

    let notes = localStorage.getItem('notes')

    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }

    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj))

    showNotes();
}


let search = document.getElementById('searchTxt')
search.addEventListener('input', function () {

    let inputval = search.value.toLowerCase()
    let notecards = document.getElementsByClassName('notecard')
    Array.from(notecards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText
        let cardH = element.getElementsByTagName("h5")[0].innerText
        cardTxt.toLocaleLowerCase()
        cardH.toLocaleLowerCase()
        if (cardTxt.toLocaleLowerCase().includes(inputval) || cardH.toLocaleLowerCase().includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";

        }
        
        
    })
})