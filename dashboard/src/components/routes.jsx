import { App } from "../App";
import { NotAuthorized } from "./error.jsx";
import { Dashboard } from "./dashboard.jsx";
import { Post } from "./post.jsx";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  { path: "/401", element: <NotAuthorized /> },
  //   {
  //     path: "dashboard",
  //     element: <Dashboard />,
  //   },
  //   { path: "edit/:postid", element: <Post /> },
];

export { routes };
