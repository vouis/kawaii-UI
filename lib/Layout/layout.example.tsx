import React from 'react';
import Layout from './Layout';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Sider from './sider';

const LayoutExample:React.FunctionComponent = ()=> {
    return (
        <div>
            <div style={{margin:30,height:90,width:300}}>
            <Layout>
                <Header>header</Header>
                <Main>main</Main>
                <Footer>footer</Footer>
            </Layout>
            </div>
            <div style={{margin:30,height:90,width:300}}>
                <Layout >
                    <Header>header</Header>
                    <Layout >
                    <Sider>Sider</Sider>
                    <Main>main</Main>
                    </Layout>
                    <Footer>footer</Footer>
                </Layout>
            </div>
            <div style={{margin:30,height:90,width:300}}>
                <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>header</Header>
                    <Main>main</Main>
                    <Footer>footer</Footer>
                </Layout>
                    </Layout>
            </div>
        </div>

    )
}
export default LayoutExample;