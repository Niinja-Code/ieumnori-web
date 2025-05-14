import Swal from "sweetalert2";

interface CommonModalProps {
  title: string;
  content?: string;
  confirmBtn?: string;
  onConfirm?: () => void;
}

interface ConfirmModalProps extends CommonModalProps {
  color?: "blue" | "red";
  cancelBtn?: string;
  onCancel?: () => void;
}

const commonClass = {};

export const Modal = {
  alert: ({
    title,
    content,
    confirmBtn = "확인",
    onConfirm = () => {},
  }: CommonModalProps) => {
    Swal.fire({
      title,
      text: content,
      confirmButtonText: confirmBtn,
      customClass: {
        ...commonClass,
        // title: ,
        // confirmButton: ,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      } else if (result.dismiss) {
        onConfirm();
      }
    });
  },
  confirm: ({
    title,
    content,
    color = "blue",
    confirmBtn = "확인",
    cancelBtn = "취소",
    onConfirm = () => {},
    onCancel = () => {},
  }: ConfirmModalProps) => {
    Swal.fire({
      title,
      text: content,
      showCancelButton: true,
      confirmButtonText: confirmBtn,
      cancelButtonText: cancelBtn,
      customClass: {
        ...commonClass,
        // title: ,
        // confirmButton: ,
        // cancelButton: ,
      },
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      } else if (result.dismiss) {
        onCancel();
      }
    });
  },
};
