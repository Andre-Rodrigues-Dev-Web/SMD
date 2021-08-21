import style from 'styled-components'

const Template = style.div`
    background-color: #f2f2fb;
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`;
const Content = style.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;
export{
    Content,
    Template
}