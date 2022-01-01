import { combineReducers } from "redux";
import notifications from './notifications.reducer';
import user from './user.reducer';
import products from './products.reducer';
import categoryes from './category.reducer';
// import needlogin from './userLogin.reducer';
import address from './address.reducer';
import brands from './brands.reducer';
import site from './site.reducer';

const appReducers = combineReducers({
    user,
    notifications,
    products,
    categoryes,
    // needlogin,
    address,
    brands,
    site
});

export default appReducers;