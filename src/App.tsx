import { useState } from "react";
import ObjectList from "./components/ObjectList";
import type { AstroObject } from "./types/AstroObject";
import "./App.css";

function App() {
  const [objects] = useState<AstroObject[]>([
    {
      id: 1,
      name: "Saturn",
      type: "Planeta",
      distance: "1.4 mld km",
      image:
          "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
    },
    {
      id: 2,
      name: "Earth",
      type: "Planeta",
      distance: "0 km",
      image:
          "https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg",
    },
    {
      id: 3,
      name: "Sirius",
      type: "Gwiazda",
      distance: "8.6 lat świetlnych",
      image:
          "https://upload.wikimedia.org/wikipedia/commons/5/56/Sirius_A_and_B_Hubble_photo.jpg",
    },
    {
      id: 4,
      name: "Halley",
      type: "Kometa",
      distance: "Zmienia się",
      image:
          "https://upload.wikimedia.org/wikipedia/commons/2/20/Halley%27s_Comet_1986.jpg",
    },
    {
      id: 5,
      name: "Moon",
      type: "Satelita",
      distance: "384 400 km",
      image:
          "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
    },
  ]);

  const handleSelectObject = (object: AstroObject) => {
    console.log(object.name);
  };

  return (
      <div className="app">
        <header className="header">
          <h1>AstroLog</h1>
          <p>Katalog Ciał Niebieskich</p>
        </header>

        <main className="main-content">
          <ObjectList
              objects={objects}
              onSelectObject={handleSelectObject}
          />
        </main>
      </div>
  );
}

export default App;