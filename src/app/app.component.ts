import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  // recipeSelected = true;

  loadedFeature = 'recipe';

  onNavigate(feature: string){
    console.log(`Navigate to: ${feature}`);
    
    // this.recipeSelected = (feature === 'recipe') ? true : false;

    this.loadedFeature = feature;
  }
}
