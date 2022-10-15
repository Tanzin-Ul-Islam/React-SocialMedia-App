import './App.css'
import { Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import ContentPost from './Component/ContentPost/ContentPost'
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import AddPost from './Pages/AddPost/AddPost';
import UpdatePost from './Pages/UpdatePost/UpdatePost';
import PostDetails from './Pages/PostDetails/PostDetails';

import Favourites from './Pages/Favourites/Favourites';
function App() {
  return (
    <div className="App">
      <div className='home'>
        <Navbar />
        <div className='ComponentContainer'>
          <Switch>
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
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
