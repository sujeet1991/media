import React,{Component} from 'react';
import './addbook.css';
import Title from './title';
class fav extends Component{
	render(){
		return(
				<React.Fragment>
					<Title name="Favourites"/>
					<input className="txtinput" placeholder="Search Book" />
					<div className="col-full">
						<div className="col-md">
							<div className="col-grid">
								
								<h2><i>Author Name</i> 
</h2>
								<div className="booklistname">
									<p className="name-book">Book Name</p>
									<p className="bookprice">$29</p>
								</div>
								<button  className="addfav">Remove</button>
							</div>
						</div>
					</div>	
				</React.Fragment>
			)
	}
}

export default fav;