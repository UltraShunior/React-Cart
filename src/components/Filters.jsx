import { useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import './Filters.css'

export function Filters () {
  const { filters, setFilters } = useFilters()

  const minPriceFilterId = useId()
  const maxPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event) => {
    let newvalue = event.target.value
    setFilters(prevState => ({
      ...prevState,
      minPrice: newvalue
    }))
  }

  const handleChangeMaxPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      maxPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
      <span>Min:</span>
        <input
          type='number'
          id={minPriceFilterId}
          placeholder='min'
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
      </div>
      <div>
      <span>Max:</span>
        <input
          type='number'
          id={maxPriceFilterId}
          placeholder='max'
          min={filters.minPrice}
          max='1000'
          onChange={handleChangeMaxPrice}
          value={filters.maxPrice}
        />
      </div>   

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>Todas</option>
          <option value='laptops'>Portátiles</option>
          <option value='smartphones'>Celulares</option>
        </select>
      </div>

    </section>

  )
}
