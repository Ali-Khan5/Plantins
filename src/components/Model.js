import React from "react";
import { connect } from "react-redux";
import {
  changeName,
  GoogleSignin,
  facebookSignin
} from "../store/actions/action";
const Model = props => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h3
              id="exampleModalLabel"
              className="modal-title w-100 text-center"
              style={{ color: "black" }}
            >
              Login
            </h3>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <button
              type="button"
              data-dismiss="modal"
              className="btn  btn-lite  btn-block "
              style={{ backgroundColor: "#d62d20", color: "white" }}
              onClick={() => {
                props.PerformGoogleSignIn();
              }}
              >
              Login using Google
            </button>
            <button
              type="button"
              data-dismiss="modal"
              className="btn  btn-outline-primary btn-block "
              style={{ backgroundColor: "#3b5998 ", color: "white" }}
              onClick={() => {
                props.PerformFBSignIn();
              }}
            >
              Login using Facebook
            </button>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function mapStateToProp(state) {
  return {
    userName: state.reducer.name,
    CurrentUser: state.reducer.currentUser
  };
}
function mapDispatchToProp(dispatch) {
  return {
    changeUserName: () => {
      dispatch(changeName());
    },
    PerformGoogleSignIn: () => {
      dispatch(GoogleSignin());
    },
    PerformFBSignIn: () => {
      dispatch(facebookSignin());
    }
  };
}

export default connect(
  mapStateToProp,
  mapDispatchToProp
)(Model);
