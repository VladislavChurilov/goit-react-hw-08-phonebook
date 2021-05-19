import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import reducer from './reducer';

// =========== without localStorage====================
const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: { contacts: reducer },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});
export default store;

// =========== with localStorage====================
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };
// const rootReducer = combineReducers({ contacts: reducer });
// const persistedReducer = persistReducer(persistConfig, rootReducer);
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];

// const store = configureStore({
//   reducer: { contacts: persistReducer(persistConfig, reducer) },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });
// const persistor = persistStore(store);
// export default { store, persistor };
