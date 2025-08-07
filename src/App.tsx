// src/App.tsx
import React from "react";

// ユーザーの型
type User = {
  id: number;
  name: string;
  age: number;
};

// 任意の2人のユーザーを定義
const users: User[] = [
  { id: 1, name: "田中 太郎", age: 28 },
  { id: 2, name: "佐藤 花子", age: 32 },
];

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>ユーザー一覧</h2>
      <table border={1} cellPadding={8} cellSpacing={0}>
        <thead>
          <tr>
            <th>名前</th>
            <th>年齢</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
