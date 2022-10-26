import './App.css'
import { Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import AddPost from './Pages/AddPost/AddPost';
import UpdatePost from './Pages/UpdatePost/UpdatePost';
import PostDetails from './Pages/PostDetails/PostDetails';
import Favourites from './Pages/Favourites/Favourites';
import Friends from './Pages/Friends/Friends';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <div className='home'>
        <Navbar />
        <div className='ComponentContainer'>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/add-post">
              <AddPost />
            </Route>
            <Route exact path="/update-post/:id">
              <UpdatePost />
            </Route>
            <Route exact path="/profile/:id">
              <Profile />
            </Route>
            <Route exact path="/favourite-post">
              <Favourites />
            </Route>
            <Route exact path="/post/:id">
              <PostDetails />
            </Route>
            <Route exact path="/friends">
              <Friends />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
