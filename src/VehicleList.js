import React from 'react';

export default function VehicleList({ vehicles }) {
  return (
    <div className="traffic">
      {
        vehicles.map((vehicle, i) => <p key={vehicle + i}>{vehicle}</p>)
      }
      {/* this component takes in a prop called vehicles, which is an array of vehicle strings */}
      {/* map through the vehicles array in props */}
      {/* for each item render a Vehicle component. Pass the vehicle string as a prop called vehicle to the Vehicle component.  */}
    </div>
  );
}
