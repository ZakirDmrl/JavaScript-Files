const urunServis = {
    ekle : function(){
        console.log(this); // Burada normalde urunServis çıktısı bekleriz 
                           //fakat js de her şey fonk. üzerine kurulu old. için burada objenin(fonksiyonun kendisini) döndürmüş oldu.
    }
}

urunServis.ekle();