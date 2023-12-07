import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import tasksReducer from "./features/tasks/slice";

const rootReducer = combineReducers({ tasks: tasksReducer });

export const store = configureStore({ reducer: rootReducer });

export type StoreType = ReturnType<typeof store.getState>;
export type StoreDispch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<StoreDispch>();
