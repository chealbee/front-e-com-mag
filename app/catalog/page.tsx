"use client";
import React from "react";
import Container from "../components/layout/container/Container";
import CardList from "../components/elements/cardList/CardList";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

import "./style.scss";
import MyAccardion from "../components/accardion/MyAccardion";
import Separator from "../components/ui/separator/Separator";
import OriginButton from "../components/ui/buttons/origin/OriginButton";
import Checkbox from "../components/ui/checkbox/Checkbox";
import OutlineButton from "../components/ui/buttons/outline/OutlineButton";
import MySelect from "../components/ui/select/MySelect";
import RangeSlider from "../components/ui/rangeSlider/RangeSlider";
import Input from "../components/ui/input/Input";

const checkboxs = [{ label: "type" }, { label: "brand" }, { label: "price" }];
const types = [{ label: "type" }, { label: "brand" }, { label: "price" }];

export default function Catalog() {
  return (
    <div>
      <Container>
        <div className="filterList">
          <p className="filterList__sectionCaption">bradn :</p>
          <div className="filterList__sectionList">
            <div className="filterList__filter">
              <span>apple</span>
              <div className="filterList__button">
                <div className="filterList__closebutton"></div>
              </div>
            </div>
          </div>
          <Separator type="HORIZONTAL" cn="filterListSeparator" />
          <p className="filterList__sectionCaption">type :</p>
          <div className="filterList__sectionList">
            <div className="filterList__filter">
              <span>apple</span>
              <div className="filterList__button">
                <div className="filterList__closebutton"></div>
              </div>
            </div>
          </div>
          <Separator type="HORIZONTAL" cn="filterListSeparator" />
          <div className="filterBottomContainer">
            <OutlineButton>reset filters</OutlineButton>
            <MySelect options={options} />
          </div>
        </div>
        <div className="catalog">
          <div className="filters">
            <h3>Filters</h3>
            <Separator type="HORIZONTAL" cn="filters__separator" />
            <MyAccardion
              list={[
                {
                  label: "brand",
                  ell: (
                    <div className="filters__checkboxs">
                      {checkboxs.map((el) => (
                        <Checkbox label={el.label} />
                      ))}
                    </div>
                  ),
                },
                {
                  label: "type",
                  ell: (
                    <div className="filters__checkboxs">
                      {types.map((el) => (
                        <Checkbox label={el.label} />
                      ))}
                    </div>
                  ),
                },
                {
                  label: "price",
                  ell: (
                    <>
                      <RangeSlider />
                      <div className="filters__inputsWraper">
                        <Input
                          styleType="input"
                          placeholder="min: 00 00"
                          cn="filters__inputs"
                        />
                        <span>-</span>
                        <Input
                          styleType="input"
                          placeholder="max: 00 00"
                          cn="filters__inputs"
                        />
                      </div>
                    </>
                  ),
                },
              ]}
            />
            <div className="filters__buttons">
              <OriginButton>Aply</OriginButton>
              <OriginButton Buttonstyle="spaced">Reset</OriginButton>
            </div>
          </div>
          <CardList />
        </div>
      </Container>
    </div>
  );
}
