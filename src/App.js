import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
    <Routes>
        <Route path="/" element={<p><div class="multiplayer-box"><a href="/multiplayer">
            <h1 style={{color:"pink"}}>MUTIPLAYER</h1>
            <h2 style={{color:"pink"}}>Play online with your friends</h2></a>
        </div>
        <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><div class="solo" href="#">
            <h1 style={{color:"darkblue"}}>SOLO</h1>
            <h2 style={{color:"darkblue"}}>Challenge yourself and top the leaderboard</h2>
        </div></a>
       <a href="https://www.youtube.com" target="_blank"  rel="noreferrer"><div class="tetra" href="#">
            <h1 style={{color:"green"}}>TETRA CHANNEL</h1>
            <h2 style={{color:"green"}}>Leaderboard, replays and more</h2>
       </div></a>
        <a><div class="config" href="#">
            <h1 style={{color:"blueviolet"}}>CONFIG</h1>
            <h2 style={{color:"blueviolet"}}>Tweak your Tetr.io experience</h2>
        </div></a>
        <div class="about" href="#">
            <h1 style={{color:"grey"}}>ABOUT</h1>
            <h2 style={{color:"grey"}}>All about Tetr.io</h2>
        </div></p>}></Route>
        <Route path="/something" element={<p>Hello</p>}></Route>
        <Route path="/multiplayer" element={<div>
            <div> <a href="/">
                <h1>back</h1>
            </a> </div>
            <div class="multiplayer-box">
            <h1 style={{color:"red"}}>TETRA LEAGUE</h1>
            <h2 style={{color:"red"}}>Fight players of your skills in ranked duels</h2></div></div>}>
            </Route>
    </Routes>
</BrowserRouter>
        {/* <div class="multiplayer-box" href="#">
            <h1 style={{color:"pink"}}>MUTIPLAYER</h1>
            <h2 style={{color:"pink"}}>Play online with your friends</h2>
        </div>
        <a href="https://www.youtube.com" target="_blank"><div class="solo" href="#">
            <h1 style={{color:"darkblue"}}>SOLO</h1>
            <h2 style={{color:"darkblue"}}>Challenge yourself and top the leaderboard</h2>
        </div></a>
       <a href="https://www.youtube.com" target="_blank"><div class="tetra" href="#">
            <h1 style={{color:"green"}}>TETRA CHANNEL</h1>
            <h2 style={{color:"green"}}>Leaderboard, replays and more</h2>
       </div></a>
        <a><div class="config" href="#">
            <h1 style={{color:"blueviolet"}}>CONFIG</h1>
            <h2 style={{color:"blueviolet"}}>Tweak your Tetr.io experience</h2>
        </div></a>
        <div class="about" href="#">
            <h1 style={{color:"grey"}}>ABOUT</h1>
            <h2 style={{color:"grey"}}>All about Tetr.io</h2>
        </div> */}
    </div>
  );
}

export default App;
