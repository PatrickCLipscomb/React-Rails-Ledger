class RecordForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      date: '',
      amount: ''
    }
  }
  render() {
    return(
      <form className="form-inline">
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
        <button type="submit" className="btn btn-primary" disabled={!this.valid}>
                    Create Record
                </button>
      </form>
    )
  }
  handleChange(event) {
    var name = event.target.name
    this.setState({"" + name: event.target.value})
  }
  valid() {
    return this.state.title && this.state.date && this.state.amount;
  }
}
