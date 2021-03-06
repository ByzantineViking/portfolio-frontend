import React from 'react'
import { setPage, toggleDrawer } from '../reducers/navigationReducers'
import {
    Typography,
    Button,
    AppBar,
    Toolbar,
    useScrollTrigger,
    // Floating Action Button
    Slide
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        color: 'secondary',
    },
    title: {
        flexGrow: 1,
    },
    // Empty div at the same height at of the top menu
    offset: theme.mixins.toolbar,
}))

const HideOnScroll = ({ children }) => {
    return (
        <Slide appear={false} direction="down" in={!useScrollTrigger()}>
            {children}
        </Slide>
    )
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
}
const Menu = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>

            <HideOnScroll {...props}>
                <AppBar color="secondary">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Teemu Saravirta
                        </Typography>
                        <Button color="inherit" component={Link} to="/">Projects</Button>
                        <Button color="inherit" component={Link} to="/about">About Me</Button>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <div className={classes.offset} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        page: state.page,
        open: state.open

    }
}

export default connect(mapStateToProps, { setPage, toggleDrawer })(Menu)