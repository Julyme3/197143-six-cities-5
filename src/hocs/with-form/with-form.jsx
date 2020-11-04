import React, {PureComponent} from "react";

const withForm = (Component) => {
  class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        review: ``
      };

      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value
      });
    }

    handleSubmit(evt) {
      evt.preventDefault();
    }

    render() {
      return (
        <Component
          onFieldChange={this.handleFieldChange}
          onSubmit={this.handleSubmit}
        />
      );
    }
  }

  return WithForm;
};

export default withForm;
