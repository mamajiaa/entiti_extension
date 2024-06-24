import React from 'react';
import TestComponent from './components/TestComponent';
import '../styles/style.css'; // 确保路径正确

const Popup: React.FC = () => {
  return (
    <div className="w-[200px] h-[500px] flex items-center justify-center">
      <TestComponent />
    </div>
  );
};

export default Popup;