import React from 'react';
import Layout from './Layout';
import Header from './header';
import Main from './main';
import Footer from './footer';

const LayoutExample:React.FunctionComponent = ()=> {
    return (
        <div>
            <Layout>
                <Header>header</Header>
                <Main>main</Main>
                <Footer>footer</Footer>
            </Layout>
        </div>
    )
}
export default LayoutExample;