var description = "We work in small teams to visualize a new data set in three hours. We announce the actual data set at the beginning of the event. All jams are tool agnostic, so you can choose to use what you're already comfortable with or try something new.\n\n\
The goal is to learn from each other by producing many visualizations on a common data set; we'll often identify interesting patterns, but more importantly we get to quickly compare design choices, statistical methods, tool choices, failures and successes. \n\n\
Approximate schedule:\n\n\
* 9a coffee & bagels\n\
  * Data set announced\n\
  * Form teams, ready your laptops\n\
* 930a Visualize it\n\
* 1230p Quick talks to share the visualizations we created";

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
  'august-2016': augustEvent
};
