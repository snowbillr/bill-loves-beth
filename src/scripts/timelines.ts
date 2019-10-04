export const timelines = {
  intro: [
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
  ]
}
