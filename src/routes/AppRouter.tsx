// redux
import {useAppSelector} from "@/store/store.ts";
// routes
import {routes} from "@/routes/routes.tsx";
import {AppRouterUtils} from "@/routes/AppRouter.utils.ts";
// react-router-dom
import {BrowserRouter, Route, Routes} from "react-router-dom";
// components
import {Home} from "@/app/Home/Home";
import {Login} from "@/app/Login/Login.tsx";
import {Activation} from "@/app/Login/Activation/Activation.tsx";
import {Notification} from "@/app/Notification/Notification.tsx";
import {AddEvent} from "@/app/Events/AddEvent/AddEvent.tsx";
import {Event} from "@/app/Events/Event/Event.tsx";
import {Medications} from "@/app/Medicine/Medications.tsx";
import {ProFile} from "@/app/Profile/Profile.tsx";
import {UserInfo} from "@/app/Profile/UserInfo/UserInfo.tsx";
import {Events} from "@/app/Events/Events.tsx";
import {DateOfBirth} from "@/app/Profile/DateOfBirth/DateOfBirth.tsx";
import {Province} from "@/app/Profile/Province/Province.tsx";
import {City} from "@/app/Profile/City/City.tsx";
import {Support} from "@/app/Profile/Support/Support.tsx";
import {Logout} from "@/app/Profile/Logout/Logout.tsx";
import {Calendar} from "@/app/Calendar/Calendar.tsx";

//helpers
import {RedirectAfterLogin} from "./components/RedirectAfterLogin/RedirectAfterLogin.tsx";
import {DeleteEvent} from "@/app/Events/DeleteEvent/DeleteEvent.tsx";
import {Gender} from "@/app/Profile/Gender/Gender.tsx";
import {EventCalender} from "@/app/Calendar/EventCalender/EventCalender.tsx";
import {MedicineCalender} from "@/app/Calendar/MedicineCalender/MedicineCalender.tsx";
import {EmptyCalender} from "@/app/Calendar/EventCalender/EmptyCalender/EmptyCalender.tsx";
import {EmptyMedicine} from "@/app/Calendar/MedicineCalender/EmptyMedicine/EmptyMedicine.tsx";
import {ModalMedicines} from "@/app/Calendar/MedicineCalender/ModalMedicines/ModalMedicines.tsx";
import {ModalUsage} from "@/app/Calendar/MedicineCalender/ModalUsage/ModalUsage.tsx";
import {Reports} from "@/app/Reports/Reports.tsx";
import {Week} from "@/app/Reports/week/Week.tsx";
import {Month} from "@/app/Reports/month/Month.tsx";
import {Year} from "@/app/Reports/Year/Year.tsx";
import {AddMedicine} from "@/app/Medicine/AddMedicine/AddMedicine.tsx";
import {StageOne} from "@/app/Medicine/AddMedicine/StageOne/StageOne.tsx";
import {StageTwo} from "@/app/Medicine/AddMedicine/StageTwo/StageTwo.tsx";
import {Medicines} from "@/app/Medicine/Medicines/Medicines.tsx";
import {EmptyPill} from "@/app/Medicine/Medicines/EmptyPill/EmptyPill.tsx";
import {UnitAmount} from "@/app/Medicine/UnitAmount/UnitAmount.tsx";
import {Type} from "@/app/Medicine/Type/Type.tsx";
import {StartTime} from "@/app/Medicine/StartTime/StartTime.tsx";
import {EndDate} from "@/app/Medicine/EndTime/Date/EndDate.tsx";
import {EndNumber} from "@/app/Medicine/EndTime/Number/EndNumber.tsx";
import {DoseTime} from "@/app/Medicine/DoseTime/DoseTime.tsx";
import {Current} from "@/app/Medicine/Current/Current.tsx";
import {MedicationDetails} from "@/app/Medicine/MedicationDetails/MedicationDetails.tsx";
import {ModalDeleteMedicine} from "@/app/Medicine/Current/ModalDeleteMedicine/ModalDeleteMedicine.tsx";
import {ModalCompletionMedicine} from "@/app/Medicine/Current/ModalCompletionMedicine/ModalCompletionMedicine.tsx";
import {Completed} from "@/app/Medicine/Completed/Completed.tsx";
import {EmptyHome} from "@/app/Home/EmptyHome/EmptyHome.tsx";
import {WhenEvent} from "@/app/Events/AddEvent/WhenEvent/WhenEvent.tsx";
import {TimeEvent} from "@/app/Events/AddEvent/TimeEvent/TimeEvent.tsx";
import {EmptyAddEvent} from "@/app/Events/AddEvent/EmptyAddEvent/EmptyAddEvent.tsx";
import {EmptyMedications} from "@/app/Medicine/EmptyMedications/EmptyMedications.tsx";


