function addActiveToPlaceHolder(e) {
    var palceHolder = e.parentElement.getElementsByClassName('place-holder')[0];
    palceHolder.setAttribute("class", "place-holder active");
}

function removeActiveFromPlaceHolder(e) {
    var placeHolder = e.parentElement.getElementsByClassName('place-holder')[0];
    
    if (e.value.length == 0){
        placeHolder.setAttribute("class", "place-holder");   
    }
}

function onBlurFirstName(e) { 
    removeActiveFromPlaceHolder(e);
    
    var regExp = /^[a-zA-Z\s]+$/;
    var firstname = e.value;
    var isValid = regExp.test(firstname);
    
    if (!isValid) {
        var para = document.createElement("p");
        para.setAttribute("class", "input-error");
        if (e.value == 0){
            var tags = e.parentElement.getElementsByTagName('p');
            tags.length > 0 ? tags[0].remove() : null;
            
            para.innerHTML = "First name must required";
        }
        else {
            var tags = e.parentElement.getElementsByTagName('p');
            tags.length > 0 ? tags[0].remove() : null;
            
            para.innerHTML = "Make sure all letter are alphabates";
        }
        e.parentElement.appendChild(para);
    }
    
    else {
        var tags = e.parentElement.getElementsByTagName("p");
        
        if (tags.length > 0) {
            tags[0].remove();
        }
    }
}

function onClickFirstName(e) {
    addActiveToPlaceHolder(e);
}



function onBlurLastName(e) {
    removeActiveFromPlaceHolder(e);
    
    var regExp = /^[a-zA-Z\s]+$/;
    var lastname = e.value;
    var isValid = regExp.test(lastname);
    console.log(isValid);
    if (!isValid) {
        var para = document.createElement('p');
        para.setAttribute("class", "input-error");
        if (e.value == 0){
            var tags = e.parentElement.getElementsByTagName('p');
            tags.length > 0 ? tags[0].remove() : null;
            
            para.innerHTML = "Last name must required";
        }
        else {
            var tags = e.parentElement.getElementsByTagName("p");
            tags.length > 0 ? tags[0].remove() : null;
            
            para.innerHTML = "Make sure all letter are alphabates";
        }
        e.parentElement.appendChild(para);
    }
    
    else {
        var tags = e.parentElement.getElementsByTagName("p");
        if (tags.length > 0) {
            tags[0].remove();
        }
    }
}

function onClickLastName(e) {
    addActiveToPlaceHolder(e);
}


function onClickMail(e) {
     addActiveToPlaceHolder(e);
}

function onBlurMail(e) {
    removeActiveFromPlaceHolder(e);
    
    var regExp = /^[a-zA-Z0-9_\.]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
    var mail = e.value;
    var isValid = regExp.test(mail);
    console.log(isValid);
    if (!isValid) {
        var para = document.createElement('p');
        para.setAttribute("class", "input-error");
        if (e.value == 0) {
            var tags = e.parentElement.getElementsByTagName('p');
            tags.length > 0 ? tags[0].remove() : null;
            
            para.innerHTML = "Enter Mail address";
        }
        else {
            var tags = e.parentElement.getElementsByTagName('p');
            tags.length > 0 ? tags[0].remove() : null;
            
            para.innerHTML = "Please enter correct Email address";
        }
        e.parentElement.appendChild(para);
    }
    
    else {
        var tags = e.parentElement.getElementsByTagName('p');
        tags.length > 0 ? tags[0].remove() : null;
    }
    
}


function onBlurPhoneNumber(e) {
    removeActiveFromPlaceHolder(e);
    var re = /^\d{10,10}$/;
    var phoneNumber = e.value;
    
    var isValid = re.test(phoneNumber); 
    
    if (!isValid) {
        var para = document.createElement('p');
        para.setAttribute("class", "input-error");
        if (e.value == 0) {
            var tags = e.parentElement.getElementsByTagName('p');
            tags.length > 0 ? tags[0].remove() : null;
            
            para.innerHTML = "Phone number must contain 10 digits";
        }
        else {
            var tags = e.parentElement.getElementsByTagName('p');
            tags.length > 0 ? tags[0].remove() : null;
            
            para.innerHTML = "Make sure all are 10 digit numbers";
        }
        e.parentElement.appendChild(para);
    }
    
    else {
        var tags = e.parentElement.getElementsByTagName("p");
        
        if (tags.length > 0) {
            tags[0].remove();
        }
    }
    
}

function onClickPhoneNumber(e) {
addActiveToPlaceHolder(e);
    
}


function onClickPinCode(e) {
    addActiveToPlaceHolder(e);
}

