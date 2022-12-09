import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useQuery, gql } from '@apollo/client'

const GET_DATA_QUERY = gql`
  {
    friendCourses(nuid: 50582116) {
      courses
      friend
    }
  }
`
export default function RecentReviews() {
  const { loading, error, data } = useQuery(GET_DATA_QUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const columns = [
    {
      dataKey: 'friend',
      label: 'Friend',
    },
    {
      dataKey: 'courses',
      label: 'Courses',
    },
  ]
  console.log('data')
  console.log(data)
  console.log(error)

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.dataKey}>{column.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.friendCourses.map((courses) => (
          <TableRow key={courses.courses}>
            {columns.map((column) => (
              <TableCell key={column.dataKey}>
                {courses[column.dataKey]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
