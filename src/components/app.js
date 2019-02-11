import React from 'react';
import Table from './table';

const students = [
    {
        name: 'Bill Darnall',
        course: 'LFZ',
        grade: ' 99'
    },
    {
        name: 'Christine Than',
        course: 'Coughing',
        grade: ' 50'
    },
    {
        name: 'Sean Jaw',
        course: 'K-Pop',
        grade: ' 75'
    },
]

const App = () => {
    return (
        <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
        </div>
    )
}


export default App;