function onBlurPinCode(e) {
    removeActiveFromPlaceHolder(e);
    var re = /^\d{6,6}$/;
    var pincode = e.value;
    
    var isValid = re.test(pincode); 
    
    if (!isValid) {
        var para = document.createElement('p');
        para.setAttribute("class", "input-error");
        if (e.value == 0) {
            var tags = e.parentElement.getElementsByTagName('p');
            tags.length > 0 ? tags[0].remove() : null;
            
            para.innerHTML = "Enter pin code";
        }
        else {
            var tags = e.parentElement.getElementsByTagName('p');
            tags.length > 0 ? tags[0].remove() : null;
            
            para.innerHTML = "Make sure all are 6 digit numbers";
        }
        e.parentElement.appendChild(para);
    }
    
    else {
        var tags = e.parentElement.getElementsByTagName("p");
        
        if (tags.length > 0) {
            tags[0].remove();
        }
    }
    
}

function onClickAge(e) {
    addActiveToPlaceHolder(e);
}

function onBlurAge(e) {
    removeActiveFromPlaceHolder(e);
    
    var regExp = /^\d{1,3}$/;
    var age = e.value;
    var isValid = regExp.test(age);
    console.log(isValid);
    if (!isValid) {
        var para = document.createElement("p");
        para.setAttribute("class", "input-error");
        
        if (e.value == 0) {
            var tags = e.parentElement.getElementsByTagName("p");
            tags.length > 0 ? tags[0].remove() : null;
            
            para.innerHTML = "Enter your Age";
        }
        else {
            var tags = e.parentElement.getElementsByTagName('P');
            tags.length > 0 ? tags[0].remove() : null;
            
            para.innerHTML = "Enter in digits";
        }
        e.parentElement.appendChild(para);
    }
    else {
        var tags = e.parentElement.getElementsByTagName('p');
        tags.length > 0 ? tags[0].remove() : null;
    }
}


function submit(e) {
    var show = document.getElementById("infoTable");
    show.setAttribute("class", "table table-bordered");
    
    var firstName = document.getElementById("first-name").value;
    if (firstName == 0) {
        alert("First Name is empty");
        var show = document.getElementById("infoTable");
        show.setAttribute("class", "table table-bordered d-none");
        var shake = document.getElementById("first-name");
        shake.setAttribute("class", "input shake");
    }
    else {
        document.getElementById("firstName").innerHTML = firstName;
        var shake = document.getElementById("first-name");
        shake.setAttribute("class", "input");
        
    }
    
    var lastName = document.getElementById("last-name").value;
    if (lastName == 0) {
        alert("Last Name is empty");
        var show = document.getElementById("infoTable");
        show.setAttribute("class", "table table-bordered d-none");
        var shake = document.getElementById("last-name");
        shake.setAttribute("class", "input shake");
    }
    else {
        document.getElementById("lastName").innerHTML = lastName;
        var shake = document.getElementById("last-name");
        shake.setAttribute("class", "input");
    }
    
    
    var email = document.getElementById("email").value;
    if (email == 0) {
        alert("Email is empty");
        var show = document.getElementById("infoTable");
        show.setAttribute("class", "table table-bordered d-none");
        var shake = document.getElementById("email");
        shake.setAttribute("class", "input shake");
    }
    else {
        document.getElementById("emailTable").innerHTML = email;
        var shake = document.getElementById("email");
        shake.setAttribute("class", "input");
    }
    
    
    var phone = document.getElementById("phone-number").value;
    if (phone == 0) {
        alert("Phone number is empty");
        var show = document.getElementById("infoTable");
        show.setAttribute("class", "table table-bordered d-none");
        var shake = document.getElementById("phone-number");
        shake.setAttribute("class", "input shake");
        
    }
    else {
        document.getElementById("phoneNumber").innerHTML = phone;
        var shake = document.getElementById("phone-number");
        shake.setAttribute("class", "input");
    }
    
    
    var pin = document.getElementById("pin-code").value;
    if (pin == 0) {
        alert("Pin code is empty");
        var show = document.getElementById("infoTable");
        show.setAttribute("class", "table table-bordered d-none");
        var shake = document.getElementById("pin-code");
        shake.setAttribute("class", "input shake");
    }
    else {
       document.getElementById("pinCode").innerHTML = pin;
       var shake = document.getElementById("pin-code");
       shake.setAttribute("class", "input");
    }
    
    
    var age = document.getElementById("age").value;
    if (age == 0) {
        alert("Age is empty");
        var show = document.getElementById("infoTable");
        show.setAttribute("class", "table table-bordered d-none");
        var shake = document.getElementById("age");
        shake.setAttribute("class", "input shake");
    }
    else {
        document.getElementById("ageTable").innerHTML = age;
        var shake = document.getElementById("age");
        shake.setAttribute("class", "input");
    }
    
    
    
}

