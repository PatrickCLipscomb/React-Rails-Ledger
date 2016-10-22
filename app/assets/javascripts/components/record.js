class Record extends Component {
  render() {
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
          <a className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</a>
        </td>
      </tr>
    )
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
