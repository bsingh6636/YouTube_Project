import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import MainContainer from './components/MainContainer'
import Head from './components/Head';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchPage from './components/WatchPage';
const appRouter=createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    },
  ]
}])
function App() {
  return (
    <Provider store={store}>
    <div className="">
     <h1 className='text-green-700 bg-black'>Brijesh back on React</h1>
     <Head/>
     <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  );
}

export default App;
