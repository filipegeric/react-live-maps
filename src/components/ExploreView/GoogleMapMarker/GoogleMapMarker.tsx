import React from 'react';
import './GoogleMapMarker.scss';

const MapMarker: React.FC<{
  title?: string;
  color?: string | null;
  lat: number;
  lng: number;
  onClick?: () => void;
}> = props => {
  return (
    <svg className="google-map-marker" onClick={props.onClick}>
      <title>{props.title}</title>
      <path
        style={{
          fill: props.color || 'red'
        }}
        d="M38.853,5.324L38.853,5.324c-7.098-7.098-18.607-7.098-25.706,0h0 C6.751,11.72,6.031,23.763,11.459,31L26,52l14.541-21C45.969,23.763,45.249,11.72,38.853,5.324z M26.177,24c-3.314,0-6-2.686-6-6 s2.686-6,6-6s6,2.686,6,6S29.491,24,26.177,24z"
      />
    </svg>
  );
};

export default MapMarker;
