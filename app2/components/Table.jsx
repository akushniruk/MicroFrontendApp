import * as React from 'react';

const Table = () => {
    return (
        <table>
            <thead>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Place</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Test#1</td>
                    <td>1000.00</td>
                    <td>Test#PLACE</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Test#2</td>
                    <td>2000.00</td>
                    <td>Test#PLACE#2</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
