import {useRef} from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {logIn} from "../../../store/slices/auth";

export function LoginPage() {
    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (e: React.ChangeEvent<any>) => {
        e.preventDefault();

        dispatch(logIn);
        navigate('/');
    }

    return (
        <form onSubmit={handleSubmit} className='loginForm'>
            <h1>Вход</h1>
            <div>
                <input
                    ref={loginRef}
                    type='text'
                    placeholder='Логин'
                    name='login'
                    required
                />
            </div>
            <div>
                <input
                    ref={passwordRef}
                    type='password'
                    placeholder='Пароль'
                    name='password'
                    required
                />
            </div>
            <div>
                <button type='submit'>Войти</button>
            </div>
        </form>
    );
}