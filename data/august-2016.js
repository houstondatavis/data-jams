var augustEvent = {
  topic: 'US Primary election results',
  meetupId: '232548862',
  githubRepo: 'data-jam-august-2016',
  formUrl: 'https://goo.gl/forms/GNawy82uRoQt5zbv1',
  month: 'August',
  year: '2016',
  description: "The data includes US primary election results from 2016 and demographics by county.\n\
  Vote data included variables like `Vote_count` per candidate. County data included age and racial \
  breakdown, educational attainment, employment etc., as well as shapefiles for the counties.\n\
  Data were sourced from a [Kaggle competition](https://www.kaggle.com/benhamner/2016-us-election)\n\
  and were enriched with primary schedule, and primary type (open, closed, etc.) during the data jam.",
  showcase: [{
    title: 'Visualizing partial response and feature interaction in a random forest',
    author: 'Victor',
    description: "An exploration using [forest floor](http://forestfloor.dk/).",
    links: [{
      type: ['plot', 'code'],
      url: 'https://9b23481fd1f80c25616a4f86779c3e3e940e52ed-www.googledrive.com/host/0B623eF7woV3pSVFUN3gzMTQtVmc'
    }, {
      type: ['code'],
      url: 'https://github.com/houstondatavis/data-jam-august-2016/blob/master/Primary_results_analysis.Rmd'
    }]
  }, {
    title: 'Who got the most votes in Texas?',
    author: 'Michael',
    description: "",
    links: [{
      type: ['plot', 'code'],
      url: 'https://houstondatavis.github.io/data-jam-august-2016/showcase-01'
    }, {
      type: ['code'],
      url: 'https://github.com/houstondatavis/data-jam-august-2016/blob/master/showcase-01.Rmd'
    }]
  }]
};
