import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

const OPTIONS = [
  {
    id: 1,
    target: 'km',
    output: 'miles',
    factor: 0.62137
  },
  {
    id: 2,
    target: 'miles',
    output: 'km',
    factor: 1.6093
  },
  {
    id: 3,
    target: 'feets',
    output: 'metres',
    factor: 3.281
  },
  {
    id: 4,
    target: 'metres',
    output: 'feets',
    factor: 0.30487
  },
  {
    id: 5,
    target: 'cms',
    output: 'inches',
    factor: 2.54
  },
  {
    id: 6,
    target: 'inches',
    output: 'cms',
    factor: 0.3937
  }
]
const Converter = () => {
  const [value, setValue] = useState(0)
  const [result, setResult] = useState({ result: 0, resulType: '' })
  const [type, setType] = useState('')

  const handleType = (e) => {
    const value = e.target.value
    console.log(value)
    setType(value)
  }
  useEffect(() => {
    if (type) {
      const selectedOption = OPTIONS.find(obj => obj.target === type)
      setResult({ result: value / selectedOption.factor, resulType: selectedOption.output })
    }
  }, [value, type])
  return (
    <div className={styles.converter}>
      <h2>convert</h2>
      <div className={styles.inputs}>
        <select name="type" onChange={handleType} defaultValue={type}>
          <option disabled value=''>Select one...</option>
          {
            OPTIONS.map(opt => {
              return (
                <option key={opt.id} value={opt.target} >{`${opt.target} -> ${opt.output}`}</option>
              )
            })
          }
        </select>
        <input type="number" name={value} onChange={e => setValue(e.target.value)}/><span>{type}</span>
      </div>
      <div className={styles.results}>
        <button>♥</button>
        <p>{result.result} {result.resulType}</p>
      </div>
    </div>
  )
}

export default Converter
