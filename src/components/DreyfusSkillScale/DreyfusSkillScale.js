import React from "react";
import {Slider} from "@material-ui/core";
import PrettoSlider from "../SliderCustom/SliderCustom";
import './DreyfusSkillScale.css'

function text(value) {
    return (
        <div className={'SliderDreyfusText'}>
            {value}
        </div>
    );
}
const DreyfusSkillScale = (props) => {
    const marks = props.scale.map((e,index) => {
        return {
            value: index + 1,
            label: e
        }
    })

    return (
        <div className={'DreyfusScale'}>
            <h3 className={'mb-5'}>{props.name}</h3>

            {/*<Slider
                getAriaLabel={() => 'Temperature'}
                orientation="vertical"
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                marks={marks}
                step={1}
                min={1}
                max={5}
            />*/}
            <PrettoSlider
                orientation="vertical"
                getAriaValueText={text}
                aria-label="Custom marks"
                valueLabelDisplay="auto"
                marks={marks}
                defaultValue={1}
                step={1}
                min={1}
                max={5}
                onChange={(e, data) => {props.onChange(data, props.index)}}
            />
        </div>
    )
}

export default DreyfusSkillScale