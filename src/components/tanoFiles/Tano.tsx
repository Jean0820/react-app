import style from "./tano.module.css";
import styled from "styled-components";
import { FaDocker } from "react-icons/fa6";
const Tano = () => {
  type TanoPros = {
    active: boolean;
  };
  const Tano = styled.div<TanoPros>`
    text-align: center;
    ${(props) => props.active && "padding-top: 30px;"}
  `;
  return (
    <>
      <div className={style.btnPrimary}>Tano Files</div>
      <Tano active={true}>
        <ul className="flex justify-center items-center gap-1">
          <FaDocker />
          Tano Electric
        </ul>
        <ul>Tano Integrated Technology</ul>
        <ul>TransFive</ul>
        <ul>Tano Academy</ul>
      </Tano>
    </>
  );
};

export default Tano;
