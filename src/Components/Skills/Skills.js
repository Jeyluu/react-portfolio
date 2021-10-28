import React, {useState} from 'react'

export default function Skills() {

    const [skillArr] = useState([
        {skill: "HTML"},
        {skill: "CSS"},
        {skill: "Javascript"},
        {skill: "PHP"}
    ])

    return (
        <div>
            <h1>Mes compétences</h1>
            <div>
                <ul className="skill-list">
                    {skillArr.map((skill, index) => {
                        return(
                            <li>{skill.skill}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
