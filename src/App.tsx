import { useState } from "react";
import "./App.css";

import ObjectList from "./components/ObjectList";
import ObjectDetails from "./components/ObjectDetails";

import { initialObjects } from "./data/initialObjects";
import type { AstroObject } from "./types/AstroObject";

function App() {
    const [objects, setObjects] =
        useState<AstroObject[]>(initialObjects);

    const [selectedObject, setSelectedObject] =
        useState<AstroObject | null>(null);

    const handleSelectObject = (object: AstroObject) => {
        setSelectedObject(object);
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

                <ObjectDetails
                    selectedObject={selectedObject}
                />

            </main>
        </div>
    );
}

export default App;