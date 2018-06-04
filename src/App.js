import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();

    this.state = { guests: [], name: '', surname: '' }

    this.newGuest = this.newGuest.bind(this);
    this.firstName = this.firstName.bind(this);
    this.lastName = this.lastName.bind(this)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={this.newGuest}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className="form-control" name="first-name" value={this.state.name} onChange={this.firstName}/>
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className="form-control" name="last-name" value={this.state.surname} onChange={this.lastName}/>
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                { this.state.guests.map((guest) =>
                  <tr>
                    <td>{guest.name}</td>
                    <td>{guest.surname}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  firstName(e) {
    this.setState({ name: e.target.value});
  }

  lastName(e) {
    this.setState({ surname: e.target.value});
  }

  newGuest(e) {
    this.setState({
      guests: this.state.guests.concat({ name: this.state.name, surname: this.state.surname }),
      name: '',
      surname: '',
    });
    e.preventDefault();
  }

}

export default App