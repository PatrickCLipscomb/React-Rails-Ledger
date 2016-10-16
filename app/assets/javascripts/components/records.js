class Records extends Component {
  constructor(props) {
    super()
    this.state = {
      records: props.data
    }
  }
  render () {
    const records = this.state.records.map( (record) =>
      <Record key={record.id} record={record} />
  )
    return(
      <div className="records">
        <h2 className="title">Records</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {records}
          </tbody>
        </table>
      </div>
    )
  }
}
