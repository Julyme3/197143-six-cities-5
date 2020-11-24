import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withForm from "./with-form";

const noop = () => {};
const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withForm(MockComponent);
test(`withForm is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      id={1}
      commentPostAction={()=>{}}
      isLoading={true}
      commentStatus={true}
      setStartLoading={noop}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
