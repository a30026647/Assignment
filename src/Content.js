import React, { Component } from "react";
import scp from "./data.json";

const scpData = scp.map(

    (scp) =>
    {
        return(
            <div className="col-4" key={scp.id}>
                <div className="card shadow-sm">
                    <h1 className="card-text">{scp.h1}</h1>
                    <h2 className="card-text">{scp.h2}</h2>
                    <h3 className="card-text">{scp.h3}</h3>
                    <p1 className="card-text">{scp.p1}</p1>  
                    <p5 className="card-text">{scp.p5}</p5>                   
                    <img src={scp.image} />
                    <div className="card-body">        
                    <h4 className="card-text">{scp.h4}</h4>
                    <p className="card-text">{scp.description}</p>
                    <p className="card-text">{scp.description1}</p>
                    <p2 className="card-text">{scp.p2}</p2>
                    <h5 className="card-text">{scp.h5}</h5>
                    <p3 className="card-text">{scp.p3}</p3>
                    <h6 className="card-text">{scp.h6}</h6>
                    <p4 className="card-text">{scp.p4}</p4>

                    </div>
                </div>
            </div>
        );
    }

);

class Content extends Component
{
    render()
    {
        return(
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-sm-2 cols-md-3 g-3">
                    {scpData}
                    </div>
                
                </div>
            </div>
           
        );
    }
}

export default Content;
