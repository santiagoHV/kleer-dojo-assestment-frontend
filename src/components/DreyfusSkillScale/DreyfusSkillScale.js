import React, {useEffect, useState} from "react";
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
            <h3 className={'mb-3'}>{props.title}</h3>
            <div className={'mb-5 description'}>
                {props.description}
            </div>
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
            <div className={'slider'}>
                <PrettoSlider
                    orientation="vertical"
                    getAriaValueText={text}
                    aria-label="Custom marks"
                    // valueLabelDisplay="auto"
                    marks={marks}
                    step={1}
                    min={1}
                    max={5}
                    value={props.value}
                    defaultValue={1}
                    onChange={(e, data) => {props.onChange(data, props.name, props.index)}}
                />
            </div>

        </div>
    )
}

export default DreyfusSkillScale