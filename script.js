// Getting input from input areas
function inputs(ENROLLMENT_No, userName, bookName, type) {
  this.ENROLLMENT_No = ENROLLMENT_No;
  this.userName = userName;
  this.bookName = bookName;
  this.type = type;
}

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

function showList() {
  let listItems = localStorage.getItem("listItems");
  if (listItems == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listItems);
  }
  new Display().add(listArray);
}

// Call showList when the page loads
showList();

function showList() {
  let listItems = localStorage.getItem("listItems");
  if (listItems == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listItems);
  }
  new Display().add(listArray);
}

// Call showList when the page loads
showList();

function showList() {
  let listItems = localStorage.getItem("listItems");
  if (listItems == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listItems);
  }
  new Display().add(listArray);
}

// Call showList when the page loads
showList();

function showList() {
  let listItems = localStorage.getItem("listItems");
  if (listItems == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listItems);
  }
  new Display().add(listArray);
}

// Call showList when the page loads
showList();

function showList() {
  let listItems = localStorage.getItem("listItems");
  if (listItems == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listItems);
  }
  new Display().add(listArray);
}

// Call showList when the page loads
showList();

function showList() {
  let listItems = localStorage.getItem("listItems");
  if (listItems == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listItems);
  }
  new Display().add(listArray);
}

// Call showList when the page loads
showList();

function showList() {
  let listItems = localStorage.getItem("listItems");
  if (listItems == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listItems);
  }
  new Display().add(listArray);
}

// Call showList when the page loads
showList();

function showList() {
  let listItems = localStorage.getItem("listItems");
  if (listItems == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listItems);
  }
  new Display().add(listArray);
}

// Call showList when the page loads
showList();

function showList() {
  let listItems = localStorage.getItem("listItems");
  if (listItems == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listItems);
  }
  new Display().add(listArray);
}

// Call showList when the page loads
showList();


function deleteItem(index) {
  let listItems = localStorage.getItem("listItems");
  if (listItems == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listItems);
  }
  listArray.splice(index, 1);
  localStorage.setItem("listItems", JSON.stringify(listArray));
  showList();
}

const form = document.getElementById("mylibraryform");
form.addEventListener("submit", formSubmit);

function formSubmit(e) {
  e.preventDefault();

  let givenENROLLMENT_No = document.getElementById("ENROLLMENT_No").value;
  let givenUserName = document.getElementById("User-Name").value;
  let givenBookName = document.getElementById("Book-Name").value;

  let givenType;
  let checkIT = document.getElementById("it");
  let checkCSE = document.getElementById("cse");
  let checkECE = document.getElementById("ece");

  if (checkIT.checked) {
    givenType = checkIT.value;
  } else if (checkCSE.checked) {
    givenType = checkCSE.value;
  } else {
    givenType = checkECE.value;
  }

  let o1 = new inputs(givenENROLLMENT_No, givenUserName, givenBookName, givenType);

  let displayObj = new Display();

  let listItems = localStorage.getItem("listItems");
  if (listItems == null) {
    listArray = [];
  } else {
    listArray = JSON.parse(listItems);
  }

  if (displayObj.validate(o1) && displayObj.checkIssue(listArray, o1) === 1) {
    listArray.push(o1);
    localStorage.setItem("listItems", JSON.stringify(listArray));

    displayObj.add(listArray);
    displayObj.clear();
    displayObj.alertuser("success", "Success", "Book is issued");
  } else if (displayObj.checkIssue(listArray, o1) === 0) {
    displayObj.alertuser("danger", "Oops!", `Book is already issued to ${displayObj.issuedUser}`);
    displayObj.clear();
  } else {
    displayObj.alertuser("danger", "Oops!", "Book is not issued");
    displayObj.clear();
  }
}

showList();
