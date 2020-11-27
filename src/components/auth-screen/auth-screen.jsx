import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MainLayout from "../../layouts/main-layout/main-layout";
import {login} from "../../store/api-actions";

class AuthScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.emailRef = createRef();
    this.passwRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  checkForm(data) {
    return data.email !== `` && data.password !== ``;
  }

  handleSubmit(e) {
    e.preventDefault();
    const {onSubmit} = this.props;
    const data = {
      email: this.emailRef.current.value,
      password: this.passwRef.current.value,
    };
    if (this.checkForm(data)) {
      onSubmit(data);
    }
  }

  render() {
    return (
      <MainLayout
        className="page--gray page--login"
        classNameWrap="page__main--login"
      >
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              onSubmit={this.handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  ref={this.emailRef}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required=""/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  ref={this.passwRef}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required=""/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </MainLayout>
    );
  }
}

AuthScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export {AuthScreen};

export default connect(null, mapDispatchToProps)(AuthScreen);
