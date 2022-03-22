import React, {Fragment} from "react"
import classes from './EmployeesList.module.css'
import {
  useTable,
  useSortBy,
  usePagination,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce
} from "react-table"

const EmployeesList = (props) => {

  // console.warn(props)
  const data = React.useMemo(
    () => props.employees.map(el => ({
        ...el,
      })), [props.employees]
  )

  const columns = React.useMemo(
  //   By default, the sorting will be alphanumeric. This can be changed in your column
    //   object. Other options include basic and datetime. Note that if you're
    //   planning on sorting numbers between 0 and 1, basic sorting will be more accurate.


    () => [
      {
        Header: 'First Name',
        accessor: 'firstname', // accessor is the "key" in the data
        sortType: 'basic'
      },
      {
        Header: 'Last Name',
        accessor: 'lastname',
        sortType: 'basic'
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
      },
      {
        Header: 'Department',
        accessor: 'department',
      },
      {
        Header: 'Birth Date',
        accessor: 'birthDate',
      },
      {
        Header: 'Street',
        accessor: 'street',
      },
      {
        Header: 'City',
        accessor: 'city',
      },
      {
        Header: 'State',
        accessor: 'state',
      },
      {
        Header: 'Zip Code',
        accessor: 'zipCode',
      },
    ],
    []
  )

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )

  const instance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0},
      defaultColumn,
      // filterTypes
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    // filter
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
    state
  } = useTable(instance)




  // FILTER UI
  // TODO CHECK HERE FILTER DEBOUNCE / SUBMIT
  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 2000)

    return (
      <span>
      Search:{' '}
        <input
          value={value || ""}
          onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} employees...`}
          style={{
            fontSize: '1.1rem'
          }}
        />
    </span>
    )
  }

  function DefaultColumnFilter({
    column: { filterValue, preFilteredRows, setFilter }
  }) {
    const count = preFilteredRows.length

    return (
      <input
        value={filterValue || ''}
        onChange={e => {
          setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    )
  }

  // This is a custom filter UI for selecting
// a unique option from a list
  function SelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id },
  }) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
      const options = new Set()
      preFilteredRows.forEach(row => {
        options.add(row.values[id])
      })
      return [...options.values()]
    }, [id, preFilteredRows])

    // Render a multi-select box
    return (
      <select
        value={filterValue}
        onChange={e => {
          setFilter(e.target.value || undefined)
        }}
      >
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }










  // global return below
  return (
    <section className={`${classes['employees-section']}`}>
      <h2 className={`${classes['employees-section__title']}`}>Current Employees</h2>

      <table {...getTableProps()} className={`${classes['table']}`}>
        <div className={`${classes['table-row__filter']}`}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            Show
            <select
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {/*{[10, 20, 30, 40, 50].map(pageSize => (*/}
              {[5, 3, 20, 50].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select> entries
          </div>
          <div>
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </div>
        </div>
        <hr style={{width: '100%', opacity: '.5', marginTop: '0'}}/>

        <thead style={{display: 'table'}}>
        {// Loop over the header rows
          headerGroups.map(headerGroup => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()} >
              {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                  // Apply the header cell props
                  // <th {...column.getHeaderProps()}>
                  // <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {// Render the header
                      column.render('Header')}
                    <span>
                      {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </span>
                  </th>
                ))}
            </tr>
          ))}


        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()} className={`${classes['table-body']}`}>
        {// Loop over the table rows
          page.map(row => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <tr {...row.getRowProps()} className={`${classes['table-row']}`}>
                {// Loop over the rows cells
                  row.cells.map(cell => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {// Render the cell contents
                          cell.render('Cell')}
                      </td>
                    )
                  })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>{' '}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>{' '}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '}
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
      </div>
    </section>
  )
}

export default EmployeesList