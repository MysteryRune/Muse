import { Component, EnvironmentInjector, ViewChild, inject } from '@angular/core';
import { IonTabs, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  @ViewChild(IonTabs) tabs: IonTabs;
  progress=42;

  constructor() {}
}
