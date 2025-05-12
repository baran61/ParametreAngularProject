import { Component, OnInit } from '@angular/core';
import { TreeDataService } from '../../shared/service/data-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question5.component.html',
  styleUrls: ['../../shared/styles/card-styles.scss'],
})
export class Question5Component implements OnInit {
  trees: any[] = [];
  selectedFID: number | null = null;

  // Tablo
  tableData: any[] = [];
  limitedTableData: any[] = []; //Harita üzerinde basılan değerler
  tableColumns: string[] = ['Cmn_Name', 'Sci_Name', 'Condition', 'DBH1'];
  selectedObjectId: number | null = null;
  errorMessage: string | null = null;

  constructor(private treeService: TreeDataService) {}

  ngOnInit(): void {
    this.treeService.getTrees().subscribe({
      next: (res) => {
        this.trees = res;
        this.tableData = [];
        this.limitedTableData = Array().fill(null).map(() => ({ // Başlangıçta gözükecek veriler
          attributes: {
            OBJECTID: null,
            Cmn_Name: null,
            Sci_Name: null,
            Condition: null,
            DBH1: null
          }
        }));
      },
      error: (err) => {
        this.errorMessage = 'Veri alınamadı.';
        console.error(err);
      },
    });

    this.loadMap();
  }

  loadMap(): void {
  (window as any).require(
    ['esri/Map', 'esri/views/MapView', 'esri/layers/FeatureLayer'],
    (Map: any, MapView: any, FeatureLayer: any) => {
      const map = new Map({ basemap: 'streets-navigation-vector' });

      const view = new MapView({
        container: 'viewDiv',
        map: map,
        center: [-82.441, 35.61],
        zoom: 14,
      });

      const featureLayer = new FeatureLayer({
        url: 'https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0',
        outFields: ['*'],
      });

      map.add(featureLayer);
      view.popupEnabled = true;

      view.on('click', (event: any) => {
        view.hitTest(event).then((response: any) => {
          const result = response.results.find(
            (r: any) => r.graphic.layer === featureLayer
          );
          if (result?.graphic?.attributes) {
            const attr = result.graphic.attributes;
            this.selectedObjectId = attr.OBJECTID;

            // Tabloya yeni veriyi en üste ekleme
            const newRow = {
              attributes: {
                OBJECTID: attr.OBJECTID,
                Cmn_Name: attr.Cmn_Name,
                Sci_Name: attr.Sci_Name,
                Condition: attr.Condition,
                DBH1: attr.DBH1,
              },
            };
            this.limitedTableData.unshift(newRow); // Dizinin başına ekle
            this.limitedTableData = [...this.limitedTableData]; // Angular'ın değişikliği algılaması için

            view.openPopup({
              title: attr.Cmn_Name ?? 'Ağaç Bilgisi',
              content: `
                <div>
                  <strong>Bilimsel Ad:</strong> ${attr.Sci_Name ?? 'Yok'}<br>
                  <strong>Durum:</strong> ${attr.Condition ?? 'Yok'}<br>
                  <strong>Yükseklik:</strong> ${attr.Height ?? 'Yok'}<br>
                  <strong>DBH1:</strong> ${attr.DBH1 ?? 'Yok'}<br>
                  <strong>Leaf Area:</strong> ${attr.Leaf_Area ?? 'Yok'}
                </div>
              `,
              location: result.mapPoint,
              featureMenuOpen: true,
            });
          }
        });
      });
    }
  );
}
}
