import { Grid } from '@material-ui/core'
import React from 'react'

export const NotFoundPage = () => {
    return (
        <Grid style={{ backgroundColor: 'gray', textAlign: 'center' }}>
            <h1 style={{ fontSize: '75px', padding: '100px', color: 'purple' }}> Page not found</h1>
        </Grid>
    )
}

export default NotFoundPage