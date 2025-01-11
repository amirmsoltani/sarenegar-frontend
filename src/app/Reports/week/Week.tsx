import styles from './Week.module.scss';

export const Week = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.NumberEvent}>
                <div className={styles.title}>تعداد حملات</div>
                <div className={styles.underline}/>
                <div className={styles.text}> آمارها نشان از <span className={styles.span}>کاهش</span> حملات
                    نسبت به هفته گذشته دارد
                </div>
                <div className={styles.section}>
                    <div className={styles.col}>
                        <div className={styles.title}>هفته جاری</div>
                        <div className={styles.text}><span className={styles.span}>۸</span> مورد</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.title}>هفته گذشته</div>
                        <div className={styles.text}><span className={styles.span}>۱۲</span> مورد</div>
                    </div>
                </div>
                <div className={styles.chartSec}>
                    <div className={styles.title}>نمودار هفته جاری</div>
                    <div className={styles.chartBox}>
                        <div className={styles.numberBox}>
                            <div>۴</div>
                            <div>۳</div>
                            <div>۲</div>
                            <div>۱</div>
                            <div>۰</div>
                        </div>
                        <div className={styles.chart}>
                            <div className={styles.lineBox}>
                                <div className={styles.line}/>
                                <div className={styles.line}/>
                                <div className={styles.line}/>
                                <div className={styles.line}/>
                                <div className={styles.line}/>
                            </div>
                            <div className={styles.tooltip}>
                                <div>مورد</div>
                                <div className={styles.number}>۱</div>
                                <div>سه شنبه 15 شهریور</div>
                            </div>

                            <div className={styles.barBox}>
                                <div className={styles.number}>۱</div>
                                <div className={styles.bar1}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۰</div>
                                <div className={styles.bar0}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۲</div>
                                <div className={styles.bar2}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۱</div>
                                <div className={styles.bar1}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۳</div>
                                <div className={styles.bar3}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۰</div>
                                <div className={styles.bar0}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۱</div>
                                <div className={styles.bar1}/>
                            </div>
                        </div>

                    </div>
                    <div className={styles.days}>
                        <div className={styles.day}>شنبه</div>
                        <div className={styles.day}>۱شنبه</div>
                        <div className={styles.day}>۲شنبه</div>
                        <div className={styles.day}>۳شنبه</div>
                        <div className={styles.day}>۴شنبه</div>
                        <div className={styles.day}>۵شنبه</div>
                        <div className={styles.day}>جمعه</div>
                    </div>
                </div>

            </div>

            <div className={styles.durationEvent}>
                <div className={styles.title}>مدت زمان حملات</div>
                <div className={styles.underline}/>
                <div className={styles.text}> آمارها نشان از <span className={styles.span}>افزایش</span> مدت
                    زمان حملات نسبت به هفته گذشته دارد
                </div>

                <div className={styles.section}>
                    <div className={styles.col}>
                        <div className={styles.title}>میانگین این هفته</div>
                        <div className={styles.time}>۰۲:۳۴</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.title}>میانگین هفته گذشته</div>
                        <div className={styles.time}>۰۱:۴۲</div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.description}>بیشترین مدت زمان حمله این هفته</div>
                    <div className={styles.time}>۰۲:۵۹</div>
                </div>

            </div>

            <div className={styles.dayEvent}>
                <div className={styles.title}>زمان حملات در روز</div>
                <div className={styles.underline}/>
                <div className={styles.text}>آمارها نشان میدهد این هفته بیشترین حملات در <span
                    className={styles.span}>عصر</span> اتفاق افتاده است
                </div>

                <div className={styles.col}>
                    <div className={styles.chartMin}>
                        <div className={styles.line}/>
                        <div className={styles.chart10}>
                            <div className={styles.barStart}/>
                            <div className={styles.bar}/>
                            <div className={styles.description}>
                                <div className={styles.numberBox}>
                                    <div>%</div>
                                    <div className={styles.number}>۱۰</div>
                                </div>
                                <div className={styles.time}>شب</div>
                            </div>
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.chart12}>
                            <div className={styles.barStart}/>
                            <div className={styles.bar}/>
                            <div className={styles.description}>
                                <div className={styles.numberBox}>
                                    <div>%</div>
                                    <div className={styles.number}>۱۲</div>
                                </div>
                                <div className={styles.time}>عصر</div>
                            </div>
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.chart35}>
                            <div className={styles.barStart}/>
                            <div className={styles.bar}/>
                            <div className={styles.description}>
                                <div className={styles.numberBox}>
                                    <div>%</div>
                                    <div className={styles.number}>۳۵</div>
                                </div>
                                <div className={styles.time}>ظهر</div>
                            </div>
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.chart100}>
                            <div className={styles.barStart}/>
                            <div className={styles.bar}/>
                            <div className={styles.description}>
                                <div className={styles.numberBox}>
                                    <div>%</div>
                                    <div className={styles.number}>۱۲</div>
                                </div>
                                <div className={styles.time}>صبح</div>
                            </div>
                        </div>
                        <div className={styles.line}/>
                    </div>
                    <div className={styles.time}>
                        <div>۱۲ شب</div>
                        <div>۶ عصر</div>
                        <div>۱۲ ظهر</div>
                        <div>۶ صبح</div>
                        <div>۱۲ شب</div>
                    </div>
                </div>

            </div>

            <div className={styles.intensityEvent}>
                <div className={styles.title}>شدت حملات</div>
                <div className={styles.underline}/>
                <div className={styles.text}>نمودار توزیع شدت حملات در این هفته</div>

                <div className={styles.col}>
                    <div className={styles.description}>
                        <div className={styles.section}>
                            <div className={styles.title}>تعداد حملات</div>
                            <div className={styles.numberBox}>
                                <div className={styles.number}>۸</div>
                                <div>مورد</div>
                            </div>
                        </div>
                        <div className={styles.type}>
                            <div className={styles.item}>
                                <div className={styles.square}/>
                                <div className={styles.title}>شدید:</div>
                                <div className={styles.number}>۳</div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.square}/>
                                <div className={styles.title}>متوسط:</div>
                                <div className={styles.number}>۲</div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.square}/>
                                <div className={styles.title}>خفیف:</div>
                                <div className={styles.number}>۳</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.chartBox}>
                        <div className={styles.chart}>
                            <div className={styles.tooltip}>
                                <div className={styles.numberBox}>
                                    <div>حمله شدید</div>
                                    <div className={styles.number}>٪۴۰</div>
                                </div>
                            </div>
                            <div className={styles.text}>
                                <div>نمودار توزیع</div>
                                <div>حملات</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.SymptomsEvent}>
                <div className={styles.title}>علائم حملات</div>
                <div className={styles.underline}/>
                <div className={styles.text}>نمودار توزیع شدت حملات در این هفته</div>

                <div className={styles.col}>
                    <div>
                        <div className={styles.title}>تکان و لرزش</div>

                        <div className={styles.chart100}>
                            <div className={styles.barStart}/>
                            <div className={styles.bar}/>
                            <div className={styles.description}>
                                <div className={styles.numberBox}>
                                    <div className={styles.number}>۱۰۰</div>
                                    <div>%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={styles.title}>عدم هوشیاری</div>

                        <div className={styles.chart30}>
                            <div className={styles.barStart}/>
                            <div className={styles.bar}/>
                            <div className={styles.description}>
                                <div className={styles.numberBox}>
                                    <div className={styles.number}>۳۰</div>
                                    <div>%</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};