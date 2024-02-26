"use client"

import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

interface MultiRangeSliderProps {
  min: number;
  max: number;
}

export const PriceRangeSlider: React.FC<MultiRangeSliderProps> = ({ min, max }) => {
  const [minVal, setMinVal] = useState<number>(min);
  const [maxVal, setMaxVal] = useState<number>(max);
  const minValRef = useRef<number>(min);
  const maxValRef = useRef<number>(max);
  const range = useRef<HTMLDivElement>(null);
  const leftValue = useRef<HTMLDivElement>(null);
  const rightValue = useRef<HTMLDivElement>(null);

  const onChange = useCallback(({ min, max }: { min: number; max: number }) => {
    console.log("Min:", min, "Max:", max);
  }, []);

  const getPercent = useCallback((value: number) => {
    return Math.round(((value - min) / (max - min)) * 100);
  }, [min, max]);

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }

    if (leftValue.current) {
      leftValue.current.style.left = `calc(${minPercent}% - 20px)`; // Adjusted for half the width of thumb
    }

    if (rightValue.current) {
      rightValue.current.style.left = `calc(${maxPercent}% - 20px)`; // Adjusted for half the width of thumb
    }
  }, [minVal, max, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }

    if (leftValue.current) {
      leftValue.current.style.left = `calc(${minPercent}% - 20px)`; // Adjusted for half the width of thumb
    }

    if (rightValue.current) {
      rightValue.current.style.left = `calc(${maxPercent}% - 20px)`; // Adjusted for half the width of thumb
    }
  }, [maxVal, min, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container__price__slider">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 ? 5 : undefined }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider relative">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div ref={leftValue} className="slider__left-value">{minVal}</div>
        <div ref={rightValue} className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

PriceRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};
