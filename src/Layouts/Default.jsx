import React from 'react'
import Navbar from './Navbar'

const Default = (props) => {
    return (
        <div>
            <Navbar />
            {props.Page}
            <footer className="p-3 text-center">
                <h6 className="mb-3">Shaik Thoufeeq</h6>
                <p>Shaik Thoufeeq © All CopyRights Reserved 2024</p>
            </footer>
        </div>
    )
}

export default Default
