import React from 'react'

const UserTable = (props) => {
    return (
        <table className="bordered">
            <thead>
                <tr>
                    <th >pregunta</th>
                    <th >Respuesta</th>
                    <th >actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.length > 0 ?
                    props.users.map(user =>(
                              <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                <button className="button muted-button" onClick={() => {props.editRow(user.id)}}>Edit</button>
                                <button className="button muted-button" onClick={() => {props.deleteUser(user.id)} }>Delete</button>
                                 </td>
                </tr>
                    )) :
                    (
                        <tr>
                            <td colSpan={3}>Sin preguntas</td>
                        </tr>
                    ) 
                }
              
            </tbody>
        </table>
            
    
    )
}

export default UserTable