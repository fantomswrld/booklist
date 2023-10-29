const submit = document.getElementById('submit');

function book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

submit.addEventListener('click', function addNewBook(event) {
    event.preventDefault();

    var title = document.getElementById('title');
    var author = document.getElementById('author');
    var isbn = document.getElementById('isbn-number');
    const tbody = document.getElementById('table-body');

    const newBook = new book(title.value, author.value, isbn.value);
    console.log(newBook);

    function sendAlert(alertMessage) {
        const alertDiv = document.getElementById('alert-message');

        const alertBox = document.createElement('h4');
        alertBox.id = 'alert';
        const alertBoxText = document.createTextNode(alertMessage);
        alertBox.appendChild(alertBoxText);
        alertDiv.appendChild(alertBox);

        setTimeout(() => {
            alertDiv.removeChild(alertBox);
        }, 3000);
    }

    if(title.value === '' || author.value === '' || author.value === '') {
        sendAlert('*Please fill in all fields!');
    } else {
        sendAlert('Book was successfully added!');
    
        const tableRow = document.createElement('tr');
        tbody.appendChild(tableRow);
    
        // Creating the title cell
        const titleTableCell = document.createElement('td');
        titleTableCell.id = 'table-title';
        const titleTableCellText = document.createTextNode(title.value);
        titleTableCell.appendChild(titleTableCellText);
    
        // Creating the author cell
        const authorTableCell = document.createElement('td');
        authorTableCell.id = 'table-author';
        const authorTableCellText = document.createTextNode(author.value);
        authorTableCell.appendChild(authorTableCellText);
    
        // Creating the isbn cell
        const isbnTableCell = document.createElement('td');
        isbnTableCell.id = 'table-isbn';
        const isbnTableCellText = document.createTextNode(isbn.value);
        isbnTableCell.appendChild(isbnTableCellText);
    
        // Creating delete button
        const removeTableCell = document.createElement('td');
        removeTableCell.id = 'remove-cell';
        const removeButton = document.createElement('button');
        removeButton.className = 'delete-item';
        const removeButtonText = document.createTextNode('X');
        removeButton.appendChild(removeButtonText);
        removeTableCell.appendChild(removeButton);
        removeButton.addEventListener('click', function removeBook(event) {
            event.preventDefault();
    
            tbody.removeChild(tableRow);

            sendAlert('Book was removed!');
        });
    
        title.value = '';
        author.value = '';
        isbn.value = '';
    
        // Appending the cells to the row
        tableRow.appendChild(titleTableCell);
        tableRow.appendChild(authorTableCell);
        tableRow.appendChild(isbnTableCell);
        tableRow.appendChild(removeTableCell);
    }
});