import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView"

/* React의 최상위 컴포넌트 */
const App = () => {
  return (
    /* BrowserRouter : 라우팅을 적용하기 위한 컴포넌트 App 컴포넌트를 감싸서 라우팅 설정을 적용 */
    /* Routes : 라우트들을 정의하는 컨테이너 각각의 Route 컴포넌트들을 Routes 컴포넌트 내부에 정의하여 경로와 컴포넌트를 매핑합니다.*/
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
