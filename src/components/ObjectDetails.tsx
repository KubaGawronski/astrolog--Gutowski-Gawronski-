import type { AstroObject } from "../types/AstroObject";

interface ObjectDetailsProps {
    selectedObject: AstroObject | null;
}

function ObjectDetails({ selectedObject }: ObjectDetailsProps) {
    return (
        <div className="details-panel">
            <h2>PANEL OBSERWACYJNY</h2>

            {selectedObject ? (
                <>
                    <div className="details-image-container">
                        <img
                            src={selectedObject.image}
                            alt={selectedObject.name}
                            className="details-image"
                        />
                    </div>

                    <div className="details-table">
                        <div className="details-row">
                            <span>Nazwa:</span>
                            <span>{selectedObject.name}</span>
                        </div>

                        <div className="details-row">
                            <span>Typ obiektu:</span>
                            <span>{selectedObject.type}</span>
                        </div>

                        <div className="details-row">
                            <span>Odległość od Ziemi:</span>
                            <span>{selectedObject.distance}</span>
                        </div>
                    </div>
                </>
            ) : (
                <div className="details-message">
                    Wybierz pozycję z katalogu,
                    <br />
                    aby zobaczyć jej szczegóły.
                </div>
            )}
        </div>
    );
}

export default ObjectDetails;