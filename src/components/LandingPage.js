import React from 'react'

/* CssBaseline:
 * Removes margin in all brosers
 * Default Material Design background color is applied
 * box-sizing is set globally on the <html> element to border-box, every element is declared to inherit this property
 * font antialiasing is enabled for the Roboto font.
 */
import { CssBaseline, Container, Typography, Button } from '@material-ui/core'

const LandingPage = (props) => {
    
    return(
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Typography variant='h3' paragraph>
                    Welcome!
            </Typography>
                <Typography variant='body1' paragraph>
                    Click below to view the source code
            </Typography>
                <Button
                    href="https://www.github.com/ByzantineViking/portfolio-frontend"
                    target="_blank"
                    variant="outlined"
                    rel="noopener noreferrer"
                    color="primary"
                    size="small"
                >
                    Code&lt;&gt;
            </Button>
            </Container>
        </React.Fragment>
    )
}


export default LandingPage