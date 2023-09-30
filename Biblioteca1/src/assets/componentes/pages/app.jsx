import React from 'react';
import '../atoms/save.css';
import database from "../../base/database";
import Header from "../atoms/Header";
import Imgcentr from '../atoms/imgcentra';
import Introduccion from '../atoms/introducin';
import ArtistBox from '../atoms/moleculas/Box';

export function App() {
  return (
    <nav>
      <Header />
      <>
        <Imgcentr/>
      </>

      <Introduccion/>
      <br 
      
      />
      <br />

      <>
      <br />
        <div style={{"display": "flex", "justifyContent": "space-around"}}>
          {database.artistas.map(artist => (
            <ArtistBox key={artist.name} artist={artist} />
          ))}
        </div>
      </>
    </nav>
  );
}

export default App;
