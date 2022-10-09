import './App.css'
import { Switch, Route } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import LeftContainer from './Component/LeftContainer/LeftContainer';
import RightContainer from './Component/RightContainer/RightContainer';
import ContentPost from './Component/ContentPost/ContentPost'
import Post from './Component/post/Post'
function App() {
  return (
    <div className="App">
      <div className='home'>
        <Navbar />
        <div className='ComponentContainer'>
          <LeftContainer />
          <div className='mainPostContainer'>
            <Switch>
              <Route exact path="/">
                <Post />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/create-post">
                <ContentPost />
              </Route>
            </Switch>
          </div>
          <RightContainer />
        </div>
      </div>

    </div>
  );
}

export default App;
