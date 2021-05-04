import { Layout } from 'antd';
import AppHeader from "../components/Navbar/Navbar"
import AppFooter from "../components/footer"
import ProductList from "../components/ProductList";
import eightinchcake from "../json/motherdayproduct.json"
import ProductSider from "../components/Products/ProductSider";


const { Header, Sider, Content, Footer } = Layout;

function Product() {
    return (
        <>
        <Layout>
            <Header className="container header-bg">
                <AppHeader/>
            </Header>
        
            <Layout>
            <Sider>
                <ProductSider />
            </Sider>
            <Content>
                <ProductList products = {eightinchcake} />
            </Content>
            </Layout>
        
            <Footer className="footer-bg">
                <AppFooter />
            </Footer>
        </Layout>
        
        </>
    
        
  );
}

export default Product;