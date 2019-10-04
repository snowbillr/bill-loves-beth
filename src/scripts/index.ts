import '../../assets/styles/reset.scss';
import '../../assets/styles/bill-loves-beth.scss';

const timeline = [
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
    duration: 1000,
  }
];


let runningTime = 0;
timeline.forEach(entry => {
  entry.items.forEach(item => {
    const el = document.querySelector(item.selector);
    setTimeout(() => el.classList.add(item.addClass), runningTime);
  });
  runningTime += entry.duration;
});

