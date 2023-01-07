# Class Matching App

This is a GRAND stack application that uses a relational database to display information about a user's classes and friends.

## Front-End
As per the GRAND stack, the front end is done in react. In this case, a component-driven front end is used. 

## Relational Database

The "ND" in GRAND stands for "Neo4j Database". Neo4j is a relational database that uses a proprietary language called "Cypher". One example of a query in Cypher to get all of the classes that each of your friends is in would be:
```
Get all classes of each friend
MATCH (p)-[r:IS_FRIENDS_WITH]->(s)
WHERE p.nuid = $nuid 
WITH p, s
MATCH (c:Course)-[r:INCLUDES_STUDENT]->(s)
WITH p, c, s
WITH collect(c.course_id) as courses, s
RETURN {friend: s, courses: apoc.text.join(courses, ', ')}
```
