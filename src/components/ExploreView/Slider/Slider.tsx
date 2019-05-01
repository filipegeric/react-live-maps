import React from 'react';
import './Slider.scss';

const Slider: React.FC<{
  items: Array<string>;
  animationSpeed?: number;
}> = props => {
  return (
    <div
      className="slider"
      style={{
        ['--animation-speed' as any]: `${props.animationSpeed || 20}s`,
        ['--number-of-slides' as any]: props.items.length
      }}
    >
      <div className="slide-track">
        {[...props.items, ...props.items].map((el, i) => (
          <div key={i} className="slide">
            <img src={el} alt="/" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
