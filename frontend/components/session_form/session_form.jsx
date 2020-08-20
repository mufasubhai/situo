import React from 'react';
import { Link } from 'react-router-dom';


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
        this.props.demoStart(demoUser)
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors() {
        return (
            <ul className='session-error-list'>
                <span className='session-error-pad'>

               
                {this.props.errors.map((error, i) => (
                    <li className="session-error" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
                </span>
            </ul>
        );
        
    }  

    render () {
        
        return (
            <div className='session-background'>
            
                <Link to='/'><img src={window.logoWhite} className='session-logo' /></Link>
                
                
                <div className="login-form-box">
                    <p className="login-text">{this.props.formType}</p>


                   
                        <div className="login-span">
                            <button onClick={this.demoLogin} className="demo-button" >Situo Live Demo</button> 
                                <span className="separator-row">
                                <span className='separator-horizontal'></span>
                                <span className='separator-label'>or</span>
                                <span className='separator-horizontal'></span>
                                </span>
                        </div>

                            <span className="errors-span">

                                         {this.renderErrors()}
                            </span>
                 

                <form onSubmit={this.handleSubmit} >                        


                       
                        <label className='input-text'>Email Address
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
                        <label className='input-text'>Name
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
                        <label className='input-text bottom-input'>Password
                                <input 
                            
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>

                        <span/>
                        <span className="submit-wrapper">
                            <button className="session-submit" >{this.props.formType}</button>
                        </span>
                    </div>
                </form>
                </div>

            <div className="session-footer">

                <p className='footer-el footer-top'>{this.props.navLinkPhrase}<button id="session-button">{this.props.navLink}</button></p>

                    <ul className='footer-el footer-list'>
                    <a className='navli' href="#">Link 1</a>
                    <a className='navli' href="#">Link 2</a>
                    <a className='navli' href="#">Link 3</a>
                    <a className='navli' href="#">Link 4</a>
                </ul>
                
                    <ul className='footer-el footer-list'>
                    <a className='navli' href="#">Link 1</a>
                    <a className='navli' href="#">Link 2</a>
                    <a className='navli' href="#">Link 3</a>
                    <a className='navli' href="#">Link 4</a>
                </ul>
            </div>
                
            </div>
        
        )
    }
}

export default SessionForm;