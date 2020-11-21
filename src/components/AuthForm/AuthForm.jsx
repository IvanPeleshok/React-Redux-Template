import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegistrationForm } from './RegistrationForm';

const authPhases = {
    login: "login",
    registation: 'registration'
}

export const AuthForm = () => {

    const [authPhase, setAuthPhase] = useState(authPhases.login);

    let renderComponent;
    if (authPhase === authPhases.login) {
        renderComponent = <LoginForm setAuthPhase={setAuthPhase} />;
    } else if (authPhase === authPhases.registation) {
        renderComponent = <RegistrationForm setAuthPhase={setAuthPhase} />;
    }

    return (
        <>
           {renderComponent}
        </>
    )

}