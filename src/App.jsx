import { Button, Collapse, Layout } from 'antd';
import React from 'react';
import './App.css';
import CompanyInfo from './components/CompanyInfo';
import CompanyAddInfo from './components/CompnayAddInfo';
import InvoiceNotting from './components/InvoiceNotting';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <Layout>
      <Sider
        width={600}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0
        }}
      >
        <div className="App-logo">
          <img src="https://nesbilgi.com.tr/wp-content/uploads/2018/03/nes-beyaz-logo.svg" alt="invoice builder" />
        </div>

        <Collapse accordion>
          <Collapse.Panel header="Firma Bilgileri" key="1">
            <CompanyInfo />
          </Collapse.Panel>
          <Collapse.Panel header="Firma Ek Bilgiler" key="2">
            <CompanyAddInfo />
          </Collapse.Panel>
          <Collapse.Panel header="Logo ve İmza" key="3">
            <p>aaaa</p>
          </Collapse.Panel>
          <Collapse.Panel header="Banka Bilgileri" key="4">
            <p>aaaa</p>
          </Collapse.Panel>
          <Collapse.Panel header="Doküman Notları" key="5">
            <InvoiceNotting />
          </Collapse.Panel>
          <Collapse.Panel header="Tema Seçimi" key="6">
            <p>aaaa</p>
          </Collapse.Panel>
        </Collapse>
      </Sider>
      <Layout style={{ marginLeft: 600, minHeight: '100vh' }}>
        <Header style={{ margin: '12px 16px 0', background: '#fff' }}>
          <div style={{ float: 'right' }}>
            <Button.Group>
              <Button type="warrning" icon="cloud">
                YENILE
              </Button>
              <Button type="dashed" icon="cloud-download">
                Kaydet
              </Button>
            </Button.Group>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff' }}>.HTML CONTENT</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default App;