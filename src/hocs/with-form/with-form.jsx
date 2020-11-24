import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const MIN_LENGTH_COMMENT = 50;
const MAX_LENGTH_COMMENT = 300;

const withForm = (Component) => {
  class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: ``,
        comment: ``,
        isDisabled: true,
      };

      this.handleFieldChange = this.handleFieldChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (this.props.commentStatus && this.props.commentStatus !== prevProps.commentStatus) {
        this.setState({
          rating: ``,
          comment: ``,
          isDisabled: true,
        });
      }
    }

    checkForm() {
      const {rating, comment} = this.state;
      let check = false;
      const commentLength = comment.trim().length;
      const isCommentValide = commentLength >= MIN_LENGTH_COMMENT && commentLength <= MAX_LENGTH_COMMENT;
      const isRatingValide = rating !== ``;

      if (isCommentValide && isRatingValide) {
        check = true;
      }
      return check;
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      this.setState({
        [name]: value
      });

      if (this.checkForm()) {
        this.setState({
          isDisabled: false,
        });
      } else {
        this.setState({
          isDisabled: true,
        });
      }
    }

    handleSubmit(evt) {
      const {commentPostAction, id, setStartLoading} = this.props;
      evt.preventDefault();

      const data = {
        rating: this.state.rating,
        comment: this.state.comment,
      };
      setStartLoading();
      commentPostAction(id, data);
    }

    render() {
      const {isLoading} = this.props;
      const isDisabled = isLoading || this.state.isDisabled;

      return (
        <Component
          onFieldChange={this.handleFieldChange}
          onSubmit={this.handleSubmit}
          isDisabled={isDisabled}
          ratingValue={this.state.rating}
          commentValue={this.state.comment}
        />
      );
    }
  }

  WithForm.propTypes = {
    commentPostAction: PropTypes.func,
    id: PropTypes.string,
    setStartLoading: PropTypes.func,
    isLoading: PropTypes.bool,
    commentStatus: PropTypes.bool,
  };

  return WithForm;
};

export default withForm;
