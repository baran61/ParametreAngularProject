import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { CardItem } from '../model/card.model';

const sampleData: CardItem[] = [
  // Teknoloji (10 adet)
  { id: 1, title: 'Yapay Zeka Uygulamaları', description: 'Günümüzde kullanılan çeşitli yapay zeka uygulamalarına genel bir bakış.', type: 'A' },
  { id: 2, title: 'Blockchain Teknolojisi', description: 'Blockchain in temel prensipleri ve farklı sektörlerdeki kullanım alanları.', type: 'A' },
  { id: 3, title: 'Siber Güvenlik Tehditleri', description: 'En yaygın siber güvenlik tehditleri ve bunlara karşı alınabilecek önlemler.', type: 'A' },
  { id: 4, title: 'Mobil Uygulama Geliştirme', description: 'Farklı platformlar için mobil uygulama geliştirme süreçleri ve araçları.', type: 'A' },
  { id: 5, title: 'Veri Bilimi ve Analitiği', description: 'Büyük veri kümelerinden anlamlı bilgiler çıkarma yöntemleri.', type: 'A' },
  { id: 6, title: 'Artırılmış Gerçeklik (AR)', description: 'Artırılmış gerçeklik teknolojisinin kullanım alanları ve geleceği.', type: 'A' },
  { id: 7, title: 'Sanal Gerçeklik (VR)', description: 'Sanal gerçeklik teknolojisinin farklı sektörlerdeki uygulamaları.', type: 'A' },
  { id: 8, title: 'Cloud Computing Trendleri', description: 'Bulut bilişim alanındaki son trendler ve yenilikler.', type: 'A' },
  { id: 9, title: 'Yazılım Geliştirme Metodolojileri', description: 'Agile, Scrum gibi popüler yazılım geliştirme yaklaşımları.', type: 'A' },
  { id: 10, title: 'Giyilebilir Teknoloji', description: 'Akıllı saatler, bileklikler gibi giyilebilir cihazların özellikleri ve kullanım alanları.', type: 'A' },

  // Seyahat (10 adet)
  { id: 11, title: 'Gizemli Peru ve Machu Picchu', description: 'Peru nun tarihi ve kültürel zenginlikleri ile Machu Picchu antik kentinin sırları.', type: 'B' },
  { id: 12, title: 'Uzakdoğu nun İncisi: Japonya', description: 'Japonya nın geleneksel kültürü, modern şehirleri ve doğal güzellikleri.', type: 'B' },
  { id: 13, title: 'Akdeniz in Büyüsü: Yunan Adaları', description: 'Yunan adalarının kendine has atmosferi, plajları ve tarihi kalıntıları.', type: 'B' },
  { id: 14, title: 'İskandinavya Keşfi: Norveç Fiyortları', description: 'Norveç in muhteşem fiyortları, doğal manzaraları ve Viking tarihi.', type: 'B' },
  { id: 15, title: 'Afrika Safari Macerası', description: 'Afrika nın vahşi yaşamını yakından deneyimleme fırsatı sunan safari turları.', type: 'B' },
  { id: 16, title: 'Güney Amerika Ritmi: Brezilya Karnavalı', description: 'Brezilya nın coşkulu karnaval atmosferi ve kültürel etkinlikleri.', type: 'B' },
  { id: 17, title: 'Orta Doğu nun Kadim Şehirleri', description: 'Ürdün, Mısır gibi Orta Doğu ülkelerinin tarihi ve arkeolojik zenginlikleri.', type: 'B' },
  { id: 18, title: 'Güneydoğu Asya Tapınakları', description: 'Kamboçya, Tayland gibi ülkelerdeki etkileyici tapınakların tarihi ve mimarisi.', type: 'B' },
  { id: 19, title: 'Kuzey Amerika Rüyası: Kanada Rocky Dağları', description: 'Kanada nın büyüleyici Rocky Dağları nın doğal güzellikleri ve aktiviteleri.', type: 'B' },
  { id: 20, title: 'Avustralya nın Mercan Resifleri', description: 'Avustralya nın ünlü Büyük Bariyer Resifi nin su altı dünyası ve ekosistemi.', type: 'B' },

  // Sağlık (10 adet)
  { id: 21, title: 'Bağışıklık Sistemini Güçlendirme', description: 'Bağışıklık sistemini doğal yollarla güçlendirmenin yolları ve beslenme önerileri.', type: 'C' },
  { id: 22, title: 'Düzenli Egzersizin Faydaları', description: 'Fiziksel ve zihinsel sağlık üzerindeki olumlu etkileriyle düzenli egzersizin önemi.', type: 'C' },
  { id: 23, title: 'Mental Sağlığı Koruma Yolları', description: 'Stres, kaygı ve depresyonla başa çıkma yöntemleri ve ruh sağlığını iyileştirme ipuçları.', type: 'C' },
  { id: 24, title: 'Çocuklarda Sağlıklı Beslenme', description: 'Çocukların büyüme ve gelişimi için önemli olan besinler ve sağlıklı yemek tarifleri.', type: 'C' },
  { id: 25, title: 'Yaşlılıkta Sağlıklı Yaşam', description: 'Yaşlı bireylerin aktif ve sağlıklı kalmaları için öneriler ve dikkat edilmesi gerekenler.', type: 'C' },
  { id: 26, title: 'Kronik Hastalıklarla Yaşamak', description: 'Diyabet, tansiyon gibi kronik hastalıklarla başa çıkma stratejileri ve yaşam kalitesini artırma yolları.', type: 'C' },
  { id: 27, title: 'İlk Yardım Bilgileri', description: 'Günlük hayatta karşılaşılabilecek acil durumlarda yapılması gereken temel ilk yardım uygulamaları.', type: 'C' },
  { id: 28, title: 'Doğru Nefes Teknikleri', description: 'Doğru nefes almanın физическое ve zihinsel sağlık üzerindeki olumlu etkileri ve nefes egzersizleri.', type: 'C' },
  { id: 29, title: 'Bitkisel Tedaviler ve Kullanımı', description: 'Bazı yaygın sağlık sorunları için kullanılan bitkisel tedavi yöntemleri ve dikkat edilmesi gerekenler.', type: 'C' },
  { id: 30, title: 'Sağlıklı Uyku Alışkanlıkları', description: 'Kaliteli bir uyku için yapılması gerekenler ve uyku düzenini iyileştirme yöntemleri.', type: 'C' },
];

@Injectable({ providedIn: 'root' })
export class FakeHttpService {

getItemsByType(type: string, count: number): Observable<CardItem[]> {
  const filtered = sampleData.filter(item => item.type === type);
  const shuffled = [...filtered].sort(() => 0.5 - Math.random());
  return of(shuffled.slice(0, count)).pipe(delay(300));
}

  getSingleItemByType(type: string): Observable<CardItem> {
    const filtered = sampleData.filter(item => item.type === type);
    const item = filtered[Math.floor(Math.random() * filtered.length)];
    return of({ ...item, id: Date.now() }).pipe(delay(300));
  }
}
