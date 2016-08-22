(function(){

  page('/', index, postRender)
  page('/:event', checkEvent, show, postRender)
  page('*', notFound)
  page({hashbang: true})


  function index(context, next){
    jamEvent.set('jam', jamLinks.get('mostRecentJam'));
    next();
  }

  function checkEvent(context, next){
    if(_.isEmpty(jams[context.params.event])){
      return notFound();
    }

    next();
  }

  function show(context, next){
    jamEvent.set('jam', jams[context.params.event]);
    next();
  }

  function postRender(){

  }

  function notFound(){

  }

})()