import { Directive, ElementRef, OnInit, HostListener, HostBinding, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropDownDirective { //implements OnInit {

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggle() {
        this.isOpen = !this.isOpen;
    }

    /*
    constructor(private elRef: ElementRef, private renderer: Renderer2){

    }

    ngOnInit() {
        // this.renderer.setStyle(this.etRef.nativeElement, 'background-color', 'blue');
    }
    */
    
}