import { routes } from "@/routes/routes";
import { Range } from "@/common/Range/Range";
import { Link, Outlet } from "react-router-dom";
import { Toggle } from "@/common/Toggle/Toggle";
import styles from "./EditEpilepsyEvent.module.scss";
import { Form, FormButton } from "@/common/Form/Form";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import { useEditEpilepsyEvent } from "./useEditEpilepsyEvent";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";
import { consciousnessOptions, severityOptions, shakingOptions } from "../_common/epilepsyForm";
import { OccurrencePlaceholder } from "./_components/OccurrencePlaceholder/OccurrencePlaceholder";
import { EpilepsyChartContainer } from "./_components/EpilepsyChartContainer/EpilepsyChartContainer";
import { DurationTimePlaceholder } from "./_components/DurationTimePlaceholder/DurationTimePlaceholder";

export const EditEpilepsyEvent = () => {
  const { id, methods, onSubmit, status, getData } = useEditEpilepsyEvent();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Link to={routes.epilepsyEventInfo.href(id)} className={styles.iconWrapper}>
          <ArrowRight className={styles.icon} />
        </Link>
        <h1 className={styles.title}>ویرایش رخداد صرع</h1>
      </header>
      <StatusHandler status={status} onClick={getData} className={styles.statusContainer}>
        <Form className={styles.form} onSubmit={onSubmit} {...methods}>
          <div className={styles.formWrapper}>
            <div className={styles.wrapper}>
              <OccurrencePlaceholder />
              <DurationTimePlaceholder />
              <Toggle label="آیا هوشیاری خود را از دست داده اید ؟" options={consciousnessOptions} name="state_of_consciousness" />
              <Toggle label="آیا تکان و لرزش وجود داشت ؟" options={shakingOptions} name="tremor_and_shaking" />
              <div className={styles.rangeContainer}>
                <label className={styles.label}>این تجربه برای شما چقدر شدید بود ؟</label>
                <div className={styles.chart}>
                  <EpilepsyChartContainer />
                </div>
                <div className={styles.input}>
                  <Range name="severity" options={severityOptions} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <FormButton>ویرایش اطلاعات</FormButton>
          </div>
          <Outlet />
        </Form>
      </StatusHandler>
    </main>
  );
};
