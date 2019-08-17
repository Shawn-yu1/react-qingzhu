import styled from 'styled-components';

export const HomeWrap = styled.div`
    width:1200px;
    height:1000px;
    position:absolute;
    top:70px;
    left:50%;
    margin-left:-600px;
    background:white;

`;
export const HomeLeft = styled.div`
    width:750px;
    height:1000px;
    float:left;
`;
export const HomeRight = styled.div`
    width:400px;
    height:1000px;
    float:right;
`;
export const LeftBox = styled.div`
    width:750px;
    height:500px;
    img{
        width:750px;
        height:300px;
    }
`;
export const Picbox=styled.div`
    width:150px;
    height:50px;
    border:1px double #ccc;
    float:left;
    margin-top:30px;
    box-shadow:5px 5px 5px #888888;
    img{
        width:100px;
        height:48px;
    }
    span{
        margin-left:10px;
    }

`;
export const Botbox=styled.div`
    width:750px;
`;
export const Displaylist=styled.div`
    width:700px;
    height:200px;
    margin-left:25px;
    padding-top:50px;
    border:3px outset #ccc;
    margin-bottom:10px;
    img{
        float:left;
        width:200px;
    }
    div{
        float:left;
        width:480px;
        margin-left:10px;
    }
`;
export const Rightbox=styled.div`
    width:400px;
   .img1{
       margin-left:50px;
       margin-right:66px;
       margin-top:50px;
   }
   .img2{
       margin-top:50px;
   }
    div{
        width:400px;
        height:120px;
        border:1px solid #ccc;
        padding:0 10px;
        text-align:center;
        margin-bottom:10px;
        box-shadow: 5px 5px 5px #888888;
        p{  
            width:400px;
            height:30px;
            text-align:center;
            line-height:30px;
        }
        h4{
            text-align:center;
        }
    }

`;
export const RBbox=styled.div`
    width:400px;
    height:500px;
    margin-top:100px;
    border:3px outset #ccc;
    h3{
        text-align:center;
        margin-bottom:50px;
        margin-top:50px;
    }
    p{
        margin:0 auto;
        width:300px;
        height:50px;
        line-height:50px;
        text-align:center;
        font-size:18px;
        border-bottom:1px dashed #ccc;
    }
`;

