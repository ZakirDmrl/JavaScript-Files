class Personel{
    constructor(ad,soyad){
        this.ad = ad;
        this.soyad = soyad;
    }
    kaydet(){
        console.log(`Personel kaydedildi : ${this.ad}`);
    }
}

//const personel = new Personel()
// personel.ad = "Emir";
// console.log(personel.ad); // Burada personel tanımında ad ve soyad boş olduğu halde yine de Emiri yazdırır fakat buradaki ad constructor ile bir ilgisi olmayan bir şeydir.
                             // Çünkü js de bir nesneye istediğimiz zaman bir özelliği ekleyebiliryor olmamızdan kaynaklidir.
const personel = new Personel("Zakir","Demirel"); // Burada Zakir ve Demirel bilgileri girildiğinden ad ve soyad a artık doğru şekilde ulaşabilir.
personel.kaydet();
console.log(personel.ad);