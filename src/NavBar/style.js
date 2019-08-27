import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  background-color: ${props => props.color ? props.color : "black"}; 
  background: linear-gradient(90deg, rgba(83,58,123,1) 0%, rgba(98,60,234,1) 100%);
  border-bottom: 2px solid black;
  position: fixed;
  top: 0;
  width: 100%;
  height: 120px;

`

export const NavRow = styled.div`
  max-width: 1400px;
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`

export const NavLeft = styled.div`
  width: 25%
  font-family: 'Righteous', cursive;
  font-size: 1.7em;
  text-shadow: 5px 7px black;
  margin: 0 25px;
`

export const NavMiddle = styled.div`
  width: 50%;
`

export const NavRight = styled.div`
  width: 33.333%;
  @media (max-width: 950px) {
    a {
      display:none;
    }
  }
`

export const Link = styled(NavLink)`
  display:inline-block;
  text-decoration: none;
  padding: 12px;
  text-transform: uppercase;
  color: black;
  &:hover {
    color: lightblue;
    text-decoration: underline overline black;
  }
  &.active{
    border-bottom: 1px solid black;
  }
  .show > &.active {
    border-bottom: none;
    color: #623CEA;
  }
`

export const HamburgerContainer = styled.div`
  width: 40px;
  height: 25px;
  position: relative;
  display: none;
  margin-left: auto;
  cursor: pointer;
  @media (max-width: 950px) {
    display: block;
  }
`

export const HamburgerBar = styled.div`
  position: absolute;
  width: 25px;
  height: 3px;
  background-color: black;
  left: 0;
  /* transform: rotate(0deg); */
  transition: all .50s ease-in-out;
  &:nth-child(1) {
    top: 0px;
  }
  &:nth-child(2) {
    top: 6px
  }
  &:last-child {
    top: 12px;
  }
  .open > & {
    transition: all 1s ease-in-out;
  }
  .open  > &:first-child {
    top: 45%;
    transform: rotate(135deg);
    transition: all .50s ease-in-out;
  }
  .open > &:nth-child(2){
    opacity: 0;
    left: -60px;
    transition: all .50s ease-in-out;
  }
  .open > &:nth-child(3) {
    transform: rotate(-135deg);
    transition: all .50s ease-in-out;
  }
`

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0,0,0, 0.7);
  left: -120rem;
  transition: left .75s ease-in-out;
  display: flex;
  flex-direction: column;
  &.show {
    left: 0;
  }
  & > a {
    color: white;
  }
`
