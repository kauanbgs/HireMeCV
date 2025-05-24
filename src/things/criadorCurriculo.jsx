export default function CriadorCurriculo() {
  return (
    <div className="h-auto min-h-screen w-full overflow-hidden bg-blue-200">
      <div className="mt-24 h-auto min-h-screen w-full rounded-l-3xl bg-white p-8 lg:ml-[24rem]">
        <p className="mt-5 text-4xl font-medium text-black lg:text-6xl">
          Insira suas informações principais
        </p>

        <div className="inputs mt-10 text-xl lg:text-3xl">
          {/* Nome e Sobrenome */}
          <div className="flex flex-col gap-y-6 gap-x-10 lg:flex-row">
            <div className="inputNome">
              <p className="text-lg">NOME</p>
              <input
                placeholder="Kauan"
                className="w-full rounded border border-gray-400 px-4 py-2"
              />
            </div>
            <div className="inputSobrenome">
              <p className="text-lg">SOBRENOME</p>
              <input
                placeholder="Borges"
                className="w-full rounded border border-gray-400 px-4 py-2"
              />
            </div>
          </div>

          {/* Email */}
          <div className="inputEmail mt-14 max-w-[49.6rem]">
            <p className="text-lg">EMAIL</p>
            <input
              placeholder="example@example.com"
              className="w-full rounded border border-gray-400 px-4 py-2 placeholder-gray-400"
            />
          </div>

          {/* Nascimento, CEP e Telefone */}
          <div className="mt-14 flex flex-col gap-y-6 gap-x-10 lg:flex-row">
            <div className="inputNascimento">
              <p className="text-lg">NASCIMENTO</p>
              <input
                placeholder="DD/MM/AAAA"
                className="w-full rounded border border-gray-400 px-4 py-2"
              />
            </div>
            <div className="inputCep">
              <p className="text-lg">CEP</p>
              <input
                placeholder="00000-000"
                className="w-full rounded border border-gray-400 px-4 py-2"
              />
            </div>
            <div className="inputTelefone">
              <p className="text-lg">TELEFONE</p>
              <input
                placeholder="(00)-00000-0000"
                className="w-full rounded border border-gray-400 px-4 py-2"
              />
            </div>
          </div>

          {/* Cidade, Estado e Endereço */}
          <div className="mt-14 flex flex-col gap-y-6 gap-x-10 lg:flex-row">
            <div className="inputCidade">
              <p className="text-lg">CIDADE</p>
              <input
                placeholder="São Paulo"
                className="w-full rounded border border-gray-400 px-4 py-2"
              />
            </div>
            <div className="inputEstado">
              <p className="text-lg">ESTADO</p>
              <input
                placeholder="São Paulo"
                className="w-full rounded border border-gray-400 px-4 py-2"
              />
            </div>
            <div className="inputEndereco">
              <p className="text-lg">ENDEREÇO</p>
              <input
                placeholder="Rua das Flores"
                className="w-full rounded border border-gray-400 px-4 py-2"
              />
            </div>
          </div>

          {/* Botões */}
          <div className="mt-10 flex items-center justify-center gap-20 mr-55">
            <button className="flex w-64 items-center justify-center gap-2 rounded-4xl border-black border-1 px-6 py-3 font-light text-blue-400">
              <img
                src="src/assets/Left Arrow.png"
                alt=""
                className="h-8 w-8"
              />
              VOLTAR
            </button>
            <button className="flex w-64 items-center justify-center gap-2 rounded-4xl bg-blue-400 px-6 py-3 font-light text-white">
              PRÓXIMO
              <img
                src="src/assets/Right Arrow.png"
                alt=""
                className="h-8 w-8"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
