import React, { Fragment } from 'react';
import { Anchor } from 'antd';

class TocItem {
  title: string = '';
  level: number = 1;
  index: number = 0;
  children: TocItem[] = [];
}

class Props {
  toc?: TocItem[];
}

const MdTocAnchorLink: React.FC<Props> = (props = new Props()) => {
  const { toc } = props;

  if (toc === undefined) {
    return null;
  }

  const links = toc.map((item) => (
    <Anchor.Link key={item.index} href={`#${item.title}`} title={item.title}>
      {item.children && item.children.map((cell) => <MdTocAnchorLink toc={cell.children} />)}
    </Anchor.Link>
  ));

  return <Fragment>{links}</Fragment>;
};

const MdTocAnchor: React.FC<Props> = (props = new Props()) => {
  return (
    <Anchor showInkInFixed>
      <MdTocAnchorLink {...props} />
    </Anchor>
  );
};

export default MdTocAnchor;
