import { useEffect, useState } from 'react'

interface Person {
  name: string
  age: number
  skills?: string[]
}

function App() {
  const [person, setPerson] = useState<Person | null>(null)

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPerson(data)
      })
      .catch(err => console.log(err.message))
  }, [])

  return (
    <div>
      {person && (
        <>
          <h1>Frontend</h1>
          <h2>{person.name}</h2>
          <h3>{person.age}</h3>
          {person.skills && (
            <ul>
              {person.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  )
}

export default App
