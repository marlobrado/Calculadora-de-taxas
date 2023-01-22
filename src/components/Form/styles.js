import styled from "styled-components";

export const ContainerForm = styled.div`

    width: 377px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #656565;
    justify-content: center;
    h2{
        height: 50px;
        font-size: 24px;

    }
    form{
        display: flex;
        flex-direction: column;
        width: 231px;
        height: 100%;
        justify-content: space-evenly;
        align-items: flex-start;
        label{
            font-size: 14px;
        }
        span{
            font-size: 10px;
            color: #CECECE;
        }
        input{
            height: 37px;
            border-style: none;
            padding-left: 15px;
        }
}
`