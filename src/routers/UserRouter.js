import { Switch, Route } from 'react-router-dom';
import ProtectedLoginRoute from '../components/routes/user/ProtectedLoginRoute';
import ProtectedUserRoute from '../components/routes/user/ProtectedUserRoute';

import SideNavbar from '../components/header/SideNavbar';
import HeaderIcon from '../components/header/HeaderIcon';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Order from '../pages/Order';
import PassCommand from '../pages/user/PassCommand';
import Login from '../pages/Login';
import History from '../pages/user/History';

import PageNotFound from '../pages/PageNotFound';


const UserTemp = ({switchTheme}) => {
    
    return ( 
        <>
            <SideNavbar switchTheme={switchTheme} admin={false}/>
            <HeaderIcon switchTheme={switchTheme} admin={false}/>
            <main className="main">
                <Switch>
                    <Route exact path="/" component = {Home} />

                    <Route exact path="/commander" component = {Order} />
                    <ProtectedUserRoute exact path="/passer-commande/:date" component = {PassCommand} />
                    <Route exact path="/contact" component = {Contact} />
                    <ProtectedUserRoute exact path="/history" component = {History} />
                    <Route exact path="/mentions-legales" component = {Home} />
                    <Route exact path="/cgu-cgv" component = {Home} />
                    <ProtectedLoginRoute exact path="/connexion" component = {Login}/>

                    <Route exact component = {PageNotFound} />
                </Switch>
            </main>
        </>
    );
}

export default UserTemp;