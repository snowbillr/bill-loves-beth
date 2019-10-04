import '../../assets/styles/reset.scss';
import '../../assets/styles/bill-loves-beth.scss';

import { quotes } from './quotes';
import { timelines } from './timelines';

import { runTimeline } from './run-timeline';

const firstQuoteTimeline = [
  {
    items: [
      {
        selector: '.heart-button',
        addClass: 'move'
      }
    ],
    duration: 1500
 }
];

runTimeline(timelines.intro);

document.querySelector('.heart-button').addEventListener('click', () => {
  runTimeline(firstQuoteTimeline, revealQuote);
}, { once: true });

function revealQuote() {
  const quoteContainerEl = document.querySelector('.quote-container');

  const quote = quotes[0];

  const words = quote.split(' ');
  const wordEls = words.map(word => {
    const el = document.createElement('span');
    el.classList.add('quote-word');

    el.textContent = word;

    return el;
  });

  quoteContainerEl.append(...wordEls);
}
