import React,{Component} from 'react';
import Addbook from '../component/Addbook';
import Book from '../component/book';
import Fav from '../component/fav';
import Json from './json.js';
import './App.css';

class Home extends Component{
		constructor(props){
			super(props);
			this.state={
				tabshow:'addbook',
				booklist:[],
				searchbox:'',
				


			}
		}
		activetab=(data)=>{
			this.setState({
				tabshow:data
			})
		}

	onchangebook=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	componentWillMount(){
		this.setState({
			booklist:Json
		})
	}

	searchchange=(event)=>{
		this.setState({
			searchbox:event.target.value
		})
	}




	render(){
		console.log(this.state.searchbox)
		return(
				<React.Fragment>
					<div className="container">
						<div className="left-panel">
							<h1 className="title-book">Book Store</h1>
							<ul className="navlink">
								<li onClick={(e)=>this.activetab('addbook',e)} className={this.state.tabshow==='addbook'?"active":null}>Add Books</li>
								<li onClick={(e)=>this.activetab('Book',e)} className={this.state.tabshow==='Book'?"active":null}>Books <span>1</span></li>
								<li onClick={(e)=>this.activetab('fav',e)} className={this.state.tabshow==='fav'?"active":null}>Favourites <span>5</span></li>
							</ul>


						</div>
						<div className="right-panel">
							{this.state.tabshow==='addbook'?<Addbook change={this.onchangebook}/>:null}
							{this.state.tabshow==='Book'?<Book allbook={this.state.booklist} seachbox={this.state.searchbox} booksearch={this.searchchange}/>:null}
							{this.state.tabshow==='fav'?<Fav/>:null}
							{/*<Addbook/>*/}
							
							
						{/*Fav*/}

						</div>
					</div>
				</React.Fragment>
		
			)
	}
}
export default Home;