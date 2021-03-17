import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    collapsed = true;

    // @Output() featureSelected = new EventEmitter<string>();

    // /*
    // logToConsole(event: MouseEvent){
    //     console.log('Here is the event', event);
    // }
    // */
    
    // onSelect(feature: string){
    //     this.featureSelected.emit(feature);
    // }
}