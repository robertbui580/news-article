import React from "react";
import { useOnClickOutside } from "../hooks";

interface IProps {
  onEdit: () => void;
  onDelete: () => void;
}

export const ModalArticleActions = ({ onEdit, onDelete }: IProps) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const ref = React.useRef(null);

  useOnClickOutside({
    ref,
    handler: () => setIsModalOpen(false),
  });

  return (
    <div ref={ref}>
      {isModalOpen && (
        <div className="absolute top-10 right-2 rounded-xl w-1/3 p-2 flex flex-col bg-white shadow-2xl border z-10">
          <button
            onClick={() => {
              onEdit();
              setIsModalOpen(false);
            }}
            className="text-left border border-transparent hover:border-gray-200 rounded-md p-2"
          >
            <p className="font-medium text-green-800">Edit</p>
          </button>
          <button
            onClick={() => {
              onDelete();
              setIsModalOpen(false);
            }}
            className="text-left border border-transparent hover:border-gray-200 rounded-md p-2"
          >
            <p className="font-medium text-red-800">Delete</p>
          </button>
        </div>
      )}
      <div
        onClick={() => setIsModalOpen(true)}
        className=" absolute top-3 right-2 z-10 cursor-pointer "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          />
        </svg>
      </div>
    </div>
  );
};
