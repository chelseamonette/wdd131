// Create a click event listener for the Add Chapter button using an addEventListener
const addChapterButton = document.getElementByID("addchap");
addChapterButton.addEventListener("click", function(){

    // Within the Add Chapter button click event function block, do the following:
    //Check to make sure the input is not blank before doing the following remaining
    //tasks in this list.  Using an if block, otherwise provide a message or at 
    //least do nothing and return the .focus() to the input field.
    if (input.value.trim !== '')
    {

        //Move the code that you wrote in the last activity into this if block in order
        //to support the correct flow of the program

        // Declare variables that hold refrences to the input, button, and list elements
        const input = document.querySelector('#favchap');
        const button = document.querySelector('button');
        const list = document.querySelector('#list');
        //Create a li element that will hold each entries chapter title and 
        // an associted delete button
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Populate the li element variable's textContent or innerHTML with the input value
        li.textContent = input.value ;

        //Populate the button textContent with a x
        deleteButton.textContent = '❌';

        // add an aria-label attribute button
        let del = document.getElementById("close-button");
        console.log(del.ariaLabel);

        // append the li element variable with the delete button
        li.append('deleteButton');

        // append the li element variable to the unordered list in your HTML
        list.append(li);

        //Add an event listener to the delete button that removes the li element when clicked.
        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        });

        
        //Change the input value to nothing or the empty string to clean up the interface for the user.
        input.value='';
    }
    

    //Regardless if a list item was created or not, the focus(active cursor) should be sent to the input element.
    else{
        return focus();
    }

});