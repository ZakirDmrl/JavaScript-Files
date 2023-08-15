// let ile tanımlama yaparsan bir değişkeni birden fazla tanımlamaz var yapınca öyle yapıyordu
// Nesneler ve diziler ve fonskiyonlar referans tip olduğu için içeriğini değiştirebiliriz bellekteki ref. değişmediği sürece( const değişken durumu için)

var selamFonksiyonu = function selam(){
    console.log("Merhaba");
}

selamFonksiyonu();

const selamFonksiyonu2 = () =>{
    console.log("Merhaba 2");
}

selamFonksiyonu2();

const selamFonksiyonu3 = (mesaj) =>{
    console.log(mesaj);
}

selamFonksiyonu3("Merhaba 3");

var topla = (sayi,sayi2)=>{
    return sayi+sayi2;
}

let toplam = topla(3,4);
console.log(toplam);