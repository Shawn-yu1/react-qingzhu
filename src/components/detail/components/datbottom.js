import React,{Component} from 'react';
import {Datbotbox} from './../detailStyle'
import { Carousel } from 'antd';
import img1 from './../../../static/timg 1.jpg'
import img2 from './../../../static/timg 2.jpg'
import img3 from './../../../static/timg 3.jpg'
class Datbottom extends Component{
    render(){
        return(
            <div>
                <Datbotbox>
                     <Carousel autoplay='true' effect="fade"  afterChange={this.onChange}>
                        <div>
                            <img src={img1}></img>
                        </div>
                        <div>
                            <img src={img2}></img>
                        </div>
                        <div>
                            <img src={img3}></img>
                        </div>
                    </Carousel>,
                </Datbotbox>
            </div>
        )
    }
}
export default Datbottom