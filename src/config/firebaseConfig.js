import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAGT7C3o6b-VV9VJ4pxWlp_aYsLAEmmV2Q",

  authDomain: "marvel-bb542.firebaseapp.com",

  projectId: "marvel-bb542",

  storageBucket: "marvel-bb542.appspot.com",

  messagingSenderId: "438702269875",

  appId: "1:438702269875:web:86d54b07d493ca6484d7c6",

  measurementId: "G-MPCDCETK35",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
