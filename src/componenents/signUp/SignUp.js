import React, { useCallback } from 'react';
import { withRouter } from 'react-router';
import firebaseConfig from '../../firebase';
import Logo from '../logo/logo';
import SignUpForm from '../form/signInForm';
import { Link } from 'react-router-dom';
import setUserTeam from './SetUserTeam';

const SignUp  = ({ history }) => {
    const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, select } = event.target.elements;
    try {
        await firebaseConfig
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        setUserTeam(select.value)
        if(select.value === 'kitchen'){
            history.push('/kitchen');
        } else {
            history.push('/waitress');
        } 
    } catch (error) {
        alert(error);
    }
}, [history]);

        return(
            <>
                <header>
                    <Logo/>
                </header>
                <main>
                    <form onSubmit={handleSignUp} className="login">
                        <SignUpForm/>
                    </form>
                    
                    <Link to="/home">Voltar para a página de login</Link>
                </main>
            </>
        );
    } 

export default withRouter(SignUp);
