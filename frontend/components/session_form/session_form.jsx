import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    demoLogin(e) {
        e.preventDefault();
        const demoUser = {email: 'woz@woz.woz', password: 'hunter2'}
        this.props.processForm(demoUser)
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
        
    }  

    render () {
        
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                
                <br />

          
                    {this.renderErrors()}
                    <div className="login-form">
                        {this.props.navLink.props.to === '/login' ?
                            <label>Name
                                    <input type="text"
                                    value={this.state.name}
                                    onChange={this.update('name')}
                                    className="login-input"
                                    />
                            </label> 
                            : <button onClick={this.demoLogin} >Demo Situo</button>
                        }

                       
                        <br />
                        <label>Email Address
              <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password
              <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={this.props.formType}/>
                    </div>
                </form>
                <p>{this.props.navLinkPhrase} {this.props.navLink}</p> 
            </div>
        
        )
    }
}

export default SessionForm;