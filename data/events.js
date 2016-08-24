var description = "we work in small teams to visualize a new dataset in three hours. we announce the actual dataset at the beginning of the event. all jams are tool agnostic, so you can choose to use what you're already comfortable with or try something new.\n\n\
the goal is to learn together and from each other by producing many visualizations on a common dataset. we get to quickly compare design choices, statical methods, tool choices, failures, successes, interesting patterns...really anything about the process! the control is the base dataset, and everything else is up to you.\n\n\
bonus points for the enterprising souls who make something you can view and share on the web. \n\n\
approximate schedule:\n\n\
* 9a coffee & bagels\n\
  * dataset announced\n\
  * form teams, ready your laptops\n\
* 930a visualize it\n\
* 1230p quick talks to share the visualizations we created";

var shareInstructions = "\nthis is all about learning, so please share even if it's not polished :)";

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
