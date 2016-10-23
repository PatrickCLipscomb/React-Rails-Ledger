

class RecordForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      date: '',
      amount: ''
    }

  }
  render() {
    return(
      <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-group">
                    <input className="form-control" type="text" placeholder="Date"
                           name="date" value={this.state.date} onChange={this.handleChange.bind(this)} />
        </div>
        <div className="form-group">
                    <input type="text" className="form-control" placeholder="Title"
                           name="title" value={this.state.title} onChange={this.handleChange.bind(this)} />
                </div>
        <div className="form-group">
                    <input type="number" className="form-control" placeholder="Amount"
                           name="amount" value={this.state.amount} onChange={this.handleChange.bind(this)} />
                </div>
        <button type="submit" className="btn btn-primary" disabled={!this.valid.bind(this)}>
                    Create Record
                </button>
      </form>
    )
  }
  handleChange(event) {
    var name = event.target.name
    var obj = {}
    obj["" + name] = event.target.value
    this.setState({obj})
  }
  valid() {
    return this.state.title && this.state.date && this.state.amount;
  }
  handleSubmit(event) {
    event.preventDefault()
    $.post('', {record: this.state}, (data) => {
      this.props.handleNewRecord(data)
      this.setState({
        title: '',
        date: '',
        amount: ''
      })
    })
  }
}
