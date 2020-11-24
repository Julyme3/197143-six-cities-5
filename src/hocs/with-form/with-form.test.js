import React from "react";
import renderer from "react-test-renderer";
import withForm from "./with-form";

const noop = () => {};
const MockComponent = () => <div />;

const MockComponentWrapped = withForm(MockComponent);
test(`withForm is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      id="2"
      commentPostAction={noop}
      isLoading={false}
      commentStatus={true}
      setStartLoading={noop}
    >
      <React.Fragment />
    </MockComponentWrapped>
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
