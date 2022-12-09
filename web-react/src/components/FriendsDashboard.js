import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import FriendCourses from './friend-courses'
export default function Dashboard() {
  const theme = useTheme()

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
  }))
  const classes = useStyles(theme)

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        {/* CourseFriends */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <FriendCourses />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
