# PROJE ANLATIM

* Proje Angular 17 Standalone mimaride oluşturuldu.

## QUESTİON 1

Verilen API adresi üzerinden ağaç verileri çekildi, ve bu veriler 5 farklı ölçüte göre filtrelendi. (Common Name, Scientific Name, Condition, Height, DBS1). Ve bu filtreleme çoklu seçim destekli. Sonuç olarakda filtrelenmiş sonuçlar tablo şeklinde gösterildi.

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