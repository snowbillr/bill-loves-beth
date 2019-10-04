export function runTimeline(timeline, onComplete = () => {}) {
  let runningTime = 0;
  timeline.forEach(entry => {
    entry.items.forEach(item => {
      const el = document.querySelector(item.selector);
      setTimeout(() => el.classList.add(item.addClass), runningTime);
    });
    runningTime += entry.duration;
  });

  setTimeout(onComplete, runningTime);
}
