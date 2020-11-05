import React, {PureComponent} from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: null,
      };
      this.setActiveItem = this.setActiveItem.bind(this);
    }

    setActiveItem(value) {
      this.setState({
        activeItem: value,
      });
    }

    render() {
      return (
        <Component
          onChangeActiveItem={this.setActiveItem}
          activeItem={this.state.activeItem}
          {...this.props}
        />
      );
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
