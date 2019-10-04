import '../../assets/styles/reset.scss';
import '../../assets/styles/bill-loves-beth.scss';

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

runTimeline(introTimeline);


function runTimeline(timeline) {
  let runningTime = 0;
  timeline.forEach(entry => {
    entry.items.forEach(item => {
      const el = document.querySelector(item.selector);
      setTimeout(() => el.classList.add(item.addClass), runningTime);
    });
    runningTime += entry.duration;
  });
}
