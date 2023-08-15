var kullanicilar = [
    { email: "zakirdemirel@gmail.com", sifre: "12345" },
    { email: "emirdemirel@gmail.com", sifre: "12345" },
    { email: "rdemirel@gmail.com", sifre: "12345" },
]

var tivitler = [
    { email: "zakirdemirel@gmail.com", tivit: "Bugün ay çok güzel.." },
    { email: "emirdemirel@gmail.com", tivit: "Bugün hava çok güzel" },
    { email: "rdemirel@gmail.com", tivit: "Evet ay çok güzel <3" }
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function giris() {
    var size = kullanicilar.length
    var flag = 0
    for (var i = 0; i < size; i++) {
        if (email == kullanicilar[i].email && sifre == kullanicilar[i].sifre) {
           flag = 1
            break
        }
        else {
            flag = 0
        }
    }
    if(flag = 1){
        console.log(tivitler)
    }
    else{
        console.log("Kulanıcı adı veya şifre hatalı.")
    }
}

giris(email, sifre)