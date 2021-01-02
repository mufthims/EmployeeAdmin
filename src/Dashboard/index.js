import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap'
import employees from './fakedata.json'

const Dashboard = () => {
    const [employee, setEmployee] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setEmployee(employees.user)
        }, 500)

    }, [])

    return (
        <Container fluid>
            <h1>Employee List</h1>
            <Table striped bordered responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Age</th>
                        <th>Gender</th>

                    </tr>
                </thead>
                <tbody>
                    {employee.map((list, index) => {
                        return (
                            <tr key={index}>
                                <td>{list.id}</td>
                                <td>{list.name}</td>
                                <td>{list.email}</td>
                                <td>{list.phoneNo}</td>
                                <td>{list.age}</td>
                                <td>{list.gender}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default Dashboard