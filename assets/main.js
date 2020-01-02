(function(window, Ractive, _, jammer, jamLinks, jamEvent){
  'use strict';

  // if ('scrollRestoration' in history) {
  //   // Back off, browser, I got this...
  //   history.scrollRestoration = 'manual';
  // }

  var intialContext = {params: {event: location.hash.replace('#!/', '')}};

  page('/', index, postRender);
  page('/:event', checkEvent, show, postRender);
  page('*', notFound, postRender);
  page({hashbang: true, dispatch: false});

  checkEvent(
    intialContext,
    _.partial(show, intialContext, postRender)
  );

  function index(context, next){
    // jamEvent.set('jam', jamLinks.get('mostRecentJam'));
    next();
  }

  function checkEvent(context, next){
    if(_.isEmpty(jams[context.params.event])){
      return notFound(context, postRender);
    }
    next();
  }

  function show(context, next){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    jamEvent.set('jam', jams[context.params.event]);
    next();
  }

  function notFound(context, next){
    index(context, next);
  }

  function postRender(){
  }

})(window, Ractive, _, jammer, jamLinks, jamEvent)