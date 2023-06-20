// import { configureStore } from '@reduxjs/toolkit';
// import { filterReducer } from './filterSlice.js';
// import { contactsReducer } from './contactsSlice';
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistReducer,
//   persistStore,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedContacts = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//   reducer: {
//     filter: filterReducer,
//     contacts: persistedContacts,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    contacts: persistedContactsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);
