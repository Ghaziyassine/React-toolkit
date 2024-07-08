import Keycloak from 'keycloak-js';
import React, { useEffect, useRef, useState } from 'react';

const useAuth = () => {
    const [isLogin, setLogin] = useState(false);
    const client =new Keycloak({
        url: import.meta.env.VITE_KEYCLOAK_URL,
        realm:import.meta.env.VITE_KEYCLOAK_REALM ,
        clientId:import.meta.env.VITE_KEYCLOAK_CLIENT
    });
   
    const isRun = useRef(false);
    
useEffect(()=>{
    if(isRun.current) return;
    isRun.current = true;

client.init({onLoad:"login-required"}).then((res)=>setLogin(res));

},[]);

    return isLogin;
};

export default useAuth;