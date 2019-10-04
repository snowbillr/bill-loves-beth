import '../../assets/styles/reset.scss';
import '../../assets/styles/bill-loves-beth.scss';

import { quotes } from './quotes';
import { timelines } from './timelines';

import { QuotePicker } from './quote-picker';
import { runTimeline } from './run-timeline';

const quotePicker = new QuotePicker();

runTimeline(timelines.intro);

document.querySelector('.heart-button').addEventListener('click', () => {
  runTimeline(timelines.heartMove, revealQuote);
}, { once: true });

function replaceQuote() {
  const quoteContainerEl = document.querySelector('.quote-container');

  const wordEls = Array.from(quoteContainerEl.childNodes);
  let timeline = wordEls.map((wordEl, i) => {
    return {
      items: [
        {
          selector: `.quote-word:nth-child(${i + 1})`,
          addClass: 'hide',
        }
      ],
      duration: 150
    }
  });

  runTimeline(timeline, () => {
    wordEls.forEach(wordEl => quoteContainerEl.removeChild(wordEl));
    revealQuote();
  });
}

function revealQuote() {
  const quoteContainerEl = document.querySelector('.quote-container');

  // const quote = quotes[0];
  const quote = quotePicker.pickQuote();

  const words = quote.split(' ');
  const wordEls = words.map(word => {
    const el = document.createElement('span');
    el.classList.add('quote-word');

    el.textContent = word;

    return el;
  });

  let timeline = wordEls.map((wordEl, i) => {
    return {
      items: [
        {
          selector: `.quote-word:nth-child(${i + 1})`,
          addClass: 'reveal',
        }
      ],
      duration: 150
    }
  });
  timeline = [ { items: [], duration: 300 }, ...timeline];

  quoteContainerEl.append(...wordEls);
  runTimeline(timeline);

  document.querySelector('.heart-button').addEventListener('click', replaceQuote, { once: true });
}
