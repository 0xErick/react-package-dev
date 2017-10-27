import React from 'react';
import Tree, { loop} from "../packages/simple-react-tree/src"
import data from "./data"

const div1 = (node)=>(<div style={{
                  					border:"1px red solid",
                      				width:"100px",
                        			height:"60px"}}>{node.name}</div>)
const div2 = (node)=>(<div style={{
                  					border:"1px green solid",
                      				width:"80px",
                        			height:"60px"}}>{node.name}</div>)

const div3 = (node)=>(<div style={{
                  					border:"1px blue solid",
                      				width:"60px",
									height:"60px"}}>{node.name}</div>)
									


export default class Demo extends React.Component{
  
	constructor(props) {
		super(props); 
		this.state={
			treeData:JSON.parse(data).treeData.children
		}
	  }

	update(treeData){
		this.setState({treeData:treeData})
	}
	  
    render(){
      return(
       <div>
		   <Tree treeData={this.state.treeData} update={(treeData)=>{this.update(treeData)}}>
          {loop(this.state.treeData,[div1,div2,div3])}
	 	</Tree>
	   </div>
       ) 
    }
}  