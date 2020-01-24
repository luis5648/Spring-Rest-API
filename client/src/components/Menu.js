import React from 'react'
import './Menu.css';



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
        .then(res=>res.json())
        .then(data=>this.setState({
            done:true,
            data
        }))
    }    

    render(){
        
        const datosImportantes =  this.state.data.map((data,i) =>{
            return(
                <tr key={i}> 
                   <td>{data.title}</td> 
                   <td>{data.description}</td> 
                </tr>
                

            )
        });
        
        return(
        <div>

            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Descripción</th>
                    </tr>
                </thead>

                <tbody>
                   {datosImportantes}
                </tbody>
                
            </table>
        </div>
        ) 
    }
}

export default Menu