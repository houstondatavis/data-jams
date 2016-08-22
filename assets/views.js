(function(window, Jammer, Ractive, _){
  'use strict';

  var jammer = new Jammer();

  var Description = Ractive.extend({
    template: '#description',
    computed: {
      descriptionHTML: function(){
        return marked(this.get('description') || '');
      }
    },
    decorators: {
      linkExternal: function(output){
        // needs to defer to only try to link after result html has been and mounted.
        _.defer(_.partial(jammer.linkExternal, output));

        return {
          teardown: function(){}
        }
      }
    }
  });

  var ShowcaseLink = Ractive.extend({
    template: '#link',
    computed: {
      isPlot: function(){
        return _.indexOf(this.get('type'), 'plot') >= 0;
      },
      isCode: function(){
        return _.indexOf(
          this.get('type'), 'code') >= 0;
      },
      label: function(){
        var types = this.get('type');
        if(!_.isArray(types)){
          return;
        }
        return types.join(' & ');
      },
      labelWidth: function(){
        var types = this.get('type');
        if(!_.isArray(types)){
          return;
        }
        return types.length * 65 + 25;
      }
    },
    decorators: {
      randoBar: function(plotter){
        jammer.makeRandomBars(plotter);
        return {
          teardown: function(){}
        }
      }
    }
  });

  var ShowcaseItem = Ractive.extend({
    template: '#item',
    components: {
      showcaseLink: ShowcaseLink
    },
    computed: {
      mainLink: function(){
        return this.get('links.0.url');
      }
    },
    decorators: {
      linkShowcase: function(showcase){
        jammer.linkShowcase(showcase);
        return {
          teardown: function(){}
        }
      }
    }
  });

  var jamEvent = new Ractive({
    el: 'event',
    template: '#jam-event',
    components: {
      showcaseItem: ShowcaseItem,
      description: Description
    },
    data: {
      jam: baseJam,
      getMainLink: function(itemIndex){
        return this.get('jam.showcase.' + itemIndex + '.links.0.url');
      }
    },
    computed: {
      link: function(){
        return this.get('jam.month').toLowerCase() + '-' + this.get('jam.year');
      }
    },
    decorators: {
      scrolly: function(listGroup){
        listGroup.style.height = window.innerHeight - 200 + 'px';
        return {
          teardown: function(){}
        }
      }
    }
  });

  var about = new Ractive({
    el: 'about-data-jam',
    template: '#about',
    components: {
      description: Description
    },
    data: {
      description: description
    }
  });

  var JamLink = Ractive.extend({
    template: '#jam-link',
    computed: {
      link: function(){
        return this.get('month').toLowerCase() + '-' + this.get('year');
      }
    }
  });

  var jamLinks = new Ractive({
    el: 'jam-links',
    template: '#jams',
    components: {
      jamLink: JamLink
    },
    data: {
      jams: jams
    },
    computed: {
      orderedJams: function(){
        return _.sortBy(this.get('jams'), function(jam){
          return moment( jam.year+ ' ' + jam.month, 'YYYY MMM');
        });
      },
      mostRecentJam: function(){
        var orderedJams = this.get('orderedJams');
        return _.last(orderedJams);
      }
    }
  });

  jamEvent.observe('link', function(newActive, oldActive){
    if (!_.isEmpty(jamLinks.get('jams.' + newActive))){
      jamLinks.set('jams.' + newActive + '.active', true);
    }
    if (!_.isEmpty(jamLinks.get('jams.' + oldActive))){
      jamLinks.set('jams.' + oldActive + '.active', false);
    }
  });

  function handleMarkdown(markdown){
    return marked(markdown || '');
  }

  window.jamEvent = jamEvent;
  window.jamLinks = jamLinks;

})(window, Jammer, Ractive, _)