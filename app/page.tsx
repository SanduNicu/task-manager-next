"use client";

import { store } from "@/redux/store";
import styles from "./page.module.scss";
import Tasks from "./tasks";
import { useEffect } from "react";
import { hydrate } from "@/redux/features/tasks/slice";

store.subscribe(() => {
  localStorage.setItem("tasks", JSON.stringify(store.getState().tasks));
});

const getTasksFromStorage = () => {
  return JSON.parse(localStorage.getItem("tasks") || "[]");
};

function Home() {
  useEffect(() => {
    const storageTasks = getTasksFromStorage();

    if (storageTasks.length) {
      store.dispatch(hydrate(storageTasks));
    }
  }, []);

  return (
    <main className={styles.main}>
      <Tasks />
    </main>
  );
}

export default Home;
