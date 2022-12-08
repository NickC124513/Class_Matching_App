import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { useQuery, gql } from '@apollo/client'

const GET_DATA_QUERY = gql`
  {
    courseStudents(nuid: 50582116) {
      course
      students
    }
  }
`
export default function courseStudents() {
  const { loading, error, data } = useQuery(GET_DATA_QUERY)

  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  const columns = [
    {
      dataKey: 'course',
      label: 'Course',
    },
    {
      dataKey: 'students',
      label: 'Students',
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
        {data.courseStudents.map((course) => (
          <TableRow key={course.course}>
            {columns.map((column) => (
              <TableCell key={column.dataKey}>
                {course[column.dataKey]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
