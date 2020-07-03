import React from "react";

const Results = ({cities}) => {
    return  cities ? (
        <div>
            {cities.map((city, index) => (
                <div className="card border-dark mb-3" style={{ width: "18rem", marginLeft: "auto", marginRight: "auto"}}>
                    <div className="card-body">
                        <a target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/place/' + city} className="card-text" style={{ textAlign: "center"}}>{city}</a>
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