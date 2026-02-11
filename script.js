document.addEventListener('DOMContentLoaded', () => {
    const contactList = document.getElementById('contactList');
    const addContactButton = document.getElementById('addContact');

    addContactButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `
                <span>
                    <strong>${name}</strong> - ${email}
                </span>
                <div>
                    <button class="btn btn-warning btn-sm edit">Edit</button>
                    <button class="btn btn-danger btn-sm delete">Delete</button>
                </div>
            `;

            contactList.appendChild(listItem);

            document.getElementById('name').value = '';
            document.getElementById('email').value = '';

            listItem.querySelector('.delete').addEventListener('click', () => {
                contactList.removeChild(listItem);
            });

            listItem.querySelector('.edit').addEventListener('click', () => {
                const newName = prompt('Enter new name:', name);
                const newEmail = prompt('Enter new email:', email);

                if (newName && newEmail) {
                    listItem.querySelector('span').innerHTML = `<strong>${newName}</strong> - ${newEmail}`;
                }
            });
        } else {
            alert('Please fill in both fields.');
        }
    });
});