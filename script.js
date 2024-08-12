// Function to handle admin login
// Function to handle admin login
function adminLogin(username, password) {
    const adminUsername = "sandeep"; // Set your admin username here
    const adminPassword = "5736"; // Set your admin password here

    console.log("Username Entered:", username);
    console.log("Password Entered:", password);

    if (username.trim() === adminUsername && password.trim() === adminPassword) {
        // Hide login section and show library section
        document.getElementById("login-section").style.display = "none";
        document.getElementById("library-section").style.display = "block";
    } else {
        return false;
    }
}

// Add event listener to the login form
const loginForm = document.getElementById("admin-login-form");
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("admin-username").value;
    const password = document.getElementById("admin-password").value;

    if (!adminLogin(username, password)) {
        document.getElementById("login-error").innerText = "Invalid username or password!";
    }
});


// Function to handle input data
function inputs(ENROLLMENT_No, userName, bookName, type) {
    this.ENROLLMENT_No = ENROLLMENT_No;
    this.userName = userName;
    this.bookName = bookName;
    this.type = type;
}

// Display class to handle UI operations
class Display {
    add(arrayInputs) {
        let tableBody = document.getElementById("table-body");
        let today = new Date().toLocaleDateString();
        let htmltobeadded = "";
        for (let i = 0; i < arrayInputs.length; i++) {
            htmltobeadded += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${today}</td>
                    <td>${arrayInputs[i].ENROLLMENT_No}</td>
                    <td>${arrayInputs[i].userName}</td>
                    <td>${arrayInputs[i].bookName}</td>
                    <td>${arrayInputs[i].type}</td>
                    <td><button type="button" onclick="deleteItem(${i})" class="dlt-btn btn-primary btn">Delete</button></td>
                </tr>
            `;
        }
        tableBody.innerHTML = htmltobeadded;
    }

    clear() {
        let myForm = document.getElementById("mylibraryform");
        myForm.reset();
    }

    validate(inputs) {
        return inputs.userName !== "" && inputs.bookName !== "";
    }

    alertuser(type, sub, message) {
        let alertuser = document.getElementById("alertuser");
        let htmltobeaddedinalert = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>${sub}</strong> ${message}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
        alertuser.innerHTML = htmltobeaddedinalert;
        setTimeout(() => {
            alertuser.innerHTML = "";
        }, 4000);
    }

    checkIssue(listArray, o1) {
        for (let i = 0; i < listArray.length; i++) {
            if (listArray[i].bookName === o1.bookName) {
                this.issuedUser = listArray[i].userName;
                return 0;
            }
        }
        return 1;
    }
}

// List array to hold the book records
let listArray = [];
document.getElementById("mylibraryform").addEventListener("submit", libraryformsubmit);

function libraryformsubmit(e) {
    let userName = document.getElementById("User-Name").value;
    let bookName = document.getElementById("Book-Name").value;
    let ENROLLMENT_No = document.getElementById("ENROLLMENT_No").value;
    let type;
    let checkBoxes = document.getElementsByName("check-box");
    for (let i = 0; i < checkBoxes.length; i++) {
        if (checkBoxes[i].checked) {
            type = checkBoxes[i].value;
            break;
        }
    }

    let newInput = new inputs(ENROLLMENT_No, userName, bookName, type);
    let display = new Display();

    if (display.validate(newInput)) {
        if (display.checkIssue(listArray, newInput)) {
            listArray.push(newInput);
            display.add(listArray);
            display.clear();
            display.alertuser("success", "Hurray!!", "Book has been successfully issued.");
        } else {
            display.alertuser("danger", "Oops!!", `Book has already been issued to ${display.issuedUser}`);
        }
    } else {
        display.alertuser("danger", "Error!!", "Please fill out all the required fields.");
    }

    e.preventDefault();
}

// Function to delete an item
function deleteItem(index) {
    listArray.splice(index, 1);
    let display = new Display();
    display.add(listArray);
}
