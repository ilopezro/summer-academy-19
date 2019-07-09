import React, {Component} from 'react';
import Navbar from '../navbar';

class HectorAndAlberto extends Component{
    render(){
        return(
            <div>
                <Navbar />
                    <h1> T+op ten albums of 2019 so far</h1>
                <body style={{ background: "powderblue"}}>
                    <ul>
                        <li> IGOR</li>
                        <li> Voice memos </li>
                        <li> The Life of Pi'erre 4
                        </li>
                        <li> </li>
                    </ul>
                </body>
            </div>
        )
    }
}

export default HectorAndAlberto; 