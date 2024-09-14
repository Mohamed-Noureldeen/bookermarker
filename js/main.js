var siteName = document.getElementById("siteName");
var sideUrl = document.getElementById("sideUrl");
var dwebsite = document.getElementById("dwebsite");
var pupUp = document.getElementById("pup-up");
var closePupup = document.getElementById("close");

closePupup.onclick = function () {
  pupUp.classList.add("d-none");
}

var allwibsite = JSON.parse(localStorage.getItem("websites")) || [];
displayall()
function addwebsite() {
  if (validtion(nameRegex, siteName) && validtion(ulrRegex, sideUrl)) {
    var wibsite = {
      name: siteName.value,
      url: sideUrl.value,
    }
    allwibsite.push(wibsite);
    display(allwibsite.length - 1)
    clearinput()
    localStorage.setItem("websites", JSON.stringify(allwibsite))

  } else {
    pupUp.classList.remove("d-none")
  }
}

function display(i) {
  dwebsite.innerHTML += `
  <tr>
   <td>${i}</td>
   <td>${allwibsite[i].name}</td>
   <td><div class="btn visit" onclick="gotoUlr('${allwibsite[i].url}')"><i class="fa-solid fa-eye pe-2"></i>visit</div></td>
   <td><div class="btn delet" onclick="delet(${i})"><i class="fa-solid fa-trash-can pe-2"></i></i>delet</div></td>
</tr>
   `
}

function displayall() {
  for (var i = 0; i < allwibsite.length; i++) {
    display(i)
  }
}

function delet(i) {
  allwibsite.splice(i, 1);
  localStorage.setItem("websites", JSON.stringify(allwibsite));
  dwebsite.innerHTML = "";
  displayall()
}

nameRegex = /\w{3,}/;
ulrRegex = /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?/
function validtion(regex, element) {
  if (regex.test(element.value)) {
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
    return true;
  } else {
    element.classList.remove("is-valid")
    element.classList.add("is-invalid")
    return false;
  }
}

var vistUrl;
function gotoUlr(el){
 if(el.startsWith('http://') || el.startsWith('https://')){
vistUrl=el;
 }else{
  vistUrl="https://" + el;
 }
 window.location.href = vistUrl;
}

function clearinput(){
  siteName.value="";
  sideUrl.value="";
}