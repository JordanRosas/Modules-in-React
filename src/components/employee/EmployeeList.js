import React, { Component } from 'react'
import images from './images.jpg'
import './Employees.css'


export default class AnimalList extends Component {
    render () {
        return (
            <section className="employees">
            {
                this.props.employees.map(employee =>
                    <div key={employee.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={images} className="icon--employee" alt="working" />
                                {employee.name}
                                <a
                                    href="#"
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link">Delete</a>
                            </h5>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}

// properties are being read from the parent component being kennel.js 