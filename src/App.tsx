import { Button, Layout, Menu, Icon, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";
import "./App.scss";
import { Dispatch } from "redux";
import { showCompanyInfoModal } from "./containers/CompanyInfo/actions";
import { showBankInfoModal } from "./containers/BankInfo/actions";
import { showDocumentNotesModal } from "./containers/DocumentNotes/actions";

interface IProps {
  showCompanyInfoModal: typeof showCompanyInfoModal;
  showBankInfoModal: typeof showBankInfoModal;
  showDocumentNotesModal: typeof showDocumentNotesModal;
}

class App extends React.Component<IProps> {
  render() {
    return (
      <Layout>
        <Layout.Sider style={{ background: "#fff" }} width={250}>
          <Typography.Title level={4}></Typography.Title>
          <Menu>
            <Menu.Item key="0">#DOCUMENT.BUILDER</Menu.Item>
            <Menu.Item
              key="1"
              onClick={() => this.props.showCompanyInfoModal()}
            >
              <Icon type="right" />
              Firma Bilgileri
            </Menu.Item>

            <Menu.Item key="2" onClick={() => this.props.showBankInfoModal()}>
              <Icon type="right" />
              Banka Bilgileri
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => this.props.showDocumentNotesModal()}
            >
              <Icon type="right" />
              Doküman Notları
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="right" />
              Logo ve İmza
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="right" />
              Tema Seçimi
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout>
          <Layout.Header style={{ margin: 12, background: "#fff" }}>
            <div style={{ float: "right" }}>
              <Button.Group>
                <Button type="danger" icon="cloud">
                  YENILE
                </Button>
                <Button type="dashed" icon="cloud-download">
                  Kaydet
                </Button>
              </Button.Group>
            </div>
          </Layout.Header>
          <Layout.Content
            style={{ margin: 12, padding: 12, background: "#fff" }}
          >
            .HTML CONTENT
          </Layout.Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  showCompanyInfoModal: () => dispatch(showCompanyInfoModal()),
  showBankInfoModal: () => dispatch(showBankInfoModal()),
  showDocumentNotesModal: () => dispatch(showDocumentNotesModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
