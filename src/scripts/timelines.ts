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
      duration: 900,
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
  ],
  heartMove: [
    {
      items: [
        {
          selector: '.heart-button',
          addClass: 'move'
        }
      ],
      duration: 1500
    }
  ]
}
