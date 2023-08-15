// document.getElementById("bio").innerHTML = "Zakir Demirel 2004";
// var TumListeler = document.getElementsByTagName("ul");
// var sehirler = TumListeler[0];

// var elemanlar = sehirler.getElementsByTagName("li");

// for(i = 0 ; i < elemanlar.length ; i++){
//     alert(elemanlar[i].innerHTML);
// }

// var classElemanlari = document.getElementsByClassName("intro1");
// alert(classElemanlari[0].innerHTML);

// var queryElemanlari = document.querySelectorAll("p.intro1")
// alert(queryElemanlari.length);

// var isimELemanlari = document.getElementsByName("musteriAdi");
// alert(isimELemanlari[0].value);

// var name = document.getElementById("name").addEventListener("mouseover",rengiDegistir);

// function rengiDegistir(){
//     document.getElementById("div1").style.color = "red";
    
//     var isimELemanlari = document.getElementsByName("musteriAdi");
//     isimELemanlari[0].value = "Emir";
// }

// var node = document.getElementById("agac");
// alert(node.childNodes[0].nodeValue);

var heading = document.createElement("h2");
var node = document.createTextNode("Merhaba JavaScript");
heading.appendChild(node);

var div1 = document.getElementById("div1");
var p2 = document.getElementById("p2");

div1.insertBefore(heading,p2);

div1.removeChild("p2")

