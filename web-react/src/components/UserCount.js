import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Title from './Title'
import { useQuery, gql } from '@apollo/client'

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  navLink: {
    textDecoration: 'none',
  },
})

const GET_COUNT_QUERY = gql`
  {
    userCount
  }
`

export default function Deposits() {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_COUNT_QUERY)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Title>Total Students</Title>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.userCount}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        total students in the database
      </Typography>
    </React.Fragment>
  )
}
