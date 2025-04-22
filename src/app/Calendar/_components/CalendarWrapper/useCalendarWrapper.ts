import { useParams } from "react-router-dom";


export function useCalendarWrapper(){
  const {mode} = useParams<{mode:"medicine"|"attack"}>()


  return {mode};
}