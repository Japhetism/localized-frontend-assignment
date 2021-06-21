import React from 'react';
import LoginScreen from './screens/authentication/login';
import NewsFeedsScreen from './screens/home/news-feeds';

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null
};

const loginReducer = (state, action) => {
  console.log("login user action ", action);
  switch(action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.data.user));
      localStorage.setItem("token", JSON.stringify(action.payload.token));
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = React.useReducer(loginReducer, initialState);
  
  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || null);
    const token = JSON.parse(localStorage.getItem("token") || null);

    if(user && token) {
      dispatch({
        type: "LOGIN",
        payload: {
          data: {
            user: user
          },
          token
        }
      })
    }
  }, [])

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {!state.isAuthenticated ? <LoginScreen /> : <NewsFeedsScreen />}
    </AuthContext.Provider>
  )
}

export default App;




// import * as React from 'react';
// import { useAuth } from './context/auth';

// const LoginScreen = React.lazy(() => import('./screens/authentication/login'));
// const NewsFeedsScreen = React.lazy(() => import('./screens/home/news-feeds'));

// const App = () => {
//   const user = useAuth();
//   return user ? <LoginScreen /> : <NewsFeedsScreen />
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
