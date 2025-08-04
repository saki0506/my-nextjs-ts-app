// src/app/page.tsx
'use client';
import { useEffect, useState } from 'react';

interface HomeProps {
  title: string;
}

export default function Home() {
  const [apiMessage, setApiMessage] = useState<string>('');
  const title = "Hello, Next.js with TypeScript!";

  // APIルートからデータを取得
  useEffect(() => {
    fetch('/api/hello')
      .then(res => res.json())
      .then(data => setApiMessage(data.message))
      .catch(err => console.error('API呼び出しエラー:', err));
  }, []);

  return (
    <main style={{ padding: '20px' }}>
      <h1>{title}</h1>
      <p>ページコンポーネントの型定義例</p>

      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>APIルートからの応答:</h2>
        <p>{apiMessage || '読み込み中...'}</p>
      </div>
    </main>
  );
}