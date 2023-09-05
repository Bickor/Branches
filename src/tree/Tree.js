import * as React from 'react';
import { css } from '@emotion/css';

import TreeNode, { TreeNodeProps } from './TreeNode';

// type LineStyle = 'dashed' | 'dotted' | 'double' | 'solid' | string;

export class TreeProps {
  /**
   * The root label
   * */
  label;
  /**
   * The height of the line
   */
  lineHeight;
  /**
   * The width of the line
   */
  lineWidth;
  /**
   * The color of the line
   */
  lineColor;
  /**
   * The line style for the tree
   */
  lineStyle;
  /**
   * The border radius of the line
   */
  lineBorderRadius;
  /**
   * The padding between siblings
   */
  nodePadding;
  children;
}

/**
 * The root of the hierarchy tree
 */
export function Tree({
  children,
  label,
  lineHeight = '20px',
  lineWidth = '1px',
  lineColor = 'black',
  nodePadding = '5px',
  lineStyle = 'solid',
  lineBorderRadius = '5px',
}) {
  return (
    <ul
      className={css`
        padding-inline-start: 0;
        margin: 0;
        display: flex;

        --line-height: ${lineHeight};
        --line-width: ${lineWidth};
        --line-color: ${lineColor};
        --line-border-radius: ${lineBorderRadius};
        --line-style: ${lineStyle};
        --node-padding: ${nodePadding};

        --tree-line-height: var(--line-height, 20px);
        --tree-line-width: var(--line-width, 1px);
        --tree-line-color: var(--line-color, black);
        --tree-line-border-radius: var(--line-border-radius, 5px);
        --tree-node-line-style: var(--line-style, solid);
        --tree-node-padding: var(--node-padding, 5px);
      `}
    >
      <TreeNode label={label}>{children}</TreeNode>
    </ul>
  );
}

export default Tree;