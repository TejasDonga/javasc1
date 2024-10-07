// class user {
//     constructor(email, password){
//         this._email = email
//         this._password = password
//     }
//     get email(){
//         return this._email.toUpperCase()
//     }
//     set email(value){
//         this._email = value
//     }
//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password = value
//     }
// }

// const data = new user("gmail.com", '123')
// console.log(data._email, data.password);

const myEmail = document.querySelector("h1");
const button = document.querySelector("#button");
const modal = document.getElementById("customAlert");
const btn = document.getElementById("myButton");
const span = document.getElementById("closeBtn");
const ok = document.querySelector('.ok');

function user(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      const [path, domain] = this._email.split("@");
    //   console.log(path);
    //   console.log(domain);
      const part = path.slice(0, 3) + "******" + path.slice(-2);
      myEmail.innerHTML = `${part}@${domain}`;

      if (ok) {
        ok.addEventListener("click", () => {
          myEmail.innerHTML = this._email;

        //   alert("Are You Sure About That😳");
        });
      }
    },

    set: function (value) {
      this._email = value;
    },
  });
  Object.defineProperty(this, "password", {
    get: function () {
      return (this._password = password);
    },
    set: function (value) {
      this._password = value;
    },
  });
}

const User = new user("parthradadiya311@gmail.com", "2312");
console.log(User.email);




// When the button is clicked, show the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the close button is clicked, hide the modal
ok.onclick = function() {
  modal.style.display = "none";
}

// Close the modal if the user clicks anywhere outside the modal content
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

