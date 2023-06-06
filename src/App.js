


import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import WelcomeScreen from './screens/WelcomeScreen'
import Welcome2 from './screens/Welcome2'
import Projects from './screens/Projects'
import Detail from './screens/Detail'
import Contact from './screens/Contact'
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomeScreen />,
      component:{WelcomeScreen}
      

    },
   
    {
      path: "/about",
      element: <Welcome2 />,
      component:{Welcome2}
      

    },
    {
      path: "/work",
      element: <Projects />,
      component:{Projects}
      

    },
    {
      path: "/detail",
      element: <Detail />,
      component:{Detail}
      

    },
  
      
        {
          path: "/contact",
          element: <Contact  />,
          component:{Contact}
          
            }        
   
  ]);
  


function App() {
  
  return <RouterProvider router={router} />
}

export default App;

