import Button from '../../UI/Button'
import classes from './Orders.module.css'

export default function Orders({orders}) {
    return <>
        <p>Your Orders</p>
        <table className={classes.table}>
            <thead className={classes.tableHead}>
                <tr>
                    <th>#</th>
                    <th>Date Created</th>
                    <th>Total Price</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, index) => (
                    <tr key={order.id}>
                        <td>{index + 1}</td>
                        <td>{new Date(order.createdAt.seconds * 1000).toLocaleDateString()}</td>
                        <td className={classes.price}>${order.orderDetails.total.toFixed(2)}</td>
                        <td>
                            <Button variant='secondary' size='small' onClick={() => { }}>
                                View Details
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}