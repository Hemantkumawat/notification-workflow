import React from 'react';
import ReactFlow, {
  removeElements,
  addEdge,
  Controls,
  Background,
  isNode,
} from "react-flow-renderer";
import StepTemplate from './stepTemplate';

const ReactFlowPanel = () => {
  const nodes = [
      {
        id: '1',
        type: 'input',
        data: {
          label: <StepTemplate title={'Trigger'} subtitle={'Notify call'} icon={<i className='fas fa-bolt'></i>}/>,
        },
        position: { x: 250, y: 50 },
        style:{
          border:'none',
          backgroundColor:'transparent',
        }  
      },
      {
        id: '2',
        type:'step',
        data: {
          label: 'Default Node',
        },
        position: { x: 250, y: 150 },
      },
      {
        id: '3',
        type: 'output',
        data: {
          label: 'Output Node',
        },
        position: { x: 250, y: 250 },
      }
  ];

  const edges = [
    {
      id: 'e1-2',
        source: '1',
        target: '2',
        // animated: true,
        // style: { stroke: '#ffff' },
    },
    {
      id: 'e2-3',
        source: '2',
        target: '3',
        // animated: true,
    }
  ];

  return (
    <div class="w-4/5 bg-white h-full">
      <ReactFlow 
      nodes={nodes}
      edges={edges}
      fitView={true} 
      attributionPosition='none'
      >
      <Background color="#00000041" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default ReactFlowPanel;