const AppRouter = () => {
    const isLogin = useAppSelector((state) => state.auth.login.status === "success");

    return (
        <BrowserRouter>
            <Routes>
                <Route path="" Component={AppRouterUtils.selectElement(true, Home)}>
                    <Route path='empty' Component={EmptyHome} />
                    <Route path='event' Component={Events}>
                    <Route path=":id" Component={Event}>
                        <Route path="delete" Component={DeleteEvent}/>
                    </Route>
                    </Route>

                </Route>

                <Route path={routes.login.href}
                       Component={AppRouterUtils.selectElement(!isLogin, Login, RedirectAfterLogin)}/>

                <Route path='login' Component={Login}/>
                <Route path='activation' Component={Activation}/>
                <Route path='addEvent' Component={AddEvent}>
                    <Route path='when' Component={WhenEvent} />
                    <Route path='time' Component={TimeEvent} />
                    <Route path='empty' Component={EmptyAddEvent} />
                </Route>
                <Route path='notification' Component={Notification}/>
                <Route path='medicine' Component={Medications}>

                    <Route path='' Component={Current}>

                    </Route>
                    <Route path='completed' Component={Completed}>

                    </Route>
                </Route>
                <Route path='medicine/empty' Component={EmptyMedications} />


                <Route path='medicine/:id' Component={MedicationDetails}>
                    <Route path='delete' Component={ModalDeleteMedicine}/>
                    <Route path='completion' Component={ModalCompletionMedicine}/>
                </Route>
                <Route path='medicine/completed/:id' Component={MedicationDetails}>
                    <Route path='delete' Component={ModalDeleteMedicine}/>
                </Route>

                <Route path='medicine/add' Component={AddMedicine}>
                    <Route path='1' Component={StageOne}>
                        <Route path='medicines' Component={Medicines}/>
                        <Route path='empty' Component={EmptyPill}/>
                        <Route path='dose' Component={UnitAmount}/>
                        <Route path='type' Component={Type}/>
                    </Route>
                    <Route path='2' Component={StageTwo}>
                        <Route path='start' Component={StartTime}/>
                        <Route path='endDate' Component={EndDate}/>
                        <Route path='endNumber' Component={EndNumber}/>
                        <Route path='time' Component={DoseTime}/>
                    </Route>
                </Route>


                <Route path='profile' Component={ProFile}>
                    <Route path='logout' Component={Logout}/>
                </Route>
                <Route path='info' Component={UserInfo}>
                    <Route path='brith' Component={DateOfBirth}/>
                    <Route path='gender' Component={Gender}/>
                    <Route path='province' Component={Province}/>
                    <Route path='city' Component={City}/>
                </Route>
                <Route path='support' Component={Support}/>
                <Route path='calender' Component={Calendar}>
                    <Route path='event' Component={EventCalender}>
                        <Route path='empty' Component={EmptyCalender}/>
                        <Route path=':id' Component={Events}>
                        </Route>
                        <Route path=":id/:id" Component={Event}>
                            <Route path="delete" Component={DeleteEvent}/>
                        </Route>
                    </Route>
                    <Route path='medicine' Component={MedicineCalender}>
                        <Route path='empty' Component={EmptyMedicine}/>
                        <Route path=':id' Component={ModalMedicines}>

                        </Route>
                        <Route path=':id/:id' Component={ModalUsage}/>
                    </Route>
                </Route>
                <Route path='reports' Component={Reports}>
                    <Route path='week' Component={Week}/>
                    <Route path='month' Component={Month}/>
                    <Route path='year' Component={Year}/>
                </Route>


            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
