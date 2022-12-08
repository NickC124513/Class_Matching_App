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

const GET_DATA_QUERY = gql`
  {
    student(nuid: 50582116) {
      nuid
      full_name
    }
  }
`

export default function Deposits() {
  const classes = useStyles()

  const { loading, error, data } = useQuery(GET_DATA_QUERY)
  console.log('data')
  console.log(data)
  if (error) return <p>Error</p>
  return (
    <React.Fragment>
      <Title>User Info</Title>
      <Typography component="p" variant="h4">
        {loading ? 'Loading...' : data.student.full_name}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Full Name
      </Typography>
      <Typography component="p" variant="h6">
        {loading ? 'Loading...' : data.student.nuid}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        NUID
      </Typography>
    </React.Fragment>
  )
}
