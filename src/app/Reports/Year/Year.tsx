import styles from './Year.module.scss';

export const Year = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.NumberEvent}>
                <div className={styles.title}>تعداد حملات</div>
                <div className={styles.underline}/>
                <div className={styles.text}>اطلاعات کافی برای مقایسه با سال گذشته در دست نیست</div>
                <div className={styles.section}>
                    <div className={styles.col}>
                        <div className={styles.title}>سال جاری</div>
                        <div className={styles.text}><span className={styles.span}>۱۲۴</span> مورد</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.title}>سال گذشته</div>
                        <div className={styles.text}><span className={styles.span}>!</span></div>
                    </div>
                </div>
                <div className={styles.chartSec}>
                    <div className={styles.title}>نمودار سال جاری</div>
                    <div className={styles.chartBox}>
                        <div className={styles.numberBox}>
                            <div>۴۰</div>
                            <div>۳۰</div>
                            <div>۲۰</div>
                            <div>۱۰</div>
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
                                <div className={styles.number}>۲۶</div>
                                <div>مهر ماه</div>
                            </div>

                            <div className={styles.barBox}>
                                <div className={styles.number}>۱۸</div>
                                <div className={styles.bar18}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۳۰</div>
                                <div className={styles.bar30}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۱۲</div>
                                <div className={styles.bar12}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۵</div>
                                <div className={styles.bar5}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۵</div>
                                <div className={styles.bar5}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۱۰</div>
                                <div className={styles.bar10}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۲۶</div>
                                <div className={styles.bar26}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۴۰</div>
                                <div className={styles.bar40}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۰</div>
                                <div className={styles.bar0}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۰</div>
                                <div className={styles.bar0}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۰</div>
                                <div className={styles.bar0}/>
                            </div>
                            <div className={styles.barBox}>
                                <div className={styles.number}>۰</div>
                                <div className={styles.bar0}/>
                            </div>
                        </div>

                    </div>
                    <div className={styles.days}>
                        <div className={styles.day}>۱</div>
                        <div className={styles.day}>۲</div>
                        <div className={styles.day}>۳</div>
                        <div className={styles.day}>۴</div>
                        <div className={styles.day}>۵</div>
                        <div className={styles.day}>۶</div>
                        <div className={styles.day}>۷</div>
                        <div className={styles.day}>۸</div>
                        <div className={styles.day}>۹</div>
                        <div className={styles.day}>۱۰</div>
                        <div className={styles.day}>۱۱</div>
                        <div className={styles.day}>۱۲</div>
                    </div>
                </div>

            </div>

            <div className={styles.durationEvent}>
                <div className={styles.title}>مدت زمان حملات</div>
                <div className={styles.underline}/>
                <div className={styles.text}>اطلاعات کافی برای مقایسه با سال گذشته در دست نیست</div>

                <div className={styles.section}>
                    <div className={styles.col}>
                        <div className={styles.title}>میانگین سال جاری</div>
                        <div className={styles.time}>۰۲:۳۴</div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.title}>میانگین سال گذشته</div>
                        <div className={styles.time}><span className={styles.span}>!</span></div>
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.description}>بیشترین مدت زمان حمله سال جاری</div>
                    <div className={styles.time}>۰۲:۵۹</div>
                </div>

            </div>

            <div className={styles.dayEvent}>
                <div className={styles.title}>زمان حملات در روز</div>
                <div className={styles.underline}/>
                <div className={styles.text}>آمارها نشان میدهد این سال بیشترین حملات در <span
                    className={styles.span}>عصر</span> اتفاق افتاده است
                </div>

                <div className={styles.col}>
                    <div className={styles.chartMin}>
                        <div className={styles.line}/>
                        <div className={styles.chart1}>
                            <div className={styles.barStart}/>
                            <div className={styles.bar}/>
                            <div className={styles.description}>
                                <div className={styles.numberBox}>
                                    <div>%</div>
                                    <div className={styles.number}>۷۲</div>
                                </div>
                                <div className={styles.time}>شب</div>
                            </div>
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.chart2}>
                            <div className={styles.barStart}/>
                            <div className={styles.bar}/>
                            <div className={styles.description}>
                                <div className={styles.numberBox}>
                                    <div>%</div>
                                    <div className={styles.number}>۵۰</div>
                                </div>
                                <div className={styles.time}>عصر</div>
                            </div>
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.chart3}>
                            <div className={styles.barStart}/>
                            <div className={styles.bar}/>
                            <div className={styles.description}>
                                <div className={styles.numberBox}>
                                    <div>%</div>
                                    <div className={styles.number}>۱۰</div>
                                </div>
                                <div className={styles.time}>ظهر</div>
                            </div>
                        </div>
                        <div className={styles.line}/>
                        <div className={styles.chart4}>
                            <div className={styles.barStart}/>
                            <div className={styles.bar}/>
                            <div className={styles.description}>
                                <div className={styles.numberBox}>
                                    <div>%</div>
                                    <div className={styles.number}>۲۵</div>
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
                <div className={styles.text}>نمودار توزیع شدت حملات در این سال</div>

                <div className={styles.col}>
                    <div className={styles.description}>
                        <div className={styles.section}>
                            <div className={styles.title}>تعداد حملات</div>
                            <div className={styles.numberBox}>
                                <div className={styles.number}>۱۸۰</div>
                                <div>مورد</div>
                            </div>
                        </div>
                        <div className={styles.type}>
                            <div className={styles.item}>
                                <div className={styles.square}/>
                                <div className={styles.title}>شدید:</div>
                                <div className={styles.number}>۱۰</div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.square}/>
                                <div className={styles.title}>متوسط:</div>
                                <div className={styles.number}>۳۰</div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.square}/>
                                <div className={styles.title}>خفیف:</div>
                                <div className={styles.number}>۲۳</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.chartBox}>
                        <div className={styles.chart}>
                            <div className={styles.tooltip}>
                                <div className={styles.numberBox}>
                                    <div>حمله شدید</div>
                                    <div className={styles.number}>٪۲۰</div>
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
                <div className={styles.text}>نمودار توزیع شدت حملات در این سال</div>

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