import {useLocation} from "react-router-dom";


export function useNavbar() {

    const location = useLocation();
    const currentLocation = location.pathname.split('/')[1];

    return(currentLocation);
}