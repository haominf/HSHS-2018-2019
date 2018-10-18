import React from 'react';
import { withRouter } from 'react-router-dom';
import Background from '../background.jpg';
import {SignInCard} from './cards/SignInCard'

const SignInPage = ({ history }) =>
    <div style={
            {
                height: "100%",
                width: "100%",
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                backgroundImage: `url(${Background})`,
                backgroundSize: 'cover'
                //"url(" + { Background } + ")"
                //margin: '10% auto',
            }}>

        <SignInCard history = {history}/>
    </div>

export default withRouter(SignInPage);
