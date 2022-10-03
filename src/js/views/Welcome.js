import React from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../components/shared/Header'
import Footer from '../components/shared/Footer'

import '../../scss/views/welcome.scss'
import '../../scss/views/view.scss'

export default function Welcome() {
    const navigate = useNavigate()
    return (
        <div id='welcome' className='view'>
            <Header/>
            <div id='welcome-description'>
                <h1 id='welcome-header'>Welcome To the Nested Context Demo</h1>
                <h3 id='welcome-message'>The purpose of this demo is explore the possible increase in runtime effeciency by reducing the amount of redundent component rendering.</h3>
                <h2>Methods of execution</h2>
                <ul id='welcome-list'>
                    <li><h3>The parent context component will host the websocket client and the main state object.</h3></li>
                    <li><h3>The parent context component will divide the main state object into pieces and distribute them with the 'value' parameter inside the render method.</h3></li>
                    <li><h3>Each child context component will host specific pieces of the main state object and will render when that piece has been changed.</h3></li>
                    <li><h3>Every component requiring the data from each sub-context will access the data using the useContext hook.</h3></li>
                    <li><h3>The end result will hopefully allow each component to re-render only when the specfied data has changed and not the entire main state object.</h3></li>
                </ul>
            </div>
            <button id='welcome-start' onPointerDown={() => navigate('/splash', {state: {modal: null, popup: null}})}>
                <h1 id='welcome-start-text'>Start Demo Here</h1>
            </button>
            <Footer/>
        </div>
    )
}