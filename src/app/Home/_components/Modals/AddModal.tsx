// components
import { Button } from "@/common/Button/Button";
import { Modal, ModalFooter, ModalHeader } from "@/common/Modal/Modal";

export const AddModal = () => {
  return (
    <Modal>
      <ModalHeader title="Title modal"></ModalHeader>
      {new Array(100).fill("").map((_, index) => (
        <div key={index}>this content {index}</div>
      ))}
      <ModalFooter>
        <Button>Submit</Button>
      </ModalFooter>
    </Modal>
  );
};
