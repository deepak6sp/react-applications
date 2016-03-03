var Dispatcher = require('flux').Dispatcher;
var MyDispatcher = new Dispatcher();

MyDispatcher.handleViewAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

export default MyDispatcher
