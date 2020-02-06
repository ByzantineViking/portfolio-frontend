import React, { useEffect } from 'react'
import '../stylesheets/LandingPage.css'
import { connect } from 'react-redux'
import ScrollMagic from 'scrollmagic'
import staircase from './LandingPageComponents/Images/grand_staircase_1.png'
import enemy from './LandingPageComponents/Images/enemy.svg'

/* CssBaseline:
 * Removes margin in all brosers
 * Default Material Design background color is applied
 * box-sizing is set globally on the <html> element to border-box, every element is declared to inherit this property
 * font antialiasing is enabled for the Roboto font.
 */
import { CssBaseline, Container, Typography, Button, Paper, Box } from '@material-ui/core'
import Me from './LandingPageComponents/Me'
import ProjectCard from './LandingPageComponents/ProjectCard'


const LandingPage = (props) => {
    // As scrollmagic pins are not compatible with React, use this to set pins visible
    const pinDebug = 'pin'
    const controller = new ScrollMagic.Controller()
    const revealWelcome = document.getElementsByClassName('welcome-item')
    const revealThreeD = document.getElementsByClassName('threeD')
    const revealJunction = document.getElementsByClassName('junction')
    const eventLogger = (event) => {
        console.log('Event fired!', event.type)
    }
    useEffect(() => {
        new ScrollMagic.Scene({
            triggerElement: '#pin1',
            triggerHook: 0.25,
        })
            .setClassToggle(revealWelcome[0], 'hidden')
            .addTo(controller) // assign the scene to the controller
            .on('start leave', eventLogger)

    })
    useEffect(() => {
        new ScrollMagic.Scene({
            triggerElement: '#pin2',
            triggerHook: 0.8,
            duration: '80%',
        })
            .setClassToggle(revealThreeD[0], 'visible')
            .addTo(controller) // assign the scene to the controller
            .on('start leave', eventLogger)

    })
    useEffect(() => {
        new ScrollMagic.Scene({
            triggerElement: '#pin2',
            triggerHook: 0.8,
            duration: '80%',
        })
            .setClassToggle(revealThreeD[1], 'visible')
            .addTo(controller) // assign the scene to the controller
            .on('start leave', eventLogger)

    })
    useEffect(() => {
        new ScrollMagic.Scene({
            triggerElement: '#pin3',
            triggerHook: 0.6,
        })
            .setClassToggle(revealJunction[0], 'visible')
            .addTo(controller) // assign the scene to the controller
            .on('start leave', eventLogger)
    })
    useEffect(() => {
        new ScrollMagic.Scene({
            triggerElement: '#pin3',
            triggerHook: 0.6,
        })
            .setClassToggle(revealJunction[1], 'visible')
            .addTo(controller) // assign the scene to the controller
            .on('start leave', eventLogger)
    })
    return(
        <React.Fragment>
            <CssBaseline />
            <Container>
                <div className="landing-grid">
                    <Me/>
                    <div id="pin1">{pinDebug + (pinDebug ? '1' : '')}</div>
                    <div id="pin2">{pinDebug + (pinDebug ? '2' : '')}</div>
                    <ProjectCard
                        className="threeD-project-card threeD"
                        title="threeD"
                        body="A from-scratch 3D engine"
                    />
                    <img className="threeD-staircase threeD" src={staircase}/>
                    <div id="pin3">{pinDebug + (pinDebug ? '3' : '')}</div>
                    <ProjectCard
                        className="junction-project-card junction"
                        title="Junction"
                        body="Graphics for a futuristic browser game"
                    />
                    <img className="junction-enemy junction" src={enemy} />
                </div>

            </Container>
        </React.Fragment>
    )
}

export default connect()(LandingPage)