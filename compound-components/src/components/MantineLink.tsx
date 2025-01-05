import * as React from "react";
import { createLink, LinkComponent } from "@tanstack/react-router";
import { Anchor, AnchorProps } from "@mantine/core";

interface MantineAnchorProps extends Omit<AnchorProps, "href"> {
  // Add any additional props you want to pass to the anchor
}

const MantineLinkComponent = React.forwardRef<
  HTMLAnchorElement,
  MantineAnchorProps
>((props, ref) => {
  return <Anchor ref={ref} {...props} />;
});

const CreatedLinkComponent = createLink(MantineLinkComponent);

export const MantineLink: LinkComponent<typeof MantineLinkComponent> = (
  props
) => {
  return <CreatedLinkComponent preload="intent" {...props} />;
};
