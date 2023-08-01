import * as React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export interface EditToolProps {
  data: Record<string, any>;
}

const EditTool = ({ data }: EditToolProps) => {
  const { uid, businessId } = data;
  const [isOpen, setIsOpen] = useState(true);

  const onCloseClick = () => {
    setIsOpen(false);
  };

  return isOpen ? (
    <div className="fixed bottom-24 right-4 z-50">
      <div className="flex bg-white rounded-lg shadow-lg px-6 py-4">
        <a
          className="text-blue-400 hover:underline"
          href={editUrl}
          rel="noreferrer"
          target="_blank"
        >
          Edit
        </a>
        <button
          className="ml-8 text-gray-400 hover:text-gray-500"
          onClick={onCloseClick}
        >
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  ) : null;
};

export default EditTool;
