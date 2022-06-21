import React, {useEffect, useState} from 'react'
import Layout from '@components/layout'
import Table, {TableCell, TableRow} from '@components/table'
import api from '@/util/api'
import {isLoggedIn} from '@/util/auth'
import redirectTo from '@/util/redirectTo'
import withAuth from '@components/withAuth'

const Home = ({user}) => {
    const [tickets, setTickets] = useState([])


    useEffect(() => {
        api().get('/api/ads').then(response => setTickets(response.data.ads))

        console.log(tickets)
    }, [])

    return (
        
        <Layout>
            <Table>
                <thead>
                    <TableRow>
                        <TableCell isHeader={true}>#</TableCell>
                        <TableCell isHeader={true}>Name</TableCell>
                        <TableCell isHeader={true}>Start</TableCell>
                        <TableCell isHeader={true}>End</TableCell>

                    </TableRow>
                </thead>
                <tbody>
                    {
                        tickets.map((ticket, i) => (

                            <TableRow key={ticket.id} isEven={(i + 1) % 2 === 0}>
                                <TableCell>{ticket.id}</TableCell>
                                <TableCell>{ticket.name}</TableCell>
                                <TableCell>{ticket.start_time}</TableCell>
                                <TableCell>{ticket.end_time}</TableCell>
                            </TableRow>
                        ))
                    }
                </tbody>
            </Table>
        </Layout>
    )
}

export default withAuth(Home)
