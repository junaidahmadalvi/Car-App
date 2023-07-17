var countForm = 1;
var vald;
var currentFormNumber = [1];
var carArray = [];
var formArr = [];

function validateAllForms() {
  //  console.log(countForm)
  // var formArr=[]

  for (let i = 0; i < currentFormNumber.length; i++) {
    let value = currentFormNumber[i];
    console.log(value);

    // get inputs
    let name = document.getElementById("name" + value);
    let model = document.getElementById("model" + value);
    let year = document.getElementById("year" + value);
    let price = document.getElementById("price" + value);
    let color = document.getElementById("color" + value);

    // get inputErrors
    let nameError = document.getElementById("nameError" + value);
    let modelError = document.getElementById("modelError" + value);
    let yearError = document.getElementById("yearError" + value);
    let priceError = document.getElementById("priceError" + value);
    let colorError = document.getElementById("colorError" + value);

    console.log(
      name,
      nameError,
      model,
      modelError,
      year,
      yearError,
      price,
      priceError,
      color,
      colorError
    );

    validation(
      name,
      nameError,
      model,
      modelError,
      year,
      yearError,
      price,
      priceError,
      color,
      colorError
    );

    if (
      nameError.innerHTML == "" &&
      modelError.innerHTML == "" &&
      yearError.innerHTML == "" &&
      priceError.innerHTML == "" &&
      colorError.innerHTML == ""
    ) {
      const newCar = {
        name: name.value,
        model: model.value,
        year: year.value,
        price: price.value,
        color: color.value,
        date:
          new Date().getFullYear() +
          "-" +
          (new Date().getMonth() + 1) +
          "-" +
          new Date().getDate(),
      };
      console.log(newCar, "newCar");
      formArr.push(newCar);
      console.log(currentFormNumber.length, "currentFormNumber");
      console.log(formArr.length, "formArr");
      console.log(newCar, "formArr");
    }
  }
  if (formArr.length == currentFormNumber.length) {
    carArray = formArr;
    console.log(carArray);
    showData();

    // showData();  //   validation(name,model,year,price,color)
  }
}
// if (formArr.length == currentFormNumber.length) {
//   carArray = formArr;
//   console.log(carArray);
//   showData();

//   // showData();  //   validation(name,model,year,price,color)
// }

function validation(
  name,
  nameError,
  model,
  modelError,
  year,
  yearError,
  price,
  priceError,
  color,
  colorError
) {
  let regAlphabet = /^[a-z A-Z]+$/;
  if (name.value === "") {
    nameError.innerHTML = `Car Name is Required`;
    vald = false;
  } else if (!regAlphabet.test(name.value)) {
    nameError.innerHTML = `Only alphabets are  allowed`;
    vald = false;
  } else if (name.value.length < 3) {
    nameError.innerHTML = `Minimum 3 Characters are required`;
    vald = false;
  } else {
    nameError.innerHTML = ``;
    vald = true;
  }

  if (model.value === "") {
    modelError.innerHTML = `model is required`;
    vald = false;
  } else {
    modelError.innerHTML = ``;
    vald = true;
  }

  if (year.value === "") {
    yearError.innerHTML = `Year is required`;
    vald = false;
  } else if (year.value.length < 4) {
    yearError.innerHTML = `Minimum 4 digits are required`;
    vald = false;
  } else {
    yearError.innerHTML = ``;
    vald = true;
  }

  if (price.value === "") {
    priceError.innerHTML = `price is required`;
    vald = false;
  } else if (price.value.length < 6) {
    priceError.innerHTML = `Price must in Lac`;
    vald = false;
  } else {
    priceError.innerHTML = ``;
    vald = true;
  }

  if (color.value === "") {
    colorError.innerHTML = `Color is Required`;
    vald = false;
  } else if (!regAlphabet.test(color.value)) {
    colorError.innerHTML = `Only alphabets are allowed`;
    vald = false;
  } else if (color.value.length < 3) {
    colorError.innerHTML = `Minimum 3 Characters are required`;
    vald = false;
  } else {
    colorError.innerHTML = ``;
    vald = true;
  }
}

var showData = () => {
  var html = "<table border='1|1' class='tabledata'>";
  html +=
    " <tr>   <th> Name</th> <th>Model</th> <th>Year</th> <th>Price</th> <th>Date</th> <th> Color </th>     </tr>";
  for (var i = 0; i < formArr.length; i++) {
    html += "<tr>";
    html += "<td>" + formArr[i].name + "</td>";
    html += "<td>" + formArr[i].model + "</td>";
    html += "<td>" + formArr[i].year + "</td>";
    html += "<td>" + formArr[i].price + "</td>";
    html += "<td>" + formArr[i].date + "</td>";
    html += "<td>" + formArr[i].color + "</td>";
    html += "</tr>";
  }
  html += "</table>";

  console.log(document.getElementById("box"));

  document.getElementById("box").innerHTML = html;
};

function addform() {
  // ++countForm;
  incr = ++countForm;

  currentFormNumber.push(countForm);
  console.log(currentFormNumber);
  var html = ` 
    <div id="formDiv" class="styleform"> 
    <form action="/" id="form">

        <center><h3>Car${incr} Information</h3></center>
        <br><button id="deleteBtn${incr}" class="btn btn-danger float-right mr-5" onclick="deleteForm(this)">Delete</button><br>

        <div class="col-md-6  input-control">
            <label for="name">Enter Car Name</label>
            <input type="text" class="form-control" placeholder="Honda Civic" id="name${incr}" >
            <div id="nameError${incr}" class="error"></div>
        
        </div>
        <br>
        <div class="col-md-6  input-control">
            <label for="model">Enter Model number</label>
            <input type="text" class="form-control" placeholder="Model Number" id="model${incr}">
            <div id="modelError${incr}" class="error"></div>
        
        </div>
        <br>
        <div class="col-md-6  input-control">
            <label for="year">Enter Year</label>
            <input type="number" class="form-control" placeholder="2022" id="year${incr}" maxlength="4">
            <div id="yearError${incr}" class="error"></div>
        
        </div>
        <br>
        <div class="col-md-6  input-control">
            <label for="price">Enter Price</label>
            <input type="number" class="form-control" placeholder="500000 Rs" id="price${incr}">
            <div id="priceError${incr}" class="error"></div>
        
        </div>
        <br>
        <div class="col-md-6  input-control">
            <label for="color">Car Color</label>
            <input type="text" class="form-control" placeholder="Red" id="color${incr}">
            <div id="colorError${incr}" class="error"></div>
        
        </div>
        
        
    </form> 
</div>`;

  document.getElementById("container").innerHTML += html;
}

function deleteForm(e) {
  console.log(e);
  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);

  id = e.id;
  console.log(id);
  var index = parseInt(id.substr(id.length - 1));

  const valueIndex = currentFormNumber.indexOf(index);
  if (index > -1) {
    currentFormNumber.splice(valueIndex, 1);
  }
  //    num= parseInt(index);
  console.log(currentFormNumber);
}
