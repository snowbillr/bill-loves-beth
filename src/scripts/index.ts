import '../../assets/styles/reset.scss';
import '../../assets/styles/bill-loves-beth.scss';

import { runTimeline } from './run-timeline';

const introTimeline = [
  {
    items: [{
      selector: '.logo-container',
      addClass: 'reveal',
    }],
    duration: 3000,
  },
  {
    items: [
      {
        selector: '.logo-container',
        addClass: 'move',
      }
    ],
    duration: 1500,
  },
  {
    items: [
      {
        selector: '.heart-button',
        addClass: 'reveal',
      }
    ],
    duration: 1000
  }
];

const firstQuoteTimeline = [
  {
    items: [
      {
        selector: '.heart-button',
        addClass: 'move'
      }
    ],
    duration: 1000
  }
];

runTimeline(introTimeline);

document.querySelector('.heart-button').addEventListener('click', () => {
  runTimeline(firstQuoteTimeline);
}, { once: true });
