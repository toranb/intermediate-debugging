function init() {
  var createStore = (reducer) => {
    var pointer = 0;
    var state = [];
    var listeners = [];
    var firstState = reducer();
    state.push(firstState);
    var store = {
      getState() {
        return state[pointer];
      },
      dispatch(action) {
        var nextState = reducer(state[pointer], action);
        state.push(nextState);
        pointer++;
        listeners.forEach((callback) => {
          callback();
        });
      },
      subscribe(callback) {
        listeners.push(callback);
      }
    };
    return store;
  }

  var reducer = (state, action) => {
    if (action && action.type === 'ADD') {
      if (state.number > 4) {
        try {
          var number = state.number;
          var added = foobar + 1;
          return Object.assign({}, state, {number: added});
        } catch (e) {
        }
      } else {
        var number = state.number;
        var added = number + 1;
        return Object.assign({}, state, {number: added});
      }
    }
    return state || {id: 1, number: 1};
  }

  var store = createStore(reducer);

  store.subscribe(() => {
    document.querySelector('.number').innerHTML = store.getState()['number'];
  });

  document.querySelector('.start').onclick = function() {
    store.dispatch({type: 'ADD'});
  }
}
