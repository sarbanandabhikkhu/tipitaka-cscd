import initHtml from "./lib/initHtml.js";

document.body.querySelector("#app").innerHTML = initHtml;

const enterID = document.querySelector("#enterID");
const enterName = document.querySelector("#enterName");
const enterAge = document.querySelector("#enterAge");
const findID = document.querySelector("#findID");
const allUsers = document.querySelector("#allUsers");

const insertBtn = document.querySelector("#insert");
const updateBtn = document.querySelector("#update");
const removeBtn = document.querySelector("#remove");
const findBtn = document.querySelector("#find");

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyAGAKcs4m4QnBr_IbWDzT6C8myM7H9XL34",
  authDomain: "user-collection-95378.firebaseapp.com",
  databaseURL: "https://user-collection-95378-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "user-collection-95378",
  storageBucket: "user-collection-95378.appspot.com",
  messagingSenderId: "524608473235",
  appId: "1:524608473235:web:f542d96c7f5820abce2566",
};

const app = initializeApp(firebaseConfig);

import {
  getDatabase,
  ref,
  get,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const db = getDatabase();

getAllUsers();

function createUser(user) {
  return `<tr>
    <td>${user._id}</td>
    <td>${user.name}</td>
    <td>${user.age}</td>
  </tr>`;
}

function getAllUsers() {
  allUsers.innerHTML = `Loading...`;
  get(child(ref(db), "users"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        allUsers.innerHTML = snapshot
          .val()
          .map((user) => createUser(user))
          .join("");

        (enterID.value = ""), (enterName.value = ""), (enterAge.value = "");
      } else {
        alert("No User found");
      }
    })
    .catch((error) => {
      alert(error);
    });
}

function InsertUser() {
  set(ref(db, "users/" + enterID.value), {
    _id: enterID.value,
    name: enterName.value,
    age: enterAge.value,
  })
    .then(() => {
      alert("User added successfully");
      getAllUsers();
    })
    .catch((error) => {
      alert(error);
    });
}

function FindUser() {
  const dbref = ref(db);

  get(child(dbref, "users/" + findID.value))
    .then((snapshot) => {
      if (snapshot.exists()) {
        allUsers.innerHTML = `
          <tr>
            <td>${snapshot.val()._id}</td>
            <td>${snapshot.val().name}</td>
            <td>${snapshot.val().age}</td>
          </tr>
        `;
      } else {
        alert("No User found");
      }
    })
    .catch((error) => {
      alert(error);
    });
}

function UpdateUser() {
  update(ref(db, "users/" + enterID.value), {
    name: enterName.value,
    age: enterAge.value,
  })
    .then(() => {
      alert("User updated successfully");
      getAllUsers();
    })
    .catch((error) => {
      alert(error);
    });
}

function RemoveUser() {
  remove(ref(db, "users/" + enterID.value))
    .then(() => {
      alert("User deleted successfully");
      getAllUsers();
    })
    .catch((error) => {
      alert(error);
    });
}

insertBtn.addEventListener("click", InsertUser);
updateBtn.addEventListener("click", UpdateUser);
removeBtn.addEventListener("click", RemoveUser);
findBtn.addEventListener("click", FindUser);

const sidenav = {
  open: function (selector) {
    document.getElementById(selector).style.left = "0";
    var x = document.getElementById("sidenav-overlay");
    x.style.display = "block";
    x.style.opacity = 0;
    setTimeout(function () {
      x.style.opacity = 1;
    }, 10);
    x.onclick = function () {
      sidenav.close(selector);
    };
  },
  close: function (selector) {
    document.getElementById(selector).style.left = "-300px";
    var x = document.getElementById("sidenav-overlay");
    x.style.opacity = 0;
    setTimeout(function () {
      x.style.display = "none";
    }, 200);
  },
};
var sidenav_overlay = document.createElement("div");
sidenav_overlay.className = "sidenav-overlay";
sidenav_overlay.id = "sidenav-overlay";
document.body.appendChild(sidenav_overlay);
