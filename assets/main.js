(function(window, Jammer, Ractive, _, jammer, jamLinks, jamEvent){
  'use strict';

  var intialContext = {params: {event: location.hash.replace('#!/', '')}};

  page('/', index, postRender);
  page('/:event', checkEvent, show, postRender);
  page('*', notFound, postRender);
  page({hashbang: true, dispatch: false});
  page.base('/data-jams');


  checkEvent(
    intialContext,
    _.partial(show, intialContext, postRender)
  );

  function index(context, next){
    jamEvent.set('jam', jamLinks.get('mostRecentJam'));
    next();
  }

  function checkEvent(context, next){
    if(_.isEmpty(jams[context.params.event])){
      return notFound(context, postRender);
    }
    next();
  }

  function show(context, next){
    jamEvent.set('jam', jams[context.params.event]);
    next();
  }

  function notFound(context, next){
    index(context, next);
  }

  function postRender(){
    jammer.linkExternal(document);
  }

})(window, Jammer, Ractive, _, jammer, jamLinks, jamEvent)