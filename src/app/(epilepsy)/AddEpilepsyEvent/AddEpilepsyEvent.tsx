import { routes } from "@/routes/routes";
import { Range } from "@/common/Range/Range";
import { Link, Outlet } from "react-router-dom";
import { Toggle } from "@/common/Toggle/Toggle";
import styles from "./AddEpilepsyEvent.module.scss";
import { Form, FormButton } from "@/common/Form/Form";
import { ArrowRight } from "@wandersonalwes/iconsax-react";
import { useAddEpilepsyEvent } from "./useAddEpilepsyEvent";
import { consciousnessOptions, severityOptions, shakingOptions } from "../_common/epilepsyForm";
import { OccurrencePlaceholder } from "../_components/OccurrencePlaceholder/OccurrencePlaceholder";
import { EpilepsyChartContainer } from "../_components/EpilepsyChartContainer/EpilepsyChartContainer";
import { DurationTimePlaceholder } from "../_components/DurationTimePlaceholder/DurationTimePlaceholder";

export const AddEpilepsyEvent = () => {
  const { methods, onSubmit } = useAddEpilepsyEvent();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Link to={routes.dashboard.href()} className={styles.iconWrapper}>
          <ArrowRight className={styles.icon} />
        </Link>
        <h1 className={styles.title}>ثبت رخداد صرع</h1>
      </header>
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
          <FormButton>ثبت حمله</FormButton>
        </div>
        <Outlet />
      </Form>
    </main>
  );
};
