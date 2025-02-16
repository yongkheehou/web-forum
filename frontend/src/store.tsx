import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import userReducer from './features/user/UserSlice';
import notifReducer from './features/errors/NotifSlice';
import threadReducer from './features/forum/ThreadSlice';
import tagReducer from './features/forum/TagSlice';
import commentReducer from './features/forum/CommentsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    notif: notifReducer,
    thread: threadReducer,
    tag: tagReducer,
    comment: commentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
