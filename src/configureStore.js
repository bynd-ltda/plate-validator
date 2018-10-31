import Immutable from 'immutable';
import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga'
import sagaMonitor from './lib/sagaMonitor'
import reducers from './reducers';
import root from './sagas';
const sagaMiddleware = createSagaMiddleware(sagaMonitor);

const engine = createEngine('@plateValidator:state');
const storageMiddleware = storage.createMiddleware(engine);
const middlewares = [ storageMiddleware, sagaMiddleware];

let enhancer;

if (__DEV__) {
  const installDevTools = require('immutable-devtools');
  installDevTools(Immutable);
  
  enhancer = compose(
    applyMiddleware(...middlewares),
      global.reduxNativeDevTools ?
        global.reduxNativeDevTools() :
        noop => noop
  );
} else {
  enhancer = compose(
    applyMiddleware(...middlewares),
  );
}

export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, enhancer);
  const load = storage.createLoader(engine);
  load(store)
  if (module.hot) {
    module.hot.accept(() => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers);
    });
  }
  sagaMiddleware.run(root)
  return store;
}
