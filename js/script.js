const usersData = users; // 'users' array is defined in data.js

// Set the number of users to display per page
const usersPerPage = 10;

// function to calculate the total number of pages
function calculateTotalPages(usersData, usersPerPage) {
  return Math.ceil(usersData.length / usersPerPage);
}

// Function to generate a list of users for a given page number
function generateUsersForPage(usersData, page, usersPerPage) {
  const startIndex = (page - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  return usersData.slice(startIndex, endIndex);
}

// Function to display user data on the web page
function displayUsers(users) {
  const contactList = document.querySelector('.contact-list');
  contactList.innerHTML = ''; // Clear the existing list

  users.forEach((user, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'contact-item cf';

    listItem.innerHTML = `
      <div class="contact-details">
        <img class="avatar" src="${user.image}">
        <h3>${user.name}</h3>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${user.joined}</span>
      </div>
    `;

    contactList.appendChild(listItem);
  });
}

// Initial page number
let currentPage = 1;

const totalPages = calculateTotalPages(usersData, usersPerPage);

// Generate pagination buttons
const pagination = document.querySelector('.pagination');
for (let page = 1; page <= totalPages; page++) {
  const button = document.createElement('button');
  button.textContent = page;

  button.addEventListener('click', () => {
    currentPage = page;
    const gen_user = generateUsersForPage(usersData, currentPage, usersPerPage);
    displayUsers(gen_user);
  });

  pagination.appendChild(button);
}

// Display the first page
const initialUsers = generateUsersForPage(usersData, currentPage, usersPerPage);
displayUsers(initialUsers);
