import { useState, useEffect, useRef } from 'react'
const terpData= require('../../../models/seed')


export const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Nose',
        accessor: 'nose',
    },
    {
        Header: 'Properties',
        accessor: 'properties',
    },
    {
        Header: 'Strains',
        accessor: 'strains'
    }
];
export default function Terpines() {
    const [terpines, setTerpines] = useState([])
    const [foundTerpine, setFoundTerpine] = useState(null)
    const [terpine, setTerpine] = useState({
        name: '',
        nose: '',
        properties: '',
        strains: ''
    })
    const ref = useRef(null)
    const inputRef = useRef(null)
    
    const handleChange = (evt) => {
        setTerpine({ ...terpine, [evt.target.name]: evt.target.value })
    }


    // index
    const getTerpines = async () => {
        try {
            const response = await fetch('/api/terpines')
            const data = await response.json()
            setTerpines(data)
        } catch (error) {
            console.error(error)
        }
    }
    // delete
    const deleteTerpine = async (id) => {
        try {
            const response = await fetch(`/api/terpines/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setFoundTerpine(data)
        } catch (error) {
            console.error(error)
        }
    }
    // update
    const updateTerpine = async (id, updatedData) => {
        try {
            const response = await fetch(`/api/terpines/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ updatedData })
            })
            const data = await response.json()
            setFoundTerpine(data)
        } catch (error) {
            console.error(error)
        }
    }
    // create
    const createTerpine = async () => {
        try {
            const response = await fetch(`/api/terpines`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...terpine })
            })
            const data = await response.json()
            setFoundTerpine(data)
            setTerpine({
               name: '',
               nose: '',
               properties: '',
               strains: ''
            })
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getTerpines()
    }, [foundTerpine])

    return (
        <>
            {'Terpine Name'}<input value={terpine.name} onChange={handleChange} name="name"></input><br />
            {'Nose '}<input value={terpine.nose} onChange={handleChange} name="nose"></input><br />
            {'Properties '}<input value={terpine.properties} onChange={handleChange} name="properties"></input><br />
            {'Strains '}<input value={terpine.strains} onChange={handleChange} name="strains"></input><br />
             <button onClick={() => createTerpine()}>Create A New New Acct</button>
            {
                foundTerpine ? <div>
                    <h2>{foundTerpine.name}</h2>
                    <h2>{foundTerpine.nose}</h2>
                    <h2>{foundTerpine.properties}</h2>
                    <h2>{foundTerpine.strains}</h2>
                   
                </div> : <>No New Terpoines Found </>
            }
            <hr></hr>
            {
                terpines && terpines.length ? (<ul>
                    {
                        terpines.map((terpine) => {
                            return (
                                


                            
                                    <table>
                                        <tbody>
                                            {terpData.map(terp)=> 
                                            <tr key={terp._id}>
                                                <td>  {terp.name}  </td>
                                                <td>  {terp.nose} </td>
                                                <td>{terp.properties}   </td>
                                                <td> {terp.strains}  </td>
                                               
                                                <td> <button onClick={() => deleteTerpine(terpine._id)}>X</button> </td>
                                                <td>  <button onClick={() => updateTerpine(terpine._id)}>Edit</button> </td>
                                            </tr>}
                                        </tbody>
                                    </table>
                            
                            )
                        })
                    }
                </ul>) : <h1>Add Terpines</h1>
            }
        </>
    )
}
