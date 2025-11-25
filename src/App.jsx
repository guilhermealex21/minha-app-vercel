import React from 'react'

export default function App() {
  return (
    <div className="container">
      <h1>Deploy da Aplicação no Vercel</h1>
      <p>Este projeto foi deployado usando GitHub + Vercel automaticamente.</p>

      <div className="card">
        <h2>Funcionamento:</h2>
        <ul>
          <li>Push no GitHub → Vervel builda automaticamente.</li>
          <li>Preview Deploy para cada PR.</li>
          <li>Deploy para produção na branch main</li>
        </ul>
      </div>
    </div>
  )
}