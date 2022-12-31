import { Button } from "@/components/Button";
import { Layout } from "@/layouts/Layout";
import { useRandomPick } from "@/utils/useRandomPick";
import styled from "@emotion/styled";
import { useFormik } from "formik";
import type { NextPage } from "next";

const StyledDescription = styled.p`
  font-size: 1.4rem;
  text-align: center;
  margin-top: 16px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  max-width: 320px;
  margin-top: 24px;
`;

const StyledLabel = styled.label`
  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 16px;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  margin-top: 4px;
`;

const StyledRadio = styled.input`
  margin: 0;
`;

const StyledRadioLabel = styled.label`
  font-size: 1.6rem;
  padding-left: 4px;
  margin-right: 16px;
`;

const StyledNumberInput = styled.input`
  width: 64px;
`;

const StyledSubmitButton = styled(Button)`
  font-weight: bold;
  color: white;
  background-color: #689f38;
  margin-top: 48px;
`;

const IndexPage: NextPage = () => {
  const randomPick = useRandomPick();

  const initialValues = process.browser
    ? {
        mode: localStorage.getItem("mode") || "sp",
        min: +localStorage.getItem("min") || 1,
        max: +localStorage.getItem("max") || 19,
        number: +localStorage.getItem("number") || 3,
      }
    : {
        mode: "sp",
        min: 1,
        max: 19,
        number: 3,
      };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: (values) => {
      const mode = values.mode === "dp" ? "dp" : "sp";
      const min = Math.min(values.min, values.max);
      const max = Math.max(values.min, values.max);
      const number = Math.min(values.number, 10);

      localStorage.setItem("mode", mode);
      localStorage.setItem("min", min + "");
      localStorage.setItem("max", max + "");
      localStorage.setItem("number", number + "");

      randomPick({ mode, min, max, number });
    },
  });

  return (
    <Layout>
      <StyledDescription>
        DDRに収録されている曲({"2022/12/31"}
        現在)からランダムに数曲セレクトします
        <br />
        知らない曲や苦手な譜面でもとりあえずトライ！
        <br />
        <strong>（※先行配信曲を含みます）</strong>
      </StyledDescription>

      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>プレイスタイル</StyledLabel>
        <StyledRow>
          <StyledRadio
            id="sp"
            name="mode"
            type="radio"
            value="sp"
            checked={values.mode === "sp"}
            onChange={handleChange}
          />
          <StyledRadioLabel htmlFor="sp">SP</StyledRadioLabel>
          <StyledRadio
            id="dp"
            name="mode"
            type="radio"
            value="dp"
            checked={values.mode === "dp"}
            onChange={handleChange}
          />
          <StyledRadioLabel htmlFor="dp">DP</StyledRadioLabel>
        </StyledRow>

        <StyledLabel>レベル(足1〜19)</StyledLabel>
        <StyledRow>
          足
          <StyledNumberInput
            name="min"
            type="number"
            min="1"
            max="19"
            value={values.min}
            onChange={handleChange}
          />
          〜
          <StyledNumberInput
            name="max"
            type="number"
            min="1"
            max="19"
            value={values.max}
            onChange={handleChange}
          />
        </StyledRow>

        <StyledLabel>選ぶ曲数(最大10曲)</StyledLabel>
        <StyledRow>
          <StyledNumberInput
            name="number"
            type="number"
            min="1"
            max="10"
            value={values.number}
            onChange={handleChange}
          />
          曲
        </StyledRow>

        <StyledSubmitButton type="submit">おみくじを引く</StyledSubmitButton>
      </StyledForm>
    </Layout>
  );
};

export default IndexPage;
