fetch('https://dummyjson.com/users')
  .then(response => response.json())
  .then(users => {
    console.log(users)
    displayUsers(users.users);
  })

  function loader() {
    if(response) {
      document.getElementById("loader").style.display = "none"
    }
  }

  function displayUsers(users) {
    let userCard = '<div class="user-cards">';
    
    for (let i = 0; i < users.length; i += 3) {
      userCard += '<div class="user-row">';
      
      for (let a = i; a < i + 3 && a < users.length; a++) {
        let user = users[a];
        userCard += `
          <div class="user-card">
            <h3><u>ID: ${user.id}</u></h3>
            <p><strong>First Name:</strong> ${user.firstName}</p>
            <p><strong>Last Name:</strong> ${user.lastName}</p>
            <p><strong>Maiden Name:</strong> ${user.maidenName}</p>
            <p><strong>Age:</strong> ${user.age}</p>
            <p><strong>Gender:</strong> ${user.gender}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>User Name:</strong> ${user.userName}</p>
            <p><strong>Password:</strong> ${user.password}</p>
            <p><strong>Birth Date:</strong> ${user.birthDate}</p>
            <p><strong>Image:</strong> <img src="${user.image}" width="100px"></p>
            <p><strong>Blood Group:</strong> ${user.bloodGroup}</p>
            <p><strong>Height:</strong> ${user.height}</p>
            <p><strong>Weight:</strong> ${user.weight}</p>
          </div>
        `;
      }
      
      userCard += '</div>';
    }
  
    userCard += '</div>';
    document.body.innerHTML = userCard;
  }
  
  