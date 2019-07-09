import React, {Component} from 'react';
import Navbar from '../navbar';

class ZachAndWilliam extends Component{

    render(){
        return (
            <div style={{background: "purple"}}>
                <Navbar />
                    <h2 title="I'm a header">Thanos is very Epic</h2>

                    <p title="I'm a tooltip">
                    Time to Eliminate Half the Universe
                    </p>
                    <a href="https://www.youtube.com/watch?v=aExqW1ndJDs"><button>Click Me</button></a>
                    <p><a href="https://www.reddit.com/r/thanosdidnothingwrong/">View this site</a></p>
                    <img src="https://i.dlpng.com/static/png/4144933_thumb.png" alt="Very cool pic" style={{ width:"40px", height:"30px"}} />
                    <table>
                        <tr>
                            <th>Stones</th>
                            <th>Location</th>
                            <th>Acquirement</th>
                        </tr>
                        <tr>
                            <td>Space</td>
                            <td>Space</td>
                            <td>Killing Loki+Asgardians</td>
                            <tr>
                                <td>Power</td>
                                <td>Xandar</td>
                                <td>Explosions</td>
                            </tr>
                        </tr>
                    </table>
                    <h1>Wise Words</h1>
                    <ul>
                        <li>Reality is often Dissapointing</li>
                        <li>The Strongest Choices Require the Strongest Wills</li>
                        <li>Perfectly Balenced, as All Things Should Be</li>
                        <li>This Does this put a Smile on my Face</li>
                        <li>You Should Have Gone for the Head</li>
                        <li>I am Inevitable</li>
                    </ul>
                        <img src="https://i.redd.it/vq1rw99038521.jpg" alt="Obamos" style={{width: "400px", height:"200px"}}></img>
            </div>
        )
    }
}

export default ZachAndWilliam; 