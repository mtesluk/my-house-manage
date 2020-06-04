import React from 'react';

import './housePlanSvg.css';


const HousePlanSvg = (props) => {

    return (
      <svg width="889" height="768" xmlns="http://www.w3.org/2000/svg" className="svg">
        <g>
          <rect id="canvas_background" height="770" width="891" y="-1" x="-1"/>
          <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
            <rect fill="url(#gridpattern)" strokeWidth="0" y="0" x="0" height="100%" width="100%"/>
          </g>
        </g>
        <g>
        <line stroke="#000" strokeLinecap="null" strokeLinejoin="null" id="svg_3" y2="676.453125" x2="437.750002" y1="677.453125" x1="0" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_4" y2="676.453125" x2="471" y1="768" x1="471" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <text stroke="#000" transform="matrix(1.745796060938119,0,0,1.884615421295166,-144.01547514899084,-613.4393283203244) " xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_5" y="713.922513" x="151.16877" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">Corridor</text>
        <line stroke="#000" strokeLinecap="null" strokeLinejoin="null" id="svg_8" y2="529.453124" x2="288" y1="675.453125" x1="288" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" fill="none"/>
        <line stroke="#000" strokeLinecap="null" strokeLinejoin="null" id="svg_9" y2="383" x2="287.000019" y1="383" x1="0" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" fill="none"/>
        <text stroke="#000" transform="matrix(1.1812677383422852,0,0,1.5,-11.96367073059082,-198.7265625) " xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_10" y="417.119792" x="45.682845" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">Mateusz's Room</text>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_12" y2="79" x2="555" y1="79" x1="0" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <text stroke="#000" transform="matrix(1.193766713142395,0,0,1.5185185670852661,-68.01211631298065,-14.753473604097962) " xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_13" y="49.136052" x="386.186972" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">Outside</text>
        <text className="temperature" stroke="#000" transform="matrix(1.2158134483723302,0,0,1.4666666686534882,-98.11414746079618,-13.344791719224304) " xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_14" y="49.453125" x="494.657246" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">
          {props.OUTSIDE ? props.OUTSIDE + '\u2103' : ''}
        </text>
        <line stroke="#000" strokeLinecap="null" strokeLinejoin="null" id="svg_15" y2="282.453117" x2="720" y1="79" x1="720" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" fill="none"/>
        <line stroke="#000" strokeLinecap="null" strokeLinejoin="null" id="svg_16" y2="369" x2="720" y1="369" x1="889" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_17" y2="416.453125" x2="472" y1="678.453125" x1="471" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line stroke="#000" strokeLinecap="null" strokeLinejoin="null" id="svg_18" y2="416" x2="471" y1="416" x1="526" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" fill="none"/>
        <line stroke="#000" strokeLinecap="null" strokeLinejoin="null" id="svg_19" y2="416" x2="527" y1="768" x1="527" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" fill="none"/>
        <line stroke="#000" strokeLinecap="null" strokeLinejoin="null" id="svg_21" y2="673.453125" x2="889" y1="673.453125" x1="708" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_22" y2="768" x2="720" y1="671.453125" x1="720" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <text stroke="#000" transform="matrix(1.493606686592102,0,0,1.8076922893524168,-380.94156754016876,-467.4044374786316) " xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_23" y="544.793551" x="687.558229" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">Kitchen</text>
        <text xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_24" y="730.453125" x="600" fillOpacity="null" strokeOpacity="null" strokeWidth="0" stroke="#000" fill="#000000">Toilet</text>
        <text stroke="#000" transform="rotate(-0.27208706736564636 496.5419616699094,209.84495544433602) matrix(1.2644144296646118,0,0,1.9168565273284912,-116.87117791175842,-232.380152028054) " xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_25" y="239.020565" x="420.601325" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">Living Room</text>
        <text stroke="#000" transform="matrix(1.1112840175628662,0,0,1.4814814329147339,-6.009336948394775,-68.5885347481817) " xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_26" y="135.428124" x="45.90126" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">Grandma's Room</text>
        <text xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_27" y="161.453125" x="731" fillOpacity="null" strokeOpacity="null" strokeWidth="0" stroke="#000" fill="#000000">Marysia Room</text>
        <line stroke="#000" transform="rotate(18.615692138671875 430.3420104980467,668.0314941406251) " strokeLinecap="null" strokeLinejoin="null" id="svg_29" y2="668.031487" x2="474.560793" y1="668.031487" x1="386.123249" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" fill="none"/>
        <line stroke="#000" strokeLinecap="null" strokeLinejoin="null" id="svg_30" y2="447.453126" x2="288" y1="381.453125" x1="288" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" fill="none"/>
        <line stroke="#000" strokeLinecap="null" strokeLinejoin="null" id="svg_31" y2="305.453119" x2="288" y1="382.453125" x1="288" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_38" y2="79" x2="288" y1="246" x1="288" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_40" y2="22" x2="321" y1="79" x1="321" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_41" y2="21" x2="674" y1="22" x1="321" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_42" y2="79" x2="674" y1="22" x1="674" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_43" y2="79" x2="889" y1="79" x1="636" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_44" y2="109.453125" x2="568" y1="78.453125" x1="636" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_45" y2="180.453125" x2="1021" y1="180.453125" x1="1020" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_46" y2="370.453125" x2="720" y1="335.453125" x1="720" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_47" y2="317.453125" x2="747" y1="282.453125" x1="720" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_48" y2="445.453125" x2="720" y1="369" x1="720" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_49" y2="673" x2="526" y1="673.453125" x1="642" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <text className="temperature" stroke="#000" transform="matrix(1.2158134483723302,0,0,1.4666666686534882,-98.11414746079618,-13.344791719224304) " xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_50" y="154.453125" x="701.925886" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">
          {props.MARYSIA ? `${props.MARYSIA} ${\u02103}` : ''}
        </text>
        <text className="temperature" stroke="#000" transform="matrix(1.2158134483723302,0,0,1.4666666686534882,-98.11414746079618,-13.344791719224304) " xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_52" y="331.725852" x="160.724437" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">
          {props.MATEUSZ ? props.MATEUSZ + ' \u2103' : ''}
        </text>
        <text className="temperature" stroke="#000" transform="matrix(1.2158134483723302,0,0,1.4666666686534882,-98.11414746079618,-13.344791719224304) " xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_53" y="198.089488" x="460.934968" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">
          {props.LIVING_ROOM ? props.LIVING_ROOM + '\u2103' : ''}
        </text>
        <text className="temperature" stroke="#000" transform="matrix(1.2158134483723302,0,0,1.4666666686534882,-98.11414746079618,-13.344791719224304) " xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_54" y="395.816761" x="626.256383" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">
          {props.KITCHEN ? props.KITCHEN + '\u2103' : ''}
        </text>
        <text className="temperature" stroke="#000" transform="matrix(1.2158134483723302,0,0,1.4666666686534882,-98.11414746079618,-13.344791719224304) " xmlSpace="preserve" textAnchor="start" fontFamily="'Simonetta', serif" fontSize="24" id="svg_55" y="507.634943" x="316.998412" fillOpacity="null" strokeOpacity="null" strokeWidth="0" fill="#000000">
          {props.CORRIDOR ? props.CORRIDOR + '\u2103' : ''}
        </text>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_56" y2="294.453125" x2="265" y1="245" x1="288" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_57" y2="496.453125" x2="265" y1="447" x1="288" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_58" y2="647.453125" x2="697" y1="673.453125" x1="642" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <line strokeLinecap="null" strokeLinejoin="null" id="svg_59" y2="367.453125" x2="738" y1="367.453125" x1="737" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        <rect id="svg_60" height="768" width="889" y="0" x="0" fillOpacity="null" strokeOpacity="null" strokeWidth="1.5" stroke="#000" fill="none"/>
        </g>
      </svg>
    )
}

export default HousePlanSvg;
