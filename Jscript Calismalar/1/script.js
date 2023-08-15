var kullanicilar = [
    {email:"zakirdemirel@gmail.com",sifre:"12345"},
    {email:"emirdemirel@gmail.com",sifre:"12345"},
    {email:"rdemirel@gmail.com",sifre:"12345"},
]

var tivitler = [
    {email:"zakirdemirel@gmail.com",tivit:"Bugün ay çok güzel.."},
    {email:"emirdemirel@gmail.com",tivit:"Bugün hava çok güzel"},
    {email:"rdemirel@gmail.com",tivit:"Evet ay çok güzel <3"}
]

var email = prompt("email?")
var sifre = prompt("sifre?")

function giris(){
    if((email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) || (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)){
        console.log(tivitler)
    }
    else{
        console.log("Kullanıcı adı veya şifre yanlış")
    }
}

giris(email,sifre)