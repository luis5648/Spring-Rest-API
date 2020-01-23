import React from 'react'



class Menu extends React.Component{

    constructor(){
        super();
        this.state = {
            done: false,
            data: []
        };
    }

    componentDidMount(){
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(result=>result.json())
        .then(data=>this.setState({
            done:true,
            data
        }))
    }


    
    

    render(){
      const films =  this.state.data.map((data,i) =>{
            return(
                <li>{data.title}</li>
            )
        })
        

        return(
        <nav>
            <ul>
                {films}
            </ul>
        </nav>
        ) 
    }
}

export default Menu