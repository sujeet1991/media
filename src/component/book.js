import React,{Component} from 'react';
import './addbook.css';
import Title from './title';

class book extends Component{

	render(){
		console.log(this.props)

		return(
				<React.Fragment>
					<Title name="Book"/>
					<input className="txtinput" placeholder="Search Book" onChange={(e)=>this.props.booksearch(e)}/>
					<div className="col-full">
						{this.props.allbook.map((curr,index)=>{
							return(

								<div className="col-md" key={index}>
									<div className="col-grid">
									<span className="closepostion"><i className="fa fa-times posti-cross" aria-hidden="true"></i></span>
									<h2><i> {curr.author}</i> </h2>
									<div className="booklistname">
									<p className="name-book">{curr.name}</p>
									<p className="bookprice">$ {curr.price}</p>
									</div>
									<button  className="addfav">Add to Favourites</button>
									</div>
								</div>

								)
						})}
						
					</div>	
				</React.Fragment>
			)
	}
}

export default book;