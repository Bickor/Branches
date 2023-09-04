import './App.css';
import Tree from 'react-d3-tree';

function App() {
  const graph = {
    name: 'CEO',
    children: [
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <div class="graph" id="treeWrapper">
      <Tree 
        data={graph} 
        pathFunc={"step"}
        orientation={"vertical"}
      />
    </div>
  );
}

export default App;
