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
            <div className='session-background'>

                <form onSubmit={this.handleSubmit} className="login-form-box">
                        
                        <p className="login-text">{this.props.formType}</p>

                        <button onClick={this.demoLogin} >Situo Live Demo</button>

                        <span className="separator-row">
                        <span className='separator-horizontal'></span>
                        <span className='separator-label'>or</span>
                        <span className='separator-horizontal'></span>
                        </span>

                    {this.renderErrors()}
                       
                        <label>Email Address
                                <input            
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                id='top-input'
                            />
                        </label>
                                            <div className="login-form">
                                                {this.props.navLink.props.to === '/login' ?
                                                <label>Name
                                                    <br />
                                                        <input 
                                                        className="splash-input"
                                                        type="text"
                                                        value={this.state.name}
                                                        onChange={this.update('name')}
                                                        className="login-input"
                                                        />
                                                </label> 
                                                : null
                                            }
                        <label>Password
                                <input 
                            
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>

                        <span/>
                        
                        <button className="session-submit" >{this.props.formType}</button>
                    </div>
                </form>

                    
                <p id="splash-button">{this.props.navLinkPhrase} <button id="splash-button">{this.props.navLink}</button></p>

                <ul className='splash-sublist'>
                    <a className='navli' href="#">Link 1</a>
                    <a className='navli' href="#">Link 2</a>
                    <a className='navli' href="#">Link 3</a>
                    <a className='navli' href="#">Link 4</a>
                </ul>
                
                <ul className='splash-sublist small'>
                    <a className='navli' href="#">Link 1</a>
                    <a className='navli' href="#">Link 2</a>
                    <a className='navli' href="#">Link 3</a>
                    <a className='navli' href="#">Link 4</a>
                </ul>
                
            </div>
        
        )
    }
}

export default SessionForm;