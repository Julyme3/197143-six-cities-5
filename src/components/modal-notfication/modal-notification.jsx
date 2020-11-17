import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import './modal-notification.css';
import {getContent, getIsError} from "../../store/reducers/notification/selectors";
import {connect} from "react-redux";

class ModalNotification extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {showError, content} = this.props;
    const modalClassHidden = showError ? `` : `isHidden`;

    return (
      <div className={`modal ${modalClassHidden}`} tabIndex="-1">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Error</h5>
            </div>
            <div className="modal-body">
              Error message: {content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ModalNotification.propTypes = {
  showError: PropTypes.bool,
  content: PropTypes.string,
};

const mapStateToProps = (state) => ({
  showError: getIsError(state),
  content: getContent(state),
});

export {ModalNotification};

export default connect(mapStateToProps)(ModalNotification);
