import { useNavigate } from 'react-router-dom'

export default function Content() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="relative justify-center left-220 top-32">
        <div className="text-black text-5xl font-montserrat font-bold">
          Crie seu currículo perfeito em <br />
          apenas 3 passos <span className="text-blue-400">agora!</span>
        </div>
        <h1 className="font-medium relative top-4">
          O currículo, também conhecido como CV <br />(Curriculum Vitae), é um documento <br />
          que resume sua formação, experiências <br />
          profissionais, habilidades e conquistas.
        </h1>
        <button
          className="bg-blue-400 rounded-full relative top-8 text-white font-bold w-55 h-12 text-xl"
          onClick={() => navigate('/criadorCurriculo')}
        >
          Crie um currículo
        </button>
      </div>
      <div>
        <img
          src="src/assets/image 1.png"
          alt=""
          className="relative justify-center left-80 bottom-25 w-85"
        />
      </div>
    </div>
  )
}
