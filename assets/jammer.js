var Jammer = function() {
  this.codeLinkers = ['PRE', 'CODE', 'A'];

  this.PLOTTER_HEIGHT = 50;
  this.BARS_WIDTH = 20;
  this.BARS_SPACING = 4;

  this.rectDOM = document.createElement('rect');
  this.rectDOM.setAttribute('fill', 'rgba(0, 0, 0, 0.02)');

  return this;
}

Jammer.prototype.linkShowcase = function(showcase){
  var codeLinkers = this.codeLinkers;

  if(typeof showcase.dataset.plot == 'string'){
    showcase.addEventListener('click', function(clickEvent){
      if(codeLinkers.indexOf(clickEvent.target.nodeName) == -1){
        clickEvent.preventDefault();
        window.open(showcase.dataset.plot, '_new');
      }
    });
  }
}

Jammer.prototype.linkExternal = function(element){
  var links = element.getElementsByTagName('a');
  Array.prototype.forEach.call(links, function(link){
    if(link.host.length > 0 && link.host !== location.host){
      if(link.target.length === 0){
        link.target = '_blank';
      }
    }
  });

  return links[0];
}

Jammer.prototype.makeRandomBars = function(plotter){
  var PLOTTER_HEIGHT = this.PLOTTER_HEIGHT;
  var BARS_WIDTH = this.BARS_WIDTH;
  var BARS_SPACING = this.BARS_SPACING;
  var rectDOM = this.rectDOM;

  var grapher = plotter.children[0];
  var numberOfBars = Math.floor(plotter.clientWidth / (BARS_WIDTH + BARS_SPACING));

  var counter = 0;
  var barsHTML = '';

  // plotter.setAttribute('viewBox',((plotter.clientWidth/2) - (BARS_WIDTH + BARS_SPACING)) + ' 0 50 50');

  while(counter < numberOfBars){
    var bar = rectDOM.cloneNode();

    var rectHeight = Math.random() * PLOTTER_HEIGHT;

    bar.setAttribute('width', BARS_WIDTH);
    bar.setAttribute('height', rectHeight);
    bar.setAttribute('x', counter * (BARS_WIDTH + BARS_SPACING));
    bar.setAttribute('y', PLOTTER_HEIGHT - rectHeight);

    barsHTML += bar.outerHTML;
    counter ++;
  }

  grapher.innerHTML = barsHTML;
};
