import type { AstroObject } from "../types/AstroObject";

interface ObjectDetailsProps {
    selectedObject: AstroObject | null;
}

function ObjectDetails({ selectedObject }: ObjectDetailsProps) {
    return (
        <div className="details-panel">
            <h2>PANEL OBSERWACYJNY</h2>


        </div>
    );
}

export default ObjectDetails;