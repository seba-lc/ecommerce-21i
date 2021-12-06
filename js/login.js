class User {
  constructor(name, lastname, email, password, country, admin) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.country = country;
    this.admin = admin;
  }
}

let users = [
  new User(
    "Diego",
    "Fernandez",
    "diego@gmail.com",
    "123456789",
    "Argentina",
    false
  ),
  new User(
    "Sebastián",
    "Lopez Cruz",
    "seba@gmail.com",
    "123456789",
    "Argentina",
    true
  ),
  new User(
    "Juan",
    "Ramallo",
    "juan@gmail.com",
    "123456789",
    "Argentina",
    false
  ),
  new User(
    "Diego",
    "Aiquel",
    "diego.a@gmail.com",
    "123456789",
    "Argentina",
    false
  ),
  new User(
    "Pablo",
    "Martinez",
    "pablo@gmail.com",
    "123456789",
    "Argentina",
    false
  ),
  new User("Lionel", "Messi", "leo@gmail.com", "123456789", "Argentina", false),
];

function loginCheck(event) {
  event.preventDefault();
  let email = document.querySelector('#user-email').value;
  let pass = document.querySelector('#user-password').value;
  let userLogged = users.find(user=>user.email === email);
  let userPass = users.find(user => user.password === pass);
  if(userLogged){
    if(userPass){
      window.location.assign('http://127.0.0.1:5500/main.html')
    }else{
      let passError = document.createElement('div');
      passError.innerText = 'La contraseña es incorrecta';
      passError.classList.add('alert', 'alert-danger', 'mt-3');
      let form = document.querySelector('form');
      form.appendChild(passError);
      setTimeout(function(){
        form.removeChild(passError);
      },3000)
    }
  }else{
    let dataError = document.createElement('div');
    dataError.innerText = 'Los datos ingresados no son correctos';
    dataError.classList.add('alert', 'alert-danger', 'mt-3');
    let form = document.querySelector('form');
    form.appendChild(dataError);
    setTimeout(function(){
      form.removeChild(dataError);
    },3000)
  }
}
