const notesDisplay = document.getElementById('notes_display');
const input = document.getElementById('text_note');

input.addEventListener('keypress', displayNotes);

function displayNotes (evt){
    if (evt.keyCode == 13){
        evt.preventDefault();// stop it from refreching the page
        console.log(input.value);
        valIn = input.value
    

        const note_el = document.createElement("div");
        note_el.classList.add("note");


        const note_content_el = document.createElement("div");
        note_content_el.classList.add("content");
        note_el.appendChild(note_content_el);

        const note_input_el = document.createElement("textarea");
        note_input_el.setAttribute('cols', 10);
        note_input_el.setAttribute('rows', 10); 
        note_input_el.setAttribute("readonly", "readonly");
        note_input_el.setAttribute('name', '1note');
        note_input_el.setAttribute('id', '1note');
        note_input_el.innerText = valIn;

        note_content_el.appendChild(note_input_el);

        const actions = document.createElement("div");
        actions.classList.add("actions");
        note_content_el.appendChild(actions);

        const edit_button = document.createElement("button");
        edit_button.classList.add("edit");
        edit_button.innerHTML = "Edit"
        actions.appendChild(edit_button);

        const del_button = document.createElement("button");
        del_button.classList.add("delete");
        del_button.innerHTML = "Delete"
        actions.appendChild(del_button);

        notesDisplay.appendChild(note_el);

        input.value = "";

        edit_button.addEventListener('click', () => {
            if (edit_button.innerHTML.toLocaleLowerCase() == "edit"){
                console.log("edit");
                note_input_el.focus();
                edit_button.innerHTML = "Save";
                note_input_el.removeAttribute("readonly");
            } else {
                edit_button.innerHTML = "Edit";
                note_input_el.setAttribute("readonly", "readonly");
            }
        })

        del_button.addEventListener('click',() => {
            notesDisplay.removeChild(note_el);
        })
        

    } else {
        return;
    }

}






