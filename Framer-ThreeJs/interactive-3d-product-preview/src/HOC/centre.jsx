import React from "react";

const Center = (Component) => {
  return function CenteredComponent(props) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Component {...props} />
      </div>
    );
  };
};

export default Center;
