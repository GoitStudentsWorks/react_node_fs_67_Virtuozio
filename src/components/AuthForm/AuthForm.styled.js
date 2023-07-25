import styled from '@emotion/styled'


export const Div = styled.div`
margin: 0 auto;
width: 608px;
padding: 60px 75px;
background-color: white;
border: 1px solid rgba(84, 173, 255, 1);
box-shadow: rgba(136, 198, 253, 0.19);
border-radius: 40px;
margin-bottom: 100px;


input:not(:last-child){
    margin-bottom: 32px;
}

h1{
    font-family: Manrope;
    font-size: 36px;
    font-weight: 400;
    text-align: center;
    margin: 0;
    margin-bottom: 40px;
}

p{
    font-family: Manrope;
    font-weight: 400;
    font-size: 12px;
    color: rgba(136, 136, 136, 1);
    text-align: center;
}

a{
    font-size: 12px;
    color: rgba(84, 173, 255, 1);
}

`


export const InputLine = styled('Input')`
font-family: Manrope;
color: rgba(136, 136, 136, 1);
font-size: 16px;
width: 100%;
padding: 12px 16px;
border-style: solid;
border-color: rgba(84, 173, 255, 1);
border-radius: 40px;
box-sizing: border-box;



/* margin-bottom: 30px; */

:focus {
    outline: 0;
}

`

export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



`


export const Btn = styled.button`
width: 100%;
height: auto;
padding: 10px 28px;
margin-top: 18px;
margin-bottom: 16px;
border: none;
border-radius: 40px;
font-size: 20px;
color: #fff;
cursor: pointer;
  background: rgba(84, 173, 255, 1);
 transition: background 0.3s, background-position 0.3s;



:hover{
    background: linear-gradient(245deg, rgba(65, 158, 241, 1) 30%, rgba(155, 208, 255, 1));
    background-position: 100% 50%;
}


`