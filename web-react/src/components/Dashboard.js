import React from 'react'
import { useTheme } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'

import ClassDistributionChart from './ClassDistributionChart'
import UserInfo from './UserInfo'
import CourseList from './CourseList'
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
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  return (
    <React.Fragment>
      <Grid container spacing={4}>
        {/* User Info */}
        <Grid item xs={12} md={10} lg={6}>
          <Paper className={fixedHeightPaper}>
            <UserInfo />
          </Paper>
        </Grid>
        {/* Course list */}
        <Grid item xs={12} md={10} lg={6}>
          <Paper className={fixedHeightPaper}>
            <CourseList />
          </Paper>
        </Grid>
        {/* Bar Chart */}
        <Grid item xs={12} md={8} lg={12}>
          <Paper className={fixedHeightPaper}>
            <ClassDistributionChart />
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
