import React,{Component} from 'react';
import Title from './title';
import './addbook.css';
class addbook extends Component{
	render(){
		return(
				<React.Fragment>
					
					<Title name="Add Book"/>

					<div className="addbook-box">
						<input type="text" placeholder="Book Name" name="name" onChange={(e)=>this.props.change(e)} className="txtinput"/>
						<input type="text" placeholder="Author Name" name="author" onChange={(e)=>this.props.change(e)} className="txtinput"/>
						<input type="text" placeholder="Book Price" name="price" onChange={(e)=>this.props.change(e)} className="txtinput"/>
						<button className="btn"> Add Book</button>


					</div>
				</React.Fragment>
			)
	}
}

export default addbook;