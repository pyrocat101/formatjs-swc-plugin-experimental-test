import React from "react";
import { FormattedMessage } from "react-intl";

export function Test() {
  return (
    <FormattedMessage
      defaultMessage="Hello {name}"
      description="Test description"
      values={{ name: "Test" }}
    />
  );
}
