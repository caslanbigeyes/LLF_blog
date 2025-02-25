
import Head from "next/head";
import Script from "react-load-script";
import { Row, Col, Affix, BackTop } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import Author from "./Author";
import Advert from "./Advert";
import "../static/style/pages/index.css";
// import DynamicPublish from './MusicWrap'




import React, { useEffect, useState } from 'react'

import dynamic from 'next/dynamic';

// 延迟加载 APlayer 并禁用 SSR
const DynamicPublish = dynamic(() => import('./MusicWrap'), { ssr: false });

const Layout = ({ pageTitle = "", renderRight, children = null }) => {

  const [header, setHeader] = useState(false)
  // useEffect(() => {
  //   window.onscroll = () => {
  //     if (window.scrollY > 50) {
  //       setHeader(true)
  //     } else {
  //       setHeader(false)
  //     }
  //   }
  //   return () => {
  //     window.onscroll = null
  //   }
  // }, [])


  return (
    <>
      <Script url="../static/js/heart.js" />

      {!!pageTitle && (
        <Head>
          <title>{pageTitle}</title>
        </Head>
      )}
      <BackTop />
      {header ? (<Affix offsetTop={0}>
        <Header />
      </Affix>) : <Header />
      }


      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          {children}
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>

          {renderRight ? (
            renderRight()
          ) : (
            <>
              <Author />
              <Affix offsetTop={5}>
                <Advert />
              </Affix>

            </>
          )}
        </Col>
        <DynamicPublish />
      </Row>

      <Footer />
    </>
  );
};

export default Layout;
