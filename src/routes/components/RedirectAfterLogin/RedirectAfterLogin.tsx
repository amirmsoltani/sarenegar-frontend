import {Navigate} from 'react-router-dom';

export const RedirectAfterLogin = () => <Navigate to={'/schedule'} replace />;
