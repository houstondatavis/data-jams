(function(){

  page('/', index);
  page('/:event', checkEvent, show);
  page('*', notFound);
  page({hashbang: true, dispatch: false});
  page.base('/data-jams');

  index();

  function index(){
    jamEvent.set('jam', jamLinks.get('mostRecentJam'));
  }

  function checkEvent(context, next){
    if(_.isEmpty(jams[context.params.event])){
      return notFound();
    }

    next();
  }

  function show(context){
    jamEvent.set('jam', jams[context.params.event]);
  }

  function notFound(){
    return index();
  }

})()