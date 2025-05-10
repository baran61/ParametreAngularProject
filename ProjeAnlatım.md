# PROJE ANLATIM

* Proje Angular 17 Standalone mimaride oluşturuldu.

* PrimeNG görsel destekleriyle ve responsive stil yapısı ile tamamlanmıştır.

## QUESTİON 1

Verilen API adresi üzerinden  veriler çekildi, ve bu veriler 5 farklı ölçüte göre filtrelendi. (Common Name, Scientific Name, Condition, Height, DBS1). Ve bu filtreleme çoklu seçim destekli. Sonuç olarakda filtrelenmiş sonuçlar tablo şeklinde gösterildi.

### QUESTİON 1 ANA YAPISI

* question1.component.ts: Sayfanın ana mantığını barındırır. (filtreleme, veri yükleme)

* question1.component.html: Filtreleme alanlarını ve tabloyu içerir.

* question1-data.service.ts: API'den verileri çekmek için kullanılır.

* question1.model.ts: Veri tipi tanımı yapılır.

* array.utils.ts: Tekrarlı kodlar buraya taşındı. 

* shared/styles/_common.scss: Buton, layout gibi tekrar eden stiller buraya taşındı.

### SONUÇ OLARAK

Sayfa yüklendiğinde 1148 veri alınır. Kullanıcı 5 ayrı drop-down seçenek ile filtreleme işlemini yapar. 'Filter' butonuna basıldıgında tablo sadece filtreye uygun tabloyu gösterir. Kod yazımı sırasında DRY prensibine dikkat edilmiştir.

## QUESTİON 2


### QUESTİON 2 ANA YAPISI

Yöneticinin kullanabileceği bir yönetici sayfası oluşturuldu. Yönetici form aracılığı ile görev oluşturabiliyor (6 farklı görev) ve bu görevin içeriğini girerek farklı çalışanlarına görev atamaları yapabiliyor (3 farklı çalışan). Atama yaptığı bu görevleri tablo üzerinden takip edip, tamamlanan görevleri check box yardımıyla tamamlandı olarak işaretleyebiliyor. Aynı zamanda Chart düzeni eklendi ve kullanıcılar Chart üzerinden de gösterildi. Yönetici görevi tamamladığında check box üzerinden işaretlediğinde chart üzerinden çalışan silindi.


* question2.component.ts: Form yönetimi, görev listesi ve chart tasarım alanı burda.

* question2.component.html: Form, tablo ve grafik burada yer alıyor.

* question2.component.scss: Responsive ve modern görünüm için özel CSS tanımlandı.


## QUESTİON 3

Bu soruda 3 farklı konuya sahip , 3 aynı kart sahte HTTP isteği üzerinden yöneten ve kullanıcıya yeni veri ekleme ve çıkarma olanağı tanıyan bir uygulama. Uygulama ilk render edildiğinde her kart için rastgele 5 veri kart' da listeleniyor fakat bu 5 veri sadece ait olduğu kartın konusu hakkında veriler. Her kart için (A,B,C) sadece kendisine ait veri gösteriliyor. Ekle butonuna basıldığında yine fake HTTP çağrısı yapılıyor ve yeni rastgele bir veri geliyor. Sil butonuyla istenilen veri listeden kaldırılıyor. handleAdd() ve handleRemove() fonksiyonları, merkezi olarak card-list.component.ts içerisinde tanımlanarak yönetiliyor. Bu kod tekrarının önlenmesini sağlıyor.


## QUESTİON 3 ANA YAPISI

* a-card, b-card, c-card adlarında 3 component tanımlandı. Ancak kod tekrarını azaltmak için hepsi SharedCardComponent üzerinden çalışacak şekilde sadeleştirildi.

* SharedCardComponent: Tüm kartların ortak görsel yapısını ve etkileşimlerini barındırır (başlık, liste, ekle/sil butonları).

* card.model.ts, a-card.model.ts, b-card.model.ts, c-card.model.ts: Kartlarda kullanılacak veri yapıları burada tanımlandı. Her kart için özel bir model türü oluşturuldu.

* fake-http.service.ts:  HTTP isteği için için Observable, delay ve Math.random() kullanıldı. Delay metodu fake HTTP isteğinin gizlenmesi için kullanıldı. Math.random() metodu rastgele bir verinin eklenmesi ve gösterilmesi için kullanıldı. Asenkron verileri yönetmek ve aynı zamanda izlemek için Observable metodu kullanıldı, .subscirbe() olanlara veri iletildi.

* card-list.component.ts: Uygulamadaki kartların bulunduğu ana bileşen. Verileri FakeHttpService’ten çekerek SharedCardComponent’lere yönlendirir ve yönetir.


## QUESTİON 4

### QUESTİON 4 ANA YAPISI

 