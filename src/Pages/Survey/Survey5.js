import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import SurveyNav from "../../Components/Surveys/SurveyNav";
import ResultTop from "../../Components/Surveys/ResultTop";
import ResultBottom from "../../Components/Surveys/ResultBottom";
import { withRouter } from "react-router-dom";

const Survey5 = (props) => {
  const [imgShaver, setImgShaver] = useState();
  const [subimgShaver, setsubImgShaver] = useState();

  useEffect(() => {
    fetch("http://52.14.187.223:8000/subscription-result", {
      method: "POST",
      body: JSON.stringify({
        answer_1: props.redu1,
        answer_2: props.redu2,
        answer_3: props.redu3,
        answer_4: props.redu4,
      }),
    })
      //여기
      .then((res) => res.json())
      .then((res) => {
        // console.log("res.question :", res.image.razor_image);
        // console.log("이거!!!!!!서브이미지 :", res.image.sub_image[0].image);
        // console.log("after_shave :", res.product);

        setImgShaver(res.image.razor_image);
        setsubImgShaver(res.image.sub_image[0].image);
      });

    console.log("리듀1!:", props.redu1);
    console.log("리듀22:", props.redu2);
    console.log("리듀3:", props.redu3);
    console.log("리듀4:", props.redu4);
  }, []);

  const scrollEvent = () => {
    window.scroll({
      top: 1430,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Survey2Wrapper>
      <SurveyNav />
      <ResultTop
        shaverImgColor={imgShaver}
        afterImgTf={props.redu3}
        clickScroll={scrollEvent}
      />
      <ResultBottom shaverImgColor={subimgShaver} recoMmen={props.redu1} />
    </Survey2Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    redu1: state.redu1,
    redu2: state.redu2,
    redu3: state.redu3,
    redu4: state.redu4,
  };
};

export default connect(mapStateToProps)(Survey5);

const Survey2Wrapper = styled.div`
  font-family: "Spoqa Han Sans";
`;
