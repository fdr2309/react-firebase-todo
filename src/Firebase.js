// Connected to rameem2019@gmail.com
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAQ4PjBBXRHX-T4YtupcqRz8W7My3NYHg4",
  authDomain: "rol-todo.firebaseapp.com",
  databaseURL: "https://rol-todo-default-rtdb.firebaseio.com",
  projectId: "rol-todo",
  storageBucket: "rol-todo.appspot.com",
  messagingSenderId: "1078474973769",
  appId: "1:1078474973769:web:06898789dd4a9f326a9598",
};

// Initialize Firebase
export const config = initializeApp(firebaseConfig);
export const database = getDatabase();
