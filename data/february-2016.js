var febEvent = {
  topic: 'Tweets with mental health terms',
  meetupId: '228076985',
  githubRepo: 'data-jam-february-2016',
  month: 'February',
  year: '2016',
  description: "The data set contains a collection of Tweets containing any of the following terms -- `alcoholic`, `depressed`, `depression`, `suicidal`, and `suicide` -- tweeted approximately from October 2014 to January 2015.\n\
Tweets with target terms were collected from Twitter's [real-time streaming API](https://dev.twitter.com/streaming/overview) and then pre-processed by:\n\n\
1. [Converting collected JSON to tab-delimited columns](https://github.com/houstondatavis/data-jam-february-2016/blob/master/scripts/0-shapeToCsv.js) of each Tweet's related term, date, Tweet body, latitude, longitude, and the Tweeter's follower count\n\
1. [Reading into R to add quotes and escape special characters](https://github.com/houstondatavis/data-jam-february-2016/blob/master/scripts/1-adds-quotes-escapes.R) in values to preserve as much as the data as possible for reading into Python\n\
1. Running the Tweet bodies [through a sentiment analysis](https://github.com/houstondatavis/data-jam-february-2016/blob/master/scripts/2-Classifier.ipynb) trained by a separate set of data. The result is added as a \"Neg\" score of `0.0` or `1.0` for \"not negative\" and \"negative\" respectively.  With this additional column, the data was outputted in both `tsv` and `json` for furthering processing and analysis.",
  showcase: [{
    title: 'Depressing Pronouns',
    author: 'Greg',
    description: "What type of pronouns used with the different terms?",
    links:[{
      type: ['code', 'plot'],
      url: 'https://github.com/houstondatavis/data-jam-february-2016/blob/master/results/Depressing%20pronouns.ipynb'
    }]
  }, {
    title: 'Tweets by term and location',
    author: 'Karl',
    description: "Tweets by term and location",
    links: [{
      type: ['code', 'plot'],
      url: 'https://github.com/houstondatavis/data-jam-february-2016/blob/master/results/alcoholic1.ipynb'
    }]
  }, {
    title: 'Tweets and followers',
    author: 'Inder',
    description: "Is there a correlation between followers and Negativity?",
    links: [{
      type: ['plot'],
      url: 'https://docs.google.com/presentation/d/1qHHLvpreeF1kOI1t2IALMRC-sbyFBCklQOKsZB2H_9U/pub?start=false&loop=false&delayms=3000'
    }]
  }, {
    title: '"Suicide" Pi',
    author: 'Wanjun',
    description: "Displays Tweets on the Raspberry Pi SenseHat LED Matrix",
    links: [{
      type: ['code'],
      url: 'https://github.com/houstondatavis/data-jam-february-2016/blob/master/results/suicide-pi.py'
    }]
  }, {
    title: 'Map of Tweets over time',
    description: "Are there patterns in number of tweets over time?",
    links: [{
      type: ['plot'],
      url: 'http://pandafulmanda.github.io/data-jam-february-2016/'
    }, {
      type: ['code'],
      url: 'https://github.com/pandafulmanda/data-jam-february-2016/tree/gh-pages'
    }]
  }]
};