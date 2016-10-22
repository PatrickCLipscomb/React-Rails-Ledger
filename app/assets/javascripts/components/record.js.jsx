class Record extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editable: false
    }
  }
  render() {
    return(
      this.state.editable ? this.recordForm() : this.recordRow();
    )
  }
  recordRow() {
    return(
      <tr>
        <td>
          {this.props.record.date}
        </td>
        <td>
          {this.props.record.title}
        </td>
        <td>
          {amountFormat(this.props.record.amount)}
        </td>
        <td>
          <a className="btn btn-default" onClick={this.handleToggle.bind(this)}>Edit</a>
          <a className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</a>
        </td>
      </tr>
    )
  }
  recordForm() {
    return(
      <tr>
        <td>
          <input className="form-control" type="text" defaultValue={this.props.date} ref="date" />
        </td>
        <td>
          <input className="form-control" type="text" defaultValue={this.props.title} ref="title" />
        </td>
        <td>
          <input className="form-control" type="text" defaultValue={this.props.amount} ref="amount" />
        </td>
        <td>
          <a className="btn btn-default" onClick={this.handleEdit.bind(this)} >Update</a>
          <a className="btn btn-danger" onClick={this.handleToggle.bind(this)} >Cancel</a>
        </td>
      </tr>
    )
  }
  handleEdit(event) {
    event.preventDefault()
    var newData = {
      date: React.findDOMNode(this.refs.date).value,
      title: React.findDOMNode(this.refs.title).value,
      amount: React.findDOMNode(this.refs.amount).value
    }
    $.ajax({
      method: 'PUT',
      url: "/records/" + this.props.record.id,
      dataType: 'JSON',
      data: { record: newData },
      success: ( (data) => {
        this.setState({editable: false})
        this.props.onEdit(this.props.record, data)
      })
    })
  }
  handelToggle(event) {
    event.preventDefault()
    this.setState({editable: !this.state.editable})
  }
  handleDelete(event) {
    event.preventDefault()
    $.ajax({
      method: 'DELETE',
      url: "/records/" + this.props.record.id,
      dataType: 'JSON',
      success: ( () => {
        this.props.onDelete(this.props.record)
      })
    })
  }
}
