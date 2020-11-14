import React from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const InfoDivs = ({ Jobs, Value }) => {
    // Destructuring
    const { company, title, duties, dates } = Jobs[Value];
    // Return
    return (
        <div className="jobs mt-5 shadow">
            <h2>{title}</h2>
            <h4><span class="badge badge-primary">{company}</span></h4>
            <h5 className="text-secondary">{dates}</h5>
            <div>
                {duties.map((duty) => <div className="d-flex align-items-center text-primary">
                    <FaAngleDoubleRight className=" mr-5"></FaAngleDoubleRight>
                    <p className="text-secondary">{duty}</p>
                </div>)}
            </div>
        </div>
    )
}

export default InfoDivs