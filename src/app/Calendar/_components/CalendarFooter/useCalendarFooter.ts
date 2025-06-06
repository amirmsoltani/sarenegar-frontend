import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "@/store/store.ts";
import { useEffect } from "react";
import { useCustomState } from "@/common/UseCustomState/UseCustomState.ts";
import { DateService } from "@/services/DateService.ts";
import { routes } from "@/routes/routes.tsx";

export function useCalendarFooter() {
  const navigate = useNavigate();
  const { date, mode } = useParams<{ date: string; mode: "attack" | "medicine" }>();
  const { state, setState } = useCustomState<{ mode?: string; date?: string; isEmpty: boolean }>({
    isEmpty: false,
  });
  const events = useAppSelector((state) => state.calendar.calendarEventObject);

  useEffect(() => {
    if(events.status !== "success") return;

    const _date = DateService.getGregorianDate(date);

    if (state.date !== _date || state.mode !== mode) {
      setState({ date:_date, mode, isEmpty: events.status === "success" ? !events.data![_date] : false });
    }
  }, [date, mode, events, state, setState]);


  function addClickHandler(){
    if(mode === "attack") navigate(routes.addEpilepsyEvent.href(date!));
    if(mode === "medicine") navigate(routes.addMedicine.href(date!));

  }

  const isDisable = DateService.isBiggerThanToday(date!) && mode === "attack";

  let descriptionText = "";
  let addImage = "";

  if(mode === "medicine") {
    descriptionText = "هیچ دارویی در این تاریخ ثبت نگردیده است";
    addImage = "/add-pill3.png"
  }
  else{
    descriptionText = isDisable?"ثبت رویداد در آینده امکان پذیر نیست":"هیچ رویدادی در این تاریخ ثبت نگردیده است";
    addImage =  isDisable?"/add-attack-disable.svg":"/add-attack.png";
  }



  return { date, mode, isEmpty: state.isEmpty,descriptionText,addImage,isDisable,addClickHandler };
}
