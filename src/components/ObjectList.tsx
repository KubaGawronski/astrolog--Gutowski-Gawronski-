import type { AstroObject } from "../types/AstroObject";

interface ObjectListProps {
    objects: AstroObject[];
    onSelectObject: (object: AstroObject) => void;
}

function ObjectList({
                        objects,
                        onSelectObject,
                    }: ObjectListProps) {
    return (
        <div className="catalog">
            <h2>KATALOG OBIEKTÓW</h2>

            {objects.map((object) => (
                <div
                    key={object.id}
                    className="catalog-item"
                    onClick={() => onSelectObject(object)}
                >
                    <div className="catalog-thumbnail">
                        <img src={object.image} alt={object.name} />
                    </div>

                    <span>{object.name}</span>
                </div>
            ))}
        </div>
    );
}

export default ObjectList;