import { useState } from "react";
import type { AstroObject } from "../types/AstroObject";

interface AddObjectFormProps {
    onAddObject: (
        objectData: Omit<AstroObject, "id">
    ) => void;
}

function AddObjectForm({
                           onAddObject,
                       }: AddObjectFormProps) {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [distance, setDistance] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        onAddObject({
            name,
            type,
            distance,
            image,
        });

        setName("");
        setType("");
        setDistance("");
        setImage("");
    };

    return (
        <div className="form-panel">
            <h2>REJESTR ODKRYĆ</h2>

            <form onSubmit={handleSubmit} className="form">
                <label>Nazwa obiektu:</label>
                <input
                    type="text"
                    placeholder="Wprowadź nazwę"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label>Typ obiektu:</label>
                <input
                    type="text"
                    placeholder="Wprowadź typ obiektu"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />

                <label>Odległość od Ziemi:</label>
                <input
                    type="text"
                    placeholder="Wprowadź odległość"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    required
                />

                <label>Link do zdjęcia:</label>
                <input
                    type="text"
                    placeholder="Wklej link do zdjęcia"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />

                <button type="submit">
                    Zgłoś obiekt
                </button>

                <p className="form-info">
                    Nowy obiekt zostanie dodany do katalogu
                    natychmiast po zgłoszeniu
                </p>
            </form>
        </div>
    );
}

export default AddObjectForm;