import { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap';
import '../../App.css'

const colNames = ["Strain Name", "Nose", "Properties", "Strains"]
export default function Terpines() {
    const [terpines, setTerpines] = useState([])
    const [foundTerpine, setFoundTerpine] = useState(null)
    const [terpine, setTerpine] = useState({
        name: '',
        nose: '',
        properties: '',
        strains: ''
    })

    const handleChange = (evt) => {
        setTerpine({ ...terpine, [evt.target.name]: evt.target.value })
    }

    const getTerpines = async () => {
        try {
            const response = await fetch('/api/terpines')
            const data = await response.json()
            setTerpines(data)
        } catch (error) {
            console.error(error)
        }
    }

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
            const terpinesCopy = [...terpines]
            const index = terpinesCopy.findIndex(terpine => id === terpine._id)
            terpinesCopy[index] = { ...terpinesCopy[index], ...updatedData }
            setTerpines(terpinesCopy)

        } catch (error) {
            console.error(error)
        }
    }

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
                terpines.length ? terpines.map(terpine => (
                    <Table key={terpine._id}>
                          <thead>
    <tr>
   <th>Terpine Name</th>
      <th>Nose</th>
      <th>Properties</th>
      <th>Strains</th>
    </tr>
   </thead>
   <tbody>
<td>{terpine.name}</td>
                        <td>{terpine.nose}</td>
                        <td>{terpine.properties}</td>
                        <td>{terpine.strains}</td>
                </tbody> 
                   </Table>
                ))
                    : <>No New Terpines Found </>
            }
             </>
    )
}


       