// image corosel for section 2
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
// zoom in and zoom out for image
function zoom(){
    document.querySelector("#zoom").style.transform = "scale(1.2)";
  }
  function zoomout(){
    document.querySelector("#zoom").style.transform = "scale(1.0)";
  }


// ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
//   image gallery filter
filterSelection("All")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "All") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("navgallery");
var btns = btnContainer.getElementsByClassName("bar");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
// contacct details form
function validateForm() {
  const firstnameRegex = /[a-zA-Z]{2,15}/igm;
  const lastnameRegex = /[a-zA-Z]{2,15}/igm;
  const emailRegex = /[a-z0-9A-Z]{1,20}@[a-z0-9A-Z]{1,10}\.[a-z]{2,}/gim;
  const phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/gm;
  const messageRegex = /[a-zA-Z]{2,120}/igm;

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  if (firstnameRegex.test(firstname)) {
    document.getElementById("errorfirstname").innerHTML ="";
  }
  else if(firstname==""){
      document.getElementById("errorfirstname").innerHTML="Please enter the firstname.";
  } 
  else{
    document.getElementById("errorfirstname").innerHTML = "Enter valid firstname.";
  }
  if (lastnameRegex.test(lastname)) {
    document.getElementById("errorlastname").innerHTML ="";
  }
  else if(lastname==""){
      document.getElementById("errorlastname").innerHTML="Please enter the lastname.";
  } 
  else{
    document.getElementById("errorlastname").innerHTML = "Enter valid lastname.";
  }
  if (emailRegex.test(email)) {
    document.getElementById("erroremail").innerHTML ="";
  }
  else if(email==""){
      document.getElementById("erroremail").innerHTML="Please enter the email.";
  }
  else{
    document.getElementById("erroremail").innerHTML = "Enter valid email.";
  }
  if (phoneRegex.test(phone)) {
    document.getElementById("errorphone").innerHTML ="";
  }
  else if(phone==""){
      document.getElementById("errorphone").innerHTML="Please enter the contact number.";
  }
  else{
    document.getElementById("errorphone").innerHTML = "Enter valid contact number.";
  }
  if (messageRegex.test(message)) {
    document.getElementById("errormessage").innerHTML ="";
  }
  else if(message==""){
      document.getElementById("errormessage").innerHTML="Please enter the message";
      return false;
  }
  else{
    document.getElementById("errormessage").innerHTML = "Enter valid message.";
    return false;
  }
}


function initMap(){
  var options={
    zoom:10,
    center:{lat:37.7749,lng:-122.4194}
  }
  var map=new google.maps.Map(document.getElementById("map"),options)
}
