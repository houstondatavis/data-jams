var october2016Event = {
  topic: 'Meetup about Meetup',
  meetupId: '233079777',
  githubRepo: 'data-jam-october-2016',
  formUrl: 'https://goo.gl/forms/QwWEDacqxlWK8Mxn2',
  month: 'October',
  year: '2016',
  description: "This data was [scraped](https://github.com/micahstubbs/modeling-worked-example) \
  from [Meetup's API](https://www.meetup.com/meetup_api/) api and contains: Meetup groups, \
  their members, their topics of interest, and the Meetups' events.",
  showcase: [{
    title: 'Meetup venues by frequency in 3D',
    author: 'Neeraj',
    description: "Here we use aframe's [a-boxes](https://aframe.io/docs/0.2.0/primitives/a-box.html), \
    which are kind of like SVG [rects](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect), \
    to map [Meetup](http://www.meetup.com/) venues in Houston by latitude and longitude. \
    The heights of the buildings are mapped to the frequency of events at that particular venue. \
    The result is a city skyline for Houston's meetup scene.",
    links: [{
      type: ['plot'],
      url: 'http://bl.ocks.org/neerajt/d47b224df790944ea9f7be9d1928f34d'
    }, {
      type: ['code'],
      url: 'http://bl.ocks.org/neerajt/d47b224df790944ea9f7be9d1928f34d'
    }]
  }]
};