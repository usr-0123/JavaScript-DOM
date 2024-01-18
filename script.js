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

        // To include the separator
        
        if (inputValue !== "") {
            // Add movie with current date
            const movieWithDate = inputValue + " - " + getCurrentDate();
            addMovie(movieWithDate);
        }

        saveToLocalStorage();

    })
    // Function to save movie list to local storage
    function saveToLocalStorage() {
        const movies = Array.from(list.children).map(function (li) {
            const movieName = li.querySelector('.name').textContent;
            const date = li.querySelector('.date').textContent;
            return { movieName, date };
        });

        localStorage.setItem('movies', JSON.stringify(movies));
    }

});