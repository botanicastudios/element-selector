// Angular Example
import { Component } from '@angular/core';
import { launchSelector } from '@botanicastudios/element-selector';

@Component({
  selector: 'app-element-picker',
  template: `
    <div>
      <button (click)="selectElement()">Select Element</button>
      <button (click)="selectMultiple()">Select Multiple</button>
      
      <div *ngIf="selectedElements.length > 0">
        <h3>Selected Elements:</h3>
        <pre>{{ selectedElements | json }}</pre>
      </div>
    </div>
  `
})
export class ElementPickerComponent {
  selectedElements: any[] = [];

  async selectElement() {
    try {
      const element = await launchSelector();
      this.selectedElements = [element];
    } catch (error) {
      console.log('Selection cancelled');
    }
  }

  async selectMultiple() {
    try {
      const elements = await launchSelector({
        multiSelect: true,
        friendlySelectors: true
      });
      this.selectedElements = elements;
    } catch (error) {
      console.log('Selection cancelled');
    }
  }
}