// ChatFloatingButton.jsx
import React from "react";
import { FaCommentDots } from "react-icons/fa";

const ChatFloatingButton = ({ onClick }) => {
  return (
    <div
      className="fixed bottom-5 right-5 bg-brightColor text-white p-4 rounded-full shadow-lg hover:bg-hoverColor transition duration-300 cursor-pointer"
      onClick={onClick}
    >
      <FaCommentDots size={24} />
    </div>
  );
};

export default ChatFloatingButton;
