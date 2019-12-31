var description = `We work in small teams to visualize a new data set in three hours. We announce the actual data set at the beginning of the event. All jams are tool agnostic, so you can choose to use what you're already comfortable with or try something new.\n\n\
The goal is to learn from each other by producing many visualizations on a common data set; we'll often identify interesting patterns, but more importantly we get to quickly compare design choices, statistical methods, tool choices, failures and successes. \n\n\
Approximate schedule:\n\n\
* **9 am** — coffee &amp; tacos\n\
  * Data set introduced\n\
  * Form teams or work on your own! Ready your laptops.\n\
* **9:30 am** — Explore &amp; visualize!\n\
* **10:30 am** — Progress sharing\n\
* **12:30 pm** — Quick talks to share the visualizations we created\n\n
`;

var shareInstructions = "\nThis is all about learning, so please share even if it's not polished :)";

var baseJam = {
  topic: '',
  meetupId: '',
  githubRepo: '',
  month: '',
  year: '',
  description: '',
  showcase: []
};

var jams = {
  'october-2015': octoberEvent,
  'february-2016': febEvent,
  'august-2016': augustEvent,
  'october-2016': october2016Event,
  'december-2016': december2016Event,
  'february-2017': feb2017Event,
  'june-2017': june2017Event,
  'july-2017': july2017Event,
  'august-2017': august2017Event,
  'october-2017': october2017Event,
  'january-2018': january2018Event,
  'february-2018': february2018Event,
  'june-2018': june2018Event,
  'february-2019': february2019Event,
  'july-2019': july2019Event,
  'november-2019': november2019Event,
  'december-2019': december2019Event,
  'january-2020': january2020Event,
};
