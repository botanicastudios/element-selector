// Vue 3 Example
import { launchSelector } from '@botanicastudios/element-selector';

export default {
  data() {
    return {
      selectedElements: []
    };
  },
  methods: {
    async selectElement() {
      try {
        const element = await launchSelector();
        this.selectedElements = [element];
      } catch (error) {
        console.log('Selection cancelled');
      }
    },
    
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
  },
  template: `
    <div>
      <button @click="selectElement">Select Element</button>
      <button @click="selectMultiple">Select Multiple</button>
      
      <div v-if="selectedElements.length">
        <h3>Selected Elements:</h3>
        <pre>{{ JSON.stringify(selectedElements, null, 2) }}</pre>
      </div>
    </div>
  `
};