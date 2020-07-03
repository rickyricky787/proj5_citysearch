import React from "react";

const Results = ({cities}) => {
    return  cities ? (
        <div>
            {cities.map((city, index) => (
                <div className="card border-dark mb-3" style={{ width: "18rem", marginLeft: "auto", marginRight: "auto"}}>
                    <div className="card-body">
                        <p className="card-text" style={{ textAlign: "center"}}> {city}</p>
                    </div>
                </div>
            ))}
        </div>
        
    ) : (
        <div>
        </div>
        );
    
};

export default Results;