import { Button } from "@/components/atoms/buttons/Button";
import { Layout } from "@/layouts/Layout";
import {
  formStyle,
  labelStyle,
  numberInputStyle,
  paragraphStyle,
  radioLabelStyle,
  radioStyle,
  rowStyle,
  submitButtonStyle,
} from "@/styles/IndexPage.css";
import { isBrowser } from "@/utils/isBrowser";
import { useRandomPick } from "@/utils/useRandomPick";
import { useFormik } from "formik";
import type { NextPage } from "next";

const IndexPage: NextPage = () => {
  const randomPick = useRandomPick();

  const initialValues = isBrowser
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
      <p className={paragraphStyle}>
        DDRに収録されている曲({"2023/12/30"}
        現在)からランダムに数曲セレクトします
        <br />
        知らない曲や苦手な譜面でもとりあえずトライ！
        <br />
        <strong>(※先行配信曲を含みます)</strong>
      </p>
      <form className={formStyle} onSubmit={handleSubmit}>
        <label className={labelStyle}>プレイスタイル</label>
        <div className={rowStyle}>
          <input
            id="sp"
            className={radioStyle}
            name="mode"
            type="radio"
            value="sp"
            checked={values.mode === "sp"}
            onChange={handleChange}
          />
          <label className={radioLabelStyle} htmlFor="sp">
            SP
          </label>
          <input
            id="dp"
            className={radioStyle}
            name="mode"
            type="radio"
            value="dp"
            checked={values.mode === "dp"}
            onChange={handleChange}
          />
          <label className={radioLabelStyle} htmlFor="dp">
            DP
          </label>
        </div>
        <label className={labelStyle}>レベル(足1〜19)</label>
        <div className={rowStyle}>
          足
          <input
            className={numberInputStyle}
            name="min"
            type="number"
            min="1"
            max="19"
            value={values.min}
            onChange={handleChange}
          />
          〜
          <input
            className={numberInputStyle}
            name="max"
            type="number"
            min="1"
            max="19"
            value={values.max}
            onChange={handleChange}
          />
        </div>
        <label className={labelStyle}>選ぶ曲数(最大10曲)</label>
        <div className={rowStyle}>
          <input
            className={numberInputStyle}
            name="number"
            type="number"
            min="1"
            max="10"
            value={values.number}
            onChange={handleChange}
          />
          曲
        </div>
        <Button className={submitButtonStyle} type="submit">
          おみくじを引く
        </Button>
      </form>
    </Layout>
  );
};

export default IndexPage;
