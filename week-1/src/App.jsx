import React from 'react';
import Layout from 'Layout';

// props를 통해 부모 -> 자식 데이터가 전달됐다.
function  Son(props) {
  console.log('props', props.motherName, props.grandfatherName)
  return <div>나는 {props.motherName}의 아들, {props.grandfatherName}의 손자에요!</div>;
}

// 부모 -> 자식 정보를 전달했다!
function Mother(props) {
  const name = '흥부인';
  const name1 = props.grandfatherName;
  console.log('props', props.grandfatherName)
  return <Son motherName = {name} grandfatherName = {name1} />;
}

function Grandfather() {
  const name1 = '흥부버지';
  return <Mother grandfatherName = {name1} />;
}

function App() {
  return ( <>
    <Grandfather />
    <Layout>
      <div>App 컴포넌트에서 보낸 값입니다!</div>
    </Layout>
  </>
  )
}

export default App;