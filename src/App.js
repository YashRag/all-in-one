import Body from "./component/Body";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./component/Home";
import ExpenseTracker from "./expenseTracker/ExpenseTracker";
import Main from "./pagination/Main";
import Main2 from "./pagination2/Main2";

const appRoute = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/et",
        element:<ExpenseTracker/>
      },
      {
        path:"/gallery",
        element:<Main/>
      },
      {
        path:"/gallery2",
        element:<Main2/>
      }
    ]
  }
])
function App() {
  return (
    <RouterProvider router={appRoute} />
  );
}

export default App;
