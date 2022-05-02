import React, {useEffect} from "react"
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
  const data = React.useMemo(
    () => props.employees.map(el => ({
        ...el,
      })), [props.employees]
  )

  const columns = React.useMemo(
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
      Filter: DefaultColumnFilter,
    }),
    []
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
    preGlobalFilteredRows,
    setGlobalFilter,
    state
  } = useTable({
      columns,
      data,
      initialState: { pageIndex: 0},
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  useEffect(() => {
    setPageSize(8)
  }, [])

  /**
   * function for filtering data
   * @param preGlobalFilteredRows
   * @param globalFilter
   * @param setGlobalFilter
   * @returns {JSX.Element}
   * @constructor
   */
  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter
  }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 400)

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
            autoFocus={true}
          />
      </span>
    )
  }

  /**
   * function for rendering the filter
   * @param filterValue
   * @param preFilteredRows
   * @param setFilter
   * @returns {JSX.Element}
   * @constructor
   */
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

  return (
    <section className={`${classes['employees-section']}`}>
      <h2 className={`${classes['employees-section__title']}`}>Current Employees</h2>

      <table {...getTableProps()} className={`${classes['table']}`}>

        <thead style={{display: 'table-header-group'}}>
        {/*<tr className={`${classes['table-row__filter']}`} role={"row"}>*/}
        <tr>
          {/*<th style={{display: 'flex', alignItems: 'center', width: '40%', marginRight: 'auto'}}>*/}
          <th>
            Show
            <select
              className={classes['select-entries']}
              value={pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[5, 8, 20, 50].map(pageSize => (
                <option key={pageSize} value={pageSize} >
                  {pageSize}
                </option>
              ))}
            </select> entries
          </th>
          {/*<th style={{display: 'flex', alignItems: 'center', width: '40%', marginLeft: 'auto'}}>*/}
          <th>
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </th>
        </tr>
        {// Loop over the header rows
          headerGroups.map(headerGroup => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()} >
              {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                  // Apply the header cell props
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
      <div className={`${classes['pagination']}`}>
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