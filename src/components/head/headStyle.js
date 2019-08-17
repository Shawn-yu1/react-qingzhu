import styled from 'styled-components';
import logo from './../../static/logo.jpg';


//把结构和样式全部封成组件去使用
export const HeadWrap = styled.div`
    height:50px;
    background:black;
    width:100%;
    position:absolute;
    top:0;
`;
export const ImgWrap = styled.div`
    height:50px;
    width:100px;
    background:url(${logo});
    background-size:100% 100%;
    margin-left:100px;
    float:left;
`;
export const  Nav = styled.div`
    height:50px;
    width:300px;
    float:left;
    margin-left:50px;
`;
export  const NavFont = styled.div`
    height:50px;
    width:100px;
    float:left;
    line-height:50px;
    text-align:center;
    cursor:pointer;
    color:#fff;
`;
export  const InputBox = styled.div`
    height:50px;
    width:300px;
    position:relative;
    margin-left:1100px;
    i{
        position:absolute;
        right:10px;
        top:20px;
    }
`;
export const Input = styled.input.attrs({placeholder:'请输入内容'})`
    position:absolute;
    right:0;
    height:30px
    width:200px;
    border-radius:15px;
    border:0;
    outline:none;
    padding-left:20px;
    margin-top:10px;
    transition:1s;
    &.fuck{
        width:300px;
        transition:1s;
    }
`;
export const List = styled.ul`
    width:200px;
    height:200px;
    background:rgba(0,0,0,0.3);
    position:absolute;
    top:50px;
    border-radius:10px;
`;
export const Listli = styled.li`
    width:200px;
    height:20%;
    line-height:40px;
    text-align:center;
    font-size:15px;
    color:#4b5cc4;
    border-bottom:1px dashed #fff;
    cursor:pointer;

`