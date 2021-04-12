
let personalinfo = document.getElementById('main-form');

/* If condition is put so as this codes fires only when the page gets loaded
As event listner is giving Null Value Error */ 

if (personalinfo) {
    personalinfo.addEventListener("submit", (e) => { e.preventDefault(); })
    document.getElementById("submit").addEventListener("click", userForm);
    document.getElementById("reset").addEventListener("click", clearForm);
    document.getElementById("First-Name").addEventListener("keyup", function () { myFunction(1); });
    document.getElementById("Last-Name").addEventListener("keyup", function () { myFunction(2); });
    document.getElementById("city").addEventListener("keyup", function () { myFunction(3); });
    document.getElementById("province").addEventListener("keyup", function () { myFunction(4); });
    personalinfo.addEventListener('focus', (event) => { event.target.style.background = '#D0D3D4'; }, true);
    personalinfo.addEventListener('blur', (event) => { event.target.style.background = ''; }, true);
}
function userForm() {
    var Fname = personalinfo.FirstName.value;
    var Lname = personalinfo.LastName.value;
    var Email = personalinfo.Email.value;
    var Address = personalinfo.address.value;
    var Cty = personalinfo.city.value;
    var Province = personalinfo.province.value;
    var memberShiptype = personalinfo.Membership.value;

    /* This if condition is to check if all the values are input*/
    if (Fname != "" && Lname != "" && Email != "" && Address != "") {
        document.getElementById("Name").innerText = Fname + " " + Lname;
        document.getElementById("Mail").innerText = Email;
        document.getElementById("Cmpladdress").innerText = Address;
        document.getElementById("cityProvince").innerText = Cty + " , " + Province;
        /* For just the First word of Membership type to be displayed */
        let newText = memberShiptype.split(' ')[0];
        document.getElementById("Membertype").innerText = newText;
    }

}
/* Function to clear the form values */ 

function clearForm() {

    document.getElementById("Name").innerText = "";
    document.getElementById("Mail").innerText = "";
    document.getElementById("Cmpladdress").innerText = "";
    document.getElementById("cityProvince").innerText = "";
    document.getElementById("Membertype").innerText = "";

}

/* Function to check for  characters, And uppercase transform input value */

function myFunction(input) {
    var regex = /[^a-z]/gi;
    if (input == 1) {
        var x = document.getElementById("First-Name");
        x.value = x.value.toUpperCase();
        x.value = x.value.replace(regex, '');
    }
    if (input == 2) {
        var x = document.getElementById("Last-Name");
        x.value = x.value.toUpperCase();
        x.value = x.value.replace(regex, '');
    }
    else if (input == 3) {
        var x = document.getElementById("city");
        x.value = x.value.toUpperCase();
        x.value = x.value.replace(regex, '');
    }
    else {
        var x = document.getElementById("province");
        x.value = x.value.toUpperCase();
        x.value = x.value.replace(regex, '');
    }
}



let excelForm = document.getElementById('excel');
if (excelForm) {
    excelForm.addEventListener("submit", (e) => { e.preventDefault(); })
    document.getElementById("submit").addEventListener("click", myExcelFuns);
    document.getElementById("reset").addEventListener("click", clearFormExcel);
    excelForm.addEventListener('focus', (event) => { event.target.style.background = '#D0D3D4'; }, true);
    excelForm.addEventListener('blur', (event) => { event.target.style.background = ''; }, true);
  
}
function clearFormExcel() {

    document.getElementById("Result").innerText = "";
  
}
function myExcelFuns() {

    let numberStr = document.getElementById("numbers").value;

    /* This if condition is used , so as "NOT" to show anything on result label -> as
    By default if user presses submit button without entering values -> it shaows "0" value on result field */
    if (numberStr != "") {
        /* Inbuilt trim function is used to delete leading and trailing blanks */
        numberStr = numberStr.trim();


        let answer = 0;
        let inputdataArr = numberStr.split(" ");
      //  console.log(inputdataArr);

        let numericArr = [];


        for (let i = 0; i < inputdataArr.length; i++) {
            if (!isNaN(inputdataArr[i]) && inputdataArr[i] != "") {
                numericArr.push(parseFloat(inputdataArr[i]));
            }
        }
      //  console.log(numericArr);


        if (document.getElementById("AutoSum").checked) {

            let addNumbers = 0;
            for (let i = 0; i < numericArr.length; i++) {
                addNumbers += parseFloat(numericArr[i]);
            }
            answer = addNumbers;

        }
        else if (document.getElementById("Average").checked) {
            let addNumbers = 0;
            for (let i = 0; i < numericArr.length; i++) {
                addNumbers += parseFloat(numericArr[i]);
            }
            let count = numericArr.length;
            answer = addNumbers / count;
        }
        /* Inbuilt Max function of Math object can also be used */
        else if (document.getElementById("Max").checked) {
            let max = parseFloat(numericArr[0]);
            for (let i = 1; i < numericArr.length; ++i) {
                if (parseFloat(numericArr[i]) > max) {
                    max = parseFloat(numericArr[i]);
                }
            }
            answer = max;
        }
        /* Inbuilt Min function of Math object can also be used */
        else {
            let min = parseFloat(numericArr[0]);
            for (let i = 1; i < numericArr.length; ++i) {
                if (parseFloat(numericArr[i]) < min) {
                    min = parseFloat(numericArr[i]);
                }
            }
            answer = min;
        }
        /* This is used if a user press submit button after page load--
        it is giving empty field error, but also showing answer= NaN as empty field is going On result
        */

        document.getElementById("Result").innerText = answer;
    }
    else {
        document.getElementById("Result").innerText = "Please Enter What You Want To Calculate";

    }
   
}
