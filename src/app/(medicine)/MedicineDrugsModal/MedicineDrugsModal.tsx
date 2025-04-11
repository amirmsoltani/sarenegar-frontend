import { Modal } from "@/common/Modal/Modal";
import SearchIcon from "@/assets/svg/search.svg";
import styles from "./MedicineDrugsModal.module.scss";
import { useMedicineDrugsModal } from "./useMedicineDrugsModal";
import { TextOverflow } from "@/common/TextOverflow/TextOverflow";
import { StateInput } from "@/common/Input/StateInput/StateInput";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";

export const MedicineDrugsModal = () => {
  const { _ref, onClose, onSubmit, status, getData, data, onChangeDebouncedHandler } = useMedicineDrugsModal();

  return (
    <Modal _ref={_ref} onClose={onClose} title="داروی خود را انتخاب کنید" wrapperClassName={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <StateInput
            mode="STATE"
            variant="DARK"
            endContent={<SearchIcon />}
            onChange={onChangeDebouncedHandler}
            placeholder="خدمت مورد نظر خود را وارد نمایید ..."
          />
        </div>
        <h1 className={styles.title}>انتخاب برند دارو</h1>
        <StatusHandler status={status} className={styles.status} onClick={getData}>
          {data &&
            (data.results.length ? (
              <div className={styles.list}>
                {data.results.map((item) => (
                  <button key={item.id ?? item.en_name} type="button" className={styles.option} onClick={() => onSubmit(item)}>
                    <div className={styles.coverContainer}>
                      <img src={item.image ? item.image : "/drug-placeholder.png"} className={styles.cover} />
                    </div>
                    <div className={styles.optionWrapper}>
                      <div className={styles.titleContainer}>
                        <TextOverflow className={styles.faTitle}>{item.fa_name}</TextOverflow>
                        <TextOverflow className={styles.enTitle}>{item.en_name}</TextOverflow>
                      </div>
                      <div className={styles.company}>{item.producer ? item.producer : "-"}</div>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className={styles.emptyList}>
                <img className={styles.cover} src="/empty-drug.png" />
                <h3 className={styles.title}>دارویی با این نام موجود نمی‌باشد</h3>
              </div>
            ))}
        </StatusHandler>
      </div>
    </Modal>
  );
};
