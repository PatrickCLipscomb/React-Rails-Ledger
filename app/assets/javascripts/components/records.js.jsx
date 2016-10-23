

class Records extends React.Component {
  constructor(props) {
    super()
    this.state = {
      records: props.data
    }
  }
  render () {
    const records = this.state.records.map( (record) =>
      <Record key={record.id} record={record} onEdit={this.editRecord.bind(this)} onDelete={this.deleteRecord.bind(this)}/>
  )
    return(
      <div className="records">
        <h2 className="title">Records</h2>
        <AmountBox type="success" amount={this.credits()} text="Credit" />
        <AmountBox type="danger" amount={this.debits()} text="Debit" />
        <AmountBox type="info" amount={this.balance()} text="Balance" />
        <RecordForm handleNewRecord={this.addRecord.bind(this)} />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records}
          </tbody>
        </table>
      </div>
    )
  }
  editRecord(record, data) {
    var index = this.state.records.slice().indexOf(record)
    this.setState({records: this.state.records.splice(index, 1, data)})
  }
  addRecord(record) {
    console.log(this.state.records)
    var records = this.state.records.slice()
    records.push(record)
    this.setState({records: records})
  }
  deleteRecord(record) {
    console.log(this.state.records)
    var records = this.state.records.slice()
    var index = records.indexOf(record)
    this.setState({records: records.splice(index, 1)})
  }
  addRecord(record) {
    var updatedRecords = this.state.records
    updatedRecords.push(record)
    this.setState({records: updatedRecords})
  }
  credits() {
    return this.state.records
      .filter((record) => {
        return record.amount >= 0
      })
      .reduce((previous, current) => {
        return previous + parseFloat(current.amount)
      }, 0)
  }
  debits() {
    return this.state.records
      .filter((record) => {
        return record.amount < 0
      })
      .reduce((previous, current) => {
        return previous + parseFloat(current.amount)
      }, 0)
  }
  balance() {
    return this.credits() + this.debits()
  }
}
