import { useState } from 'react';

function App() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onIdChangeHandler = (event) => {
      setId(event.target.value);
    };

    const onPwChangeHandler = (event) => {
      setPassword(event.target.value);
    };

  return (
    <div>

      <div>
          아이디 : <input type="text" value={id} onChange={onIdChangeHandler} />
      </div>

      <div>
        비밀번호 :{" "}
        <input type="password" value={password} onChange={onPwChangeHandler} />
      </div>

        <button
          onClick = {() => {
            alert(
              `고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${password}입니다.`
              );
              setId("");
              setPassword("");
          }}
        >
          로그인
        </button>
    </div>
  );
}

export default App;