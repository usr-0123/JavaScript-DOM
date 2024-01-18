document.addEventListener('DOMContentLoaded', function () {
    const list = document.querySelector('#movie-list ul');
    const forms = document.forms;

    // delete movies
    list.addEventListener('click', (e) => {
        if (e.target.className == 'delete') {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })

    //Fetch the date
    function getCurrentDate() {
        const now = new Date();
        const options = { year: 'numeric', month: 'numeric', day: 'numeric'};
        return now.toLocaleDateString('en-US', options);
        }

    // add movies
    const addForm = forms['add-movie'];
    addForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // create elements
        const value = addForm.querySelector('input[type="text"]').value;

        const li = document.createElement('li');
        const movieName = document.createElement('span');
        const deleteBtn = document.createElement('span');
        const dateSpan = document.createElement('span');

        // add text content
        movieName.textContent = value;
        deleteBtn.textContent = 'delete';
        dateSpan.textContent = getCurrentDate();

        // add the movie names to the local storage
        localStorage.setItem('movies', JSON.stringify(value))

        // add classes
        movieName.classList.add('name');
        deleteBtn.classList.add('delete');
        dateSpan.classList.add('date');

        // append to DOM
        li.appendChild(movieName);
        li.appendChild(deleteBtn);
        li.appendChild(dateSpan);
        list.appendChild(li);

        // Clear input
        addForm.querySelector('input[type="text"]').value = '';

        
    })

    function getFromLocalStorage(value) {
    const storedValue = localStorage.getItem(value);
        return JSON.parse(storedValue);
    }

});