import React from 'react';
import ReactDOM from 'react-dom';
import HeadText from './components/headText';
import BodyText from './components/bodyText';

const info = {
    title: 'Pagani Huayra',
    image: 'https://i.kinja-img.com/gawker-media/image/upload/s--Tl2fKaaJ--/c_scale,fl_progressive,q_80,w_800/jnmosff1lp6csi6ibjn9.jpg',
    desc: "The Pagani Huayra is an Italian mid-engined sports car produced by Pagani. Succeeding the company's previous offering, the Zonda, it costs €1,198,000 ($1,314,000), (£910,905).",
    text: "The Huayra uses a twin-turbo, V12 engine developed by Mercedes-AMG specially for the Huayra. The Huayra's 6.0-litre engine, the M158, produces 730 metric horsepower (720 bhp (539 kW)) and 811 lb·ft (1,100 N·m) of torque. Its top speed is about 238 mph (383 km/h) and it has a rating 0–62 miles per hour (0–100 km/h) acceleration time of 2.8 seconds. Using Pirelli tires, the Pagani Huayra is capable of withstanding 1.66 g of lateral acceleration at speeds of up to 230 mph (370 km/h). The Pagani Huayra uses a seven-speed sequential gearbox and a single disc clutch. The choice not to use a dual-clutch in an oil bath was due to the increase in weight of over 70 kg (154 lb), thus negating any advantage of the faster gear changes in a double-clutch transmission. As a result, the entire transmission weighs 96 kg (212 lb). The car is equipped with Brembo brake calipers, rotors and pads. The calipers have four pistons in front and four in the rear. The rotors are drilled carbon ceramic, 380 mm (15.0 in) in diameter and 34 mm (1.3 in) thick."
};

class MainWrapp extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <article className="row large-6">

            <HeadText {...this.props} />

            <BodyText {...this.props} />

        </article>;
    }
}

ReactDOM.render(
    <MainWrapp title={info.title} 
        image={info.image} 
        desc={info.desc}
        text={info.text}/>,
    document.getElementById('main')
);
