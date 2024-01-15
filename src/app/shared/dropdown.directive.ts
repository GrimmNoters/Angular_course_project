import { Directive, HostBinding, HostListener, OnInit, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;



  ngOnInit(): void {

  }

  // constructor() { }

  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }
  constructor(private elRef: ElementRef) { }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }


}
