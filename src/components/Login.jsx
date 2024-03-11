import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    const validateEmail = (email) => {
        // Expresión regular para validar el formato del correo electrónico
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleLogin = () => {
        // Validar el formato del correo electrónico
        if (!validateEmail(email)) {
            setEmailError('Por favor, introduce un correo electrónico válido.');
            return;
        }

        // Verificar si las credenciales son correctas
        if (email === 'admin@gmail.com' && password === 'admin123') {
            // Redireccionar al usuario a la página de inicio
            history.push('/home');
        } else {
            // Mostrar un mensaje de error o tomar alguna otra acción
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Iniciar sesión</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError('');
                            }}
                        />
                        {emailError && <p className="error-message">{emailError}</p>}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="button" onClick={handleLogin} className="login-btn">Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
};

export default withRouter(Login);
