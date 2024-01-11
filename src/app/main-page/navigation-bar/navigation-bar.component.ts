import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature:string) {
    this.featureSelected.emit(feature);
  }
}
