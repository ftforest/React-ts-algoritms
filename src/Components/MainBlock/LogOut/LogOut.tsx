import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate} from 'react-router-dom';
import {logOut} from "../../../store/slices/auth";
//import { ReactComponent as ArrowLeftIcon } from '../../../../assets/images/left-arrow.svg';
//import './LogOut.css';


export const LogOut = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logOut2 = () => {
    dispatch(logOut(0));
    navigate('/login');
  }

  return (
    <section className='sidebarBottom'>
      <button onClick={logOut2}>
        {/*<ArrowLeftIcon height={25} width={25} />*/}
        <span>Выход</span>
      </button>
    </section>
  );
};
