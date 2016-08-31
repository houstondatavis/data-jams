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
    title: '2016 Presidential Primary Winner By Party by County Map',
    author: 'Yulan & Justin',
    description: "Mapping of who won the primary for President of USA in each major party by county",
    links: [{
      type: ['plot'],
      url: 'https://github.com/JustinGOSSES/elections-data-jam/blob/master/Data%20Jam%20Exploration-And-Map.ipynb'
    }, {
      type: ['code'],
      url: 'https://github.com/JustinGOSSES/elections-data-jam'
    }]
  }, {
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
    title: 'Commute vs ideology',
    author: 'Evan O\'Neil',
    description: "I took a look at the relationship between voter's average daily commute times vs. the candidate they voted for, and based on a scale ranking provided by InsideGov ordered the candidates by ideology. \
    My hypothesis was that longer commutes would reflect more conservative ideologies. \n\n\
With the Democratic primary, the relationship is evident, though neither candidate is conservative on an objective scale. \
    The Republican Party does not show this trend, though some candidates shifted ideologically (or perception-wise) to the left and/or right as the race progressed. \n\n\
After thinking about it, I think longer commutes leading to more exposure to media is a significant factor, I would be very curious to compare candidate media time and ad exposure to this.",
    links: [{
      type: ['plot'],
      url: '../data-jam-august-2016/data_jam-commute_vs_ideology'
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
