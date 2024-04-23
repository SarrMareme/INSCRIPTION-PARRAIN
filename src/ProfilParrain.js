import React from "react";

function ProfilParrain() {
  return (
    <div className="flex container justify-center">
      <div className="w-25 border m-5 p-3">
      <h1 className="text-xl font-bold my-4 text-center" style={{ fontSize: "18px" }}>Profil</h1>
        <div>
          <img
            src="https://th.bing.com/th?q=User+Icon+Free&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=SN&setlang=fr&adlt=moderate&t=1&mw=247"
            className="rounded-full w-24 h-24 mx-auto  p-2 " 
            style={{ display: "block", margin: "auto" }} 
          />
          <div>
            <button className="btn btn-block btn-primary my-2">Modifier</button>
          </div>

          <div className="my-2 border-b" 
           style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="font-bold" 
              style={{ fontSize: "14px" }}>Numero carte electeur</h2> 
            
          </div>

          <div className="my-2 border-b" style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="font-bold" 
              style={{ fontSize: "14px" }}>Numeo carte d'identite</h2> 
            
          </div>

          <div className="my-2 border-b" 
           style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="font-bold" 
              style={{ fontSize: "14px" }}>Nom</h2> 
            
          </div>

          <div className="my-2 border-b" 
           style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="font-bold" 
              style={{ fontSize: "14px" }}>Bureau de vote</h2> 
            
          </div>

          <div className="my-2 border-b" 
           style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="font-bold" 
              style={{ fontSize: "14px" }}>Email</h2> 
           
          </div>

          <div className="my-2 border-b" 
           style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 className="font-bold" 
              style={{ fontSize: "14px" }}>Telephone</h2> 
           
          </div>
          
        </div>
      </div>

      
    </div>
  );
}

export default ProfilParrain;
