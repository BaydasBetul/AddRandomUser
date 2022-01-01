import styled from "styled-components";

export const Container = styled.div`
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  border-radius: 10px;
  border: 2px solid black;
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img {
    width: 40px;
  }
`;

export const Cards = styled.div`
 background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
 border: 1px solid black;
 width: 90%;
  border-radius: 10px;
  height: 100%;
  padding: 10px;
  margin-top: 0.7rem;
  color: #1c1e22;
`;
export const Image = styled.div`
  img {
    width: 100px;
    border-radius: 100%;
    box-shadow: 1px 3px 2px gray;
    border: 3px solid #dfe9f3;
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  
  span {
    font-size: 1.2rem;
    font-weight: bold;
    text-decoration: underline;
  }
`;
export const Icon = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  cursor: pointer;
  img {
    width: 30px;
    border-radius: 100%;
    border : 2px solid black;
  }
`;
export const Buttondiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 3rem;
`;
export const Button = styled.button`
  background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);
  color: white;
  width: 100px;
  border-radius: 0.3rem;
  cursor: pointer;
  &: hover {
    background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
  }
`;
