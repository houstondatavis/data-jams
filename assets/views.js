(function(window, Jammer, Ractive, _){
  'use strict';

  var jammer = new Jammer();

  var noTeardown = {teardown: function(){}};

  var Mark = Ractive.extend({
    template: '#mark',
    computed: {
      contentHTML: function(){
        return marked(this.get('markdown') || '');
      }
    },
    decorators: {
      linkExternal: function(output){
        // // needs to defer to only try to link after result html has been and mounted.
        // _.defer(function(){
        //   console.info(output.innerHTML);
        //   jammer.linkExternal(output)
        // });
        return noTeardown;
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
        return noTeardown;
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
        return noTeardown;
      }
    }
  });

  var jamEvent = new Ractive({
    el: 'event',
    template: '#jam-event',
    components: {
      showcaseItem: ShowcaseItem,
      mark: Mark
    },
    data: {
      shareInstructions: shareInstructions,
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
        // quick thing for now.
        if(window.innerWidth < 992){
          listGroup.style.maxHeight = 'reset';
        } else {
          listGroup.style.maxHeight = window.innerHeight - 200 + 'px';
        }
        return noTeardown;
      }
    }
  });

  var about = new Ractive({
    el: 'about-data-jam',
    template: '#about',
    components: {
      mark: Mark
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
  window.jammer = jammer;

})(window, Jammer, Ractive, _)