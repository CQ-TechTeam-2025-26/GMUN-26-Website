import React from 'react';
import Folder from './Folder'; // ✅ Import your Folder component

const Gallery1 = () => {
  return (
    <div style={{ height: '600px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Folder
        size={2}
        color="#ab64a6"
        className="custom-folder"
        items={[
          <div key="1" className="paper-content">Day 0</div>,
          <div key="2" className="paper-content">Day 2</div>,
          <div key="3" className="paper-content">Day 1</div>,
        ]}
      />
    </div>
  );
};

export default Gallery1;
