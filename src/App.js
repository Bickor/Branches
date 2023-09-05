import './App.css';
// import Tree from 'react-d3-tree';
// import * as d3 from 'd3'
// import { Tree, TreeNode } from 'react-organizational-chart';
import { Tree } from "./tree/Tree";
import { TreeNode } from "./tree/TreeNode";

function App() {

  return (
    <div class="graph" id="treeWrapper">
      <Tree label={<div>Root</div>}>
        <TreeNode label={<div>Child 1</div>}>
          <TreeNode label={<div>Grand Child 1</div>} />
          <TreeNode label={<div>Grand Child 2</div>} />
        </TreeNode>
      </Tree>
    </div>
  );
}

export default App;
