import * as React from "react";
import renderer from "react-test-renderer";

import { SMButton } from "../atoms/SMButton";

it(`Atoms renders correctly`, () => {
  const tree = renderer.create(<SMButton />).toJSON();

  expect(tree).toMatchSnapshot();
});
