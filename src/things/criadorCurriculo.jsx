

export default function CriadorCurriculo() {
  return (
    <div className="overflow-hidden bg-blue-200 h-[100vh] w-[100]">

  {/* <div className="bg-blue-200 w-64 h-screen fixed"></div>
  <div className="bg-blue-200 w-[calc(100%-16rem)] h-24 fixed left-64"></div> */}



  <div className="ml-[24rem] mt-24 p-8 bg-white rounded-l-3xl h-[100vh]">
    <p className="text-black text-6xl font-medium relative left-15 mt-5">
      Insira suas informações principais
    </p>
    <div className="buttons text-3xl mt-10 relative left-15">
  <div className="flex gap-10">
    <div className="inputNome">
      <p className="text-lg">NOME</p>
      <input placeholder="Kauan" className="border border-gray-400 rounded px-4 py-2" />
    </div>
    <div className="inputSobrenome">
      <p className="text-lg">SOBRENOME</p>
      <input placeholder="Borges" className="border border-gray-400 rounded px-4 py-2" />
    </div>
  </div>

  <div className="inputEmail mt-14">
    <p className="text-lg relative ">EMAIL</p>
    <input placeholder="example@example.com" className="placeholder-gray-400 border border-gray-400 rounded px-4 py-2 w-199" />
  </div>

  <div className="flex gap-10 mt-14">
    <div className="inputNascimento">
      <p className="text-lg">NASCIMENTO</p>
      <input type="date" placeholder="Kauan" className="border border-gray-400 rounded px-4 py-2 w-[23.7rem]" />
    </div>
    <div className="inputCep">
      <p className="text-lg">CEP</p>
      <input placeholder="00000-000" className="border border-gray-400 rounded px-4 py-2" />
    </div>
    <div className="inputTelefone">
      <p className="text-lg">TELEFONE</p>
      <input placeholder="(00)-00000-0000" className="border border-gray-400 rounded px-4 py-2" />
    </div>
  </div>
   <div className="flex gap-10 mt-14">
    <div className="inputCidade">
      <p className="text-lg">CIDADE</p>
      <input placeholder="São Paulo" className="border border-gray-400 rounded px-4 py-2 w-[23.7rem]" />
    </div>
    <div className="inputEstado">
      <p className="text-lg">ESTADO</p>
      <input placeholder="São Paulo" className="border border-gray-400 rounded px-4 py-2" />
    </div>
    <div className="inputEndereco">
      <p className="text-lg">ENDEREÇO</p>
      <input placeholder="Rua das Flores" className="border border-gray-400 rounded px-4 py-2" />
    </div>
  </div>


</div>

    </div>
  </div>


  )
}