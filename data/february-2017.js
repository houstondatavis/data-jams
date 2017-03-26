var feb2017Event = {
  topic: 'Houston Hobby Airport data',
  meetupId: '237127703',
  githubRepo: 'data-jam-february-2017',
  formUrl: 'https://goo.gl/forms/csXnKYIVaJFDdYv93',
  month: 'February',
  year: '2017',
  description: "For this month's data jam, we will be working with data from Monday at the Houston Hobby airport. This data is sourced from FlightAware's API.",
  showcase: [{
    title: 'Animated plot',
    author: 'Yulan Lin and Justin Gosses',
    description: 'It\'s a simple microservice-backed d3 visualization',
    links: [{
      type: ['code'],
      url: 'https://github.com/y3l2n/data-jam-february-2017'
    }]
  }, {
    title: 'a-frame flight paths',
    author: 'Neeraj and Kumar',
    description: 'Originally, we were trying to reproduce this visualization: http://i.imgur.com/HL4jqNm.gif.\n\nWe didn\'t quite get there, but our result was pretty cool nonetheless. We scaled the altitude to the lat and lon values, then plotted each tracked point on the flight\'s path as cubes in 3d space.',
    links: [{
      type: ['plot'],
      url: 'https://bl.ocks.org/neerajt/d9a3ff4bb57e405697ec49fd47e9177d'
    }, {
      type: ['code'],
      url: 'http://blockbuilder.org/neerajt/d9a3ff4bb57e405697ec49fd47e9177d'
    }]
  }, {
    title: 'Description decision trees',
    author: 'Tariq',
    links: [{
      type: ['plot', 'code'],
      url: 'https://github.com/tra38/data-jam-february-2017/tree/master/decisiontree'
    }]
  }, {
    title: 'Tracks and routes in 3d',
    description: "tracks and routes of flights in three.js, improperly scaled, but kinda cool-looking.",
    links: [{
      type: ['plot'],
      url: 'http://pandafulmanda.github.io/data-jam-february-2017/'
    }, {
      type: ['code'],
      url: 'https://github.com/pandafulmanda/data-jam-february-2017/tree/gh-pages'
    }]
  }]
};
