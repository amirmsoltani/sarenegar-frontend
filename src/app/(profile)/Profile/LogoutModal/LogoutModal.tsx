import { Modal } from "@/common/Modal/Modal";
import styles from "./LogoutModal.module.scss";
import { Button } from "@/common/Button/Button";
import { useLogoutModal } from "./useLogoutModal";

export const LogoutModal = () => {
  const { _ref, state, onSubmit, onClose, closeHandler } = useLogoutModal();

  return (
    <Modal _ref={_ref} variant="SMALL" onClose={onClose}>
      <div className={styles.container}>
        <img className={styles.cover} src="/logout.png" />
        <h1 className={styles.title}>خروج از حساب کاربری</h1>
        <p className={styles.description}>آیا از این عملکرد اطمینان دارید ؟</p>
        <div className={styles.actions}>
          <Button size="sm" variant="red" onClick={onSubmit} loading={state.status === "loading"}>
            خروج
          </Button>
          <Button size="sm" variant="borderedRed" onClick={closeHandler}>
            انصراف
          </Button>
        </div>
      </div>
    </Modal>
  );
};
