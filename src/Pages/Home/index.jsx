import React from "react";

function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-8 rounded-2xl">
        <h2 className="text-primary-blue text-2xl font-semibold text-center">Login</h2>
        <div className="card-body">
          <label className="label">
            <span className="label-text text-primary-blue font-bold">Email</span>
          </label>
          <input 
            type="email" 
            placeholder="Digite seu email" 
            className="input input-bordered w-full"
          />
          <label className="label mt-4">
            <span className="label-text text-primary-blue font-bold">Senha</span>
          </label>
          <input 
            type="password" 
            placeholder="Digite sua senha" 
            className="input input-bordered w-full"
          />
          <button className="btn bg-primary-blue text-dark-blue w-full mt-6">Entrar</button>
        </div>
        <div className="text-center mt-4">
          <a href="/register" className="link text-light-blue no-underline">Registrar</a>
          <span className="mx-2">|</span>
          <a href="/forgot-password" className="link text-light-blue no-underline">Esqueci a senha</a>
        </div>
      </div>
    </div>
  );
}

export default Home;