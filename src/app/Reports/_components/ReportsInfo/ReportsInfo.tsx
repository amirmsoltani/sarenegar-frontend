import { secondToTime } from "@/helper/helper";
import styles from "./ReportsInfo.module.scss";
import { StatusHandler } from "@/common/StatusHandler/StatusHandler";
import { barChartOptions, doughnutChartOptions, useReportsInfo } from "./useReportsInfo";

import { Bar, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, ArcElement } from "chart.js";

ChartJS.defaults.font.family = "Yekan Bakh FaNum";
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip);

export const ReportsInfo = () => {
  const {
    type,
    data,
    noon,
    night,
    status,
    termor,
    getData,
    evening,
    morning,
    barChartData,
    consciousness,
    doughnutChartData,
    maxDistributionLabel,
  } = useReportsInfo();

  return (
    <StatusHandler status={status} onClick={getData} className={styles.status}>
      {data && (
        <>
          {/* first section */}
          <div>
            <h2 className={styles.title}>تعداد حملات</h2>
            <div>
              <p className={styles.description}>
                آمارها نشان از
                <span className={styles.descriptionStrong}>
                  &nbsp;
                  {(data.selected_period.total_events ?? 0) > (data.previous_period.total_events ?? 0)
                    ? "افزایش"
                    : (data.selected_period.total_events ?? 0) < (data.previous_period.total_events ?? 0)
                      ? "کاهش"
                      : "عدم تغییر"}
                  &nbsp;
                </span>
                حملات نسبت به {type} گذشته دارد
              </p>
            </div>
            <div className={styles.boxes}>
              <div className={styles.box}>
                <div className={styles.boxTitle}>{type} جاری</div>
                <div className={styles.boxValue}>
                  <span className={styles.boxValueStrong}>{data.selected_period.total_events ?? 0}</span>
                  &nbsp;مورد
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.boxTitle}>{type} گذشته</div>
                <div className={styles.boxValue}>
                  <span className={styles.boxValueStrong}>{data.previous_period.total_events ?? 0}</span>
                  &nbsp;مورد
                </div>
              </div>
            </div>
            {!!data.selected_period.total_events && (
              <>
                <div className={styles.spacingSm}></div>
                <div className={styles.box}>
                  <div className={styles.firstChart}>
                    <div className={styles.boxTitle}>نمودار {type} جاری</div>
                    <div className={styles.chartContainer}>
                      <Bar options={barChartOptions} data={barChartData} />
                    </div>
                  </div>
                </div>
              </>
            )}
            <div className={styles.spacingMd}></div>
          </div>
          {/* second section */}
          <div>
            <h2 className={styles.title}>مدت زمان حملات</h2>
            <div>
              <p className={styles.description}>
                آمارها نشان از
                <span className={styles.descriptionStrong}>
                  &nbsp;
                  {(data.selected_period.average_duration_seconds ?? 0) > (data.previous_period.average_duration_seconds ?? 0)
                    ? "افزایش"
                    : (data.selected_period.average_duration_seconds ?? 0) < (data.previous_period.average_duration_seconds ?? 0)
                      ? "کاهش"
                      : "عدم تغییر"}
                  &nbsp;
                </span>
                مدت زمان حملات نسبت به {type} گذشته دارد
              </p>
            </div>
            <div className={styles.boxes}>
              <div className={styles.box}>
                <div className={styles.boxTitle}>میانگین این {type}</div>
                <div className={styles.boxValue}>
                  <span className={styles.boxValueStrong}>
                    {secondToTime(data.selected_period.average_duration_seconds ?? 0)}
                  </span>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.boxTitle}>میانگین {type} گذشته</div>
                <div className={styles.boxValue}>
                  <span className={styles.boxValueStrong}>
                    {secondToTime(data.previous_period.average_duration_seconds ?? 0)}
                  </span>
                </div>
              </div>
            </div>
            {!!data.selected_period.total_events && (
              <>
                <div className={styles.spacingSm}></div>
                <div className={styles.box}>
                  <div className={styles.secondSection}>
                    <h3 className={styles.maxTitle}>بیشترین مدت زمان حمله این {type}</h3>
                    <div className={styles.maxValue}>{secondToTime(data.selected_period.max_duration_seconds ?? 0)}</div>
                  </div>
                </div>
                <div className={styles.spacingMd}></div>
              </>
            )}
          </div>
          {/* third section */}
          {!!data.selected_period.total_events && (
            <>
              <div>
                <h2 className={styles.title}>زمان حملات در روز</h2>
                <div>
                  <p className={styles.description}>
                    آمارها نشان میدهد در این {type} بیشترین حملات در{" "}
                    <span className={styles.descriptionStrong}>{maxDistributionLabel}</span> اتفاق افتاده است
                  </p>
                </div>
                <div className={styles.box}>
                  <div className={styles.firstChart}>
                    <div className={styles.chartContainer}>
                      <div className={styles.chart}>
                        <div className={styles.divider}></div>
                        <div className={styles.recordContainer} data-color="dark">
                          {night < 25 && (
                            <div className={styles.valueContainer}>
                              <div>{night}%</div>
                              <div className={styles.recordTitle}>شب</div>
                            </div>
                          )}
                          <div className={styles.record} style={{ width: `${night}%` }}>
                            {night >= 25 && (
                              <>
                                <div>{night}%</div>
                                <div className={styles.recordTitle}>شب</div>
                              </>
                            )}
                          </div>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.recordContainer} data-color="purple">
                          {evening < 25 && (
                            <div className={styles.valueContainer}>
                              <div>{evening}%</div>
                              <div className={styles.recordTitle}>عصر</div>
                            </div>
                          )}
                          <div className={styles.record} style={{ width: `${evening}%` }}>
                            {evening >= 25 && (
                              <>
                                <div>{evening}%</div>
                                <div className={styles.recordTitle}>عصر</div>
                              </>
                            )}
                          </div>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.recordContainer} data-color="orange">
                          {noon < 25 && (
                            <div className={styles.valueContainer}>
                              <div>{noon}%</div>
                              <div className={styles.recordTitle}>ظهر</div>
                            </div>
                          )}
                          <div className={styles.record} style={{ width: `${noon}%` }}>
                            {noon >= 25 && (
                              <>
                                <div>{noon}%</div>
                                <div className={styles.recordTitle}>ظهر</div>
                              </>
                            )}
                          </div>
                        </div>
                        <div className={styles.divider}></div>
                        <div className={styles.recordContainer} data-color="yellow">
                          {morning < 25 && (
                            <div className={styles.valueContainer}>
                              <div>{morning}%</div>
                              <div className={styles.recordTitle}>صبح</div>
                            </div>
                          )}
                          <div className={styles.record} style={{ width: `${morning}%` }}>
                            {morning >= 25 && (
                              <>
                                <div>{morning}%</div>
                                <div className={styles.recordTitle}>صبح</div>
                              </>
                            )}
                          </div>
                        </div>
                        <div className={styles.divider}></div>
                      </div>
                      <div className={styles.times}>
                        <div>12 شب</div>
                        <div>6 عصر</div>
                        <div>12 ظهر</div>
                        <div>12 صبح</div>
                        <div>12 شب</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.spacingMd}></div>
              </div>
              {/* fourth section */}
              <div>
                <h2 className={styles.title}>شدت حملات</h2>
                <div>
                  <p className={styles.description}>نمودار توزیع شدت حملات در این {type}</p>
                </div>
                <div className={styles.box}>
                  <div className={styles.thirdChart}>
                    <div className={styles.info}>
                      <div className={styles.data}>
                        <div className={styles.infoLabel}>تعداد حملات</div>
                        <div>
                          <span className={styles.infoValueStrong}>{data.selected_period.total_events}</span>
                          &nbsp;
                          <span className={styles.infoValue}>مورد</span>
                        </div>
                      </div>
                      <div className={styles.colors}>
                        <div className={styles.color}>
                          <div
                            className={styles.colorBox}
                            style={{ background: doughnutChartData.datasets[0].backgroundColor[0] }}
                          ></div>
                          <div className={styles.colorTitle}>شدید:</div>
                          <div className={styles.quantity}>{data.selected_period.severity_distribution.Severe.count}</div>
                        </div>
                        <div className={styles.color}>
                          <div
                            className={styles.colorBox}
                            style={{ background: doughnutChartData.datasets[0].backgroundColor[1] }}
                          ></div>
                          <div className={styles.colorTitle}>متوسط:</div>
                          <div className={styles.quantity}>{data.selected_period.severity_distribution.Moderate.count}</div>
                        </div>
                        <div className={styles.color}>
                          <div
                            className={styles.colorBox}
                            style={{ background: doughnutChartData.datasets[0].backgroundColor[2] }}
                          ></div>
                          <div className={styles.colorTitle}>خفیف:</div>
                          <div className={styles.quantity}>{data.selected_period.severity_distribution.Mild.count}</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.chartContainer}>
                      <div className={styles.chartTitle}>
                        نمودار توزیع <br />
                        <span className={styles.chartTitleStrong}>حملات</span>
                      </div>
                      <div className={styles.chartWrapper}>
                        <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.spacingMd}></div>
              </div>
              {/* fifth section */}
              <div>
                <h2 className={styles.title}>علائم حملات</h2>
                <div>
                  <p className={styles.description}>نمودار توزیع شدت حملات در این {type}</p>
                </div>
                <div className={styles.boxContainer}>
                  <div className={styles.box}>
                    <div className={styles.fourthChart}>
                      <div className={styles.chartRecord} data-color="green">
                        <div className={styles.chartLabel}>تکان و لرزش</div>
                        <div className={styles.recordContainer}>
                          <div className={styles.record} style={{ width: `${termor}%` }}>
                            {termor >= 25 && `${termor}%`}
                          </div>
                          {termor < 25 && <div>{termor}%</div>}
                        </div>
                      </div>
                      <div className={styles.chartRecord} data-color="secondary">
                        <div className={styles.chartLabel}>عدم هوشیاری</div>
                        <div className={styles.recordContainer}>
                          <div className={styles.record} style={{ width: `${consciousness}%` }}>
                            {consciousness >= 25 && `${consciousness}%`}
                          </div>
                          {consciousness < 25 && <div>{consciousness}%</div>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </StatusHandler>
  );
};
