import React, { useState } from "react";

import Modal from "./Modal";

// Modal组件最基础的两个事件，show/hide
export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const RenderModal = ({
    children,
    data,
    id,
  }: {
    children: React.ReactChild;
    data: { width: number; height: number };
    id: string;
  }) => (
    <React.Fragment>
      {isVisible && (
        <Modal
          data={data}
          id={id}
          closeModal={hide}
          onDrag={() => console.log("onDrag")}
          onDragEnd={() => console.log("onDragEnd")}
        >
          {children}
        </Modal>
      )}
    </React.Fragment>
  );

  return {
    show,
    hide,
    RenderModal,
  };
};
