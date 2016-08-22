var description = "we work in small teams to visualize a new dataset in three hours. we announce the actual dataset at the beginning of the event. this jam is tool agnostic, so you can choose to use what you're already comfortable with or try something new, it's up to you.\n\
the goal is to learn together while producing many visualizations on a common dataset. this enables us to quickly compare design choices and learn from each other. bonus points for the enterprising souls who make something you can view and share on the web. \n\n\
approximate schedule:\n\n\
* 9a coffee & bagels\n\
  * dataset announced\n\
  * form teams, ready your laptops\n\
* 930a visualize it\n\
* 1230p quick talks to share the visualizations we created";

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
  'february-2016': febEvent
};
