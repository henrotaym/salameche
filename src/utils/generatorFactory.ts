#!/usr/bin/env node

import Scaffold from "scaffold-generator";
import { render } from "mustache";

const createGenerator = (data: Record<string, string>) =>
  new Scaffold({
    data,
    render: (template: string, view: string) =>
      render(template, view, undefined, ["{{{{", "}}}}"]),
  });

export default createGenerator;
