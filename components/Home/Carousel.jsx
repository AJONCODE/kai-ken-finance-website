import {Carousel} from 'react-responsive-carousel';
import sld1 from "../../assets/sld_1.png";
import sld2 from "../../assets/sld_2.png";
import sld3 from "../../assets/sld_3.png";
import sld4 from "../../assets/sld_4.png";
import Image from "next/image";

export default function ImageSlider(){
        return (
            <Carousel 
            // renderArrowPrev={() => null} 
            // renderArrowNext={() => null}
            infiniteLoop={true}
            swipeable={true}
            autoplay={true}
            showStatus={false}
            showThumbs={false}
            width="550px"
            key={this}
            >
                <div>
                    <Image height={380} width={300} src={sld1} />
                </div>
                <div>
                    <Image height={380} width={300} src={sld2} />
                </div>
                <div>
                    <Image height={380} width={300} src={sld3} /> 
                </div>
                <div>
                    <Image height={380} width={300} src={sld4} /> 
                </div>
            </Carousel>
        );
}