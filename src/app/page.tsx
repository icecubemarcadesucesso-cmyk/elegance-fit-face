'use client'

import { useState, useEffect } from 'react'
import { Sparkles, Droplet, Dumbbell, Leaf, Calendar, ChevronRight, Check, X } from 'lucide-react'

// Types
type Goal = 'desinchar' | 'afinar' | 'contorno'
type Screen = 'onboarding' | 'name-input' | 'goal' | 'home' | 'ice-sculpt' | 'face-form' | 'recipes' | 'routine'

interface UserData {
  name: string
  goal: Goal | null
  onboardingCompleted: boolean
}

interface DailyEntry {
  date: string
  feeling: string
  swelling: number
  completed: boolean
}

export default function EleganceFitFace() {
  const [screen, setScreen] = useState<Screen>('onboarding')
  const [onboardingStep, setOnboardingStep] = useState(0)
  const [userData, setUserData] = useState<UserData>({
    name: '',
    goal: null,
    onboardingCompleted: false
  })
  const [dailyEntries, setDailyEntries] = useState<DailyEntry[]>([])

  // Load data from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('elegance-user')
    const savedEntries = localStorage.getItem('elegance-entries')
    
    if (savedUser) {
      const parsed = JSON.parse(savedUser)
      setUserData(parsed)
      if (parsed.onboardingCompleted) {
        setScreen('home')
      }
    }
    
    if (savedEntries) {
      setDailyEntries(JSON.parse(savedEntries))
    }
  }, [])

  // Save data to localStorage
  useEffect(() => {
    if (userData.onboardingCompleted) {
      localStorage.setItem('elegance-user', JSON.stringify(userData))
    }
  }, [userData])

  useEffect(() => {
    if (dailyEntries.length > 0) {
      localStorage.setItem('elegance-entries', JSON.stringify(dailyEntries))
    }
  }, [dailyEntries])

  // Onboarding content
  const onboardingContent = [
    {
      title: 'Bem-vinda ao Elegance Fit Face - PRO',
      subtitle: 'Beleza natural através da constância',
      description: 'A verdadeira elegância não está em promessas milagrosas, mas na disciplina suave e no respeito à fisiologia do seu rosto.',
      icon: Sparkles
    },
    {
      title: 'O Método Natural',
      subtitle: 'Crioterapia + Exercícios + Ingredientes da Terra',
      description: 'Combine o poder do gelo, movimentos faciais precisos e elementos naturais para resultados progressivos e reais.',
      icon: Leaf
    },
    {
      title: 'Seu Ritual Diário',
      subtitle: 'Apenas 5-10 minutos por dia',
      description: 'Crie uma rotina elegante de autocuidado que se integra naturalmente ao seu dia, como um momento de spa em casa.',
      icon: Calendar
    }
  ]

  const goals = [
    {
      id: 'desinchar' as Goal,
      title: 'Reduzir Inchaço',
      description: 'Drenagem linfática e alívio facial',
      gradient: 'from-blue-400 to-cyan-500'
    },
    {
      id: 'afinar' as Goal,
      title: 'Afinar o Rosto',
      description: 'Definição suave e natural',
      gradient: 'from-purple-400 to-pink-500'
    },
    {
      id: 'contorno' as Goal,
      title: 'Definir Contorno',
      description: 'Mandíbula e linha facial marcada',
      gradient: 'from-amber-400 to-orange-500'
    }
  ]

  const iceSculptProtocols = [
    {
      id: 'desinchar',
      title: 'Protocolo Desinchar',
      duration: '3-5 minutos',
      steps: [
        'Prepare seu cubo ICElegance com água filtrada ou chá de camomila congelado',
        'Movimentos suaves do centro para fora: testa, bochechas, queixo',
        'Pressão leve, sem forçar a pele',
        'Finalize com leves toques ascendentes no pescoço'
      ]
    },
    {
      id: 'afinar',
      title: 'Protocolo Afinar',
      duration: '5-7 minutos',
      steps: [
        'Use o cubo com chá verde congelado para potencializar',
        'Movimentos circulares nas bochechas, sempre para cima',
        'Deslize da maçã do rosto até a têmpora',
        'Repita 10x cada lado com pressão média'
      ]
    },
    {
      id: 'contorno',
      title: 'Protocolo Definir Contorno',
      duration: '5-8 minutos',
      steps: [
        'Cubo com água de pepino congelada',
        'Linha da mandíbula: do queixo até a orelha, 15x',
        'Pressão firme mas confortável',
        'Finalize com movimentos em "V" no queixo'
      ]
    }
  ]

  const faceFormExercises = [
    {
      title: 'Elevação de Bochechas',
      duration: '30 segundos',
      description: 'Sorria amplamente mantendo os lábios fechados. Segure por 5 segundos, relaxe. Repita 6x.',
      warning: 'Não force rugas ao redor dos olhos'
    },
    {
      title: 'Definição de Mandíbula',
      duration: '45 segundos',
      description: 'Projete o queixo para frente, sentindo tensão na linha da mandíbula. Segure 5s, relaxe. Repita 8x.',
      warning: 'Evite tensão no pescoço'
    },
    {
      title: 'Contorno do Rosto',
      duration: '40 segundos',
      description: 'Faça "O" com a boca, depois "E" bem aberto. Alterne lentamente 10x.',
      warning: 'Movimentos suaves e controlados'
    },
    {
      title: 'Lifting Natural',
      duration: '30 segundos',
      description: 'Olhe para cima, lábios relaxados. Faça movimento de beijo 15x.',
      warning: 'Não exagere na frequência'
    }
  ]

  const recipes = [
    {
      title: 'Água de Pepino',
      ingredients: ['1 pepino orgânico', 'Água filtrada'],
      benefit: 'Desincha e refresca',
      instructions: 'Bata o pepino com água, coe e congele no cubo ICElegance'
    },
    {
      title: 'Chá Verde Antioxidante',
      ingredients: ['Chá verde orgânico', 'Água filtrada'],
      benefit: 'Afina e tonifica',
      instructions: 'Prepare chá concentrado, deixe esfriar e congele'
    },
    {
      title: 'Infusão de Camomila',
      ingredients: ['Flores de camomila', 'Água filtrada'],
      benefit: 'Acalma e desinfla',
      instructions: 'Faça infusão forte, coe, esfrie e congele'
    },
    {
      title: 'Água de Rosas',
      ingredients: ['Pétalas de rosa orgânicas', 'Água filtrada'],
      benefit: 'Ilumina e suaviza',
      instructions: 'Ferva pétalas, deixe esfriar, coe e congele'
    },
    {
      title: 'Chá de Hibisco',
      ingredients: ['Hibisco seco', 'Água filtrada'],
      benefit: 'Revitaliza e define',
      instructions: 'Prepare chá, deixe esfriar completamente e congele'
    }
  ]

  const handleNameSubmit = () => {
    if (userData.name.trim()) {
      setScreen('goal')
    }
  }

  const handleGoalSelect = (goal: Goal) => {
    setUserData({
      ...userData,
      goal,
      onboardingCompleted: true
    })
    setScreen('home')
  }

  const addDailyEntry = (feeling: string, swelling: number) => {
    const today = new Date().toISOString().split('T')[0]
    const newEntry: DailyEntry = {
      date: today,
      feeling,
      swelling,
      completed: true
    }
    setDailyEntries([...dailyEntries.filter(e => e.date !== today), newEntry])
  }

  // Onboarding Screen
  if (screen === 'onboarding') {
    const content = onboardingContent[onboardingStep]
    const Icon = content.icon

    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rose-400 to-purple-500 flex items-center justify-center mb-8 shadow-lg">
            <Icon className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-3xl font-light text-gray-800 mb-3 text-center">
            {content.title}
          </h1>
          <p className="text-sm font-medium text-rose-500 mb-6 text-center">{content.subtitle}</p>
          <p className="text-base text-gray-600 text-center max-w-md leading-relaxed">{content.description}</p>
        </div>

        <div className="px-6 pb-8">
          <div className="flex gap-2 justify-center mb-6">
            {onboardingContent.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === onboardingStep ? 'w-8 bg-rose-500' : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => {
              if (onboardingStep === onboardingContent.length - 1) {
                setScreen('name-input')
              } else {
                setOnboardingStep(onboardingStep + 1)
              }
            }}
            className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {onboardingStep === onboardingContent.length - 1 ? 'Começar' : 'Continuar'}
          </button>
        </div>
      </div>
    )
  }

  // Name Input Screen
  if (screen === 'name-input') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-light text-gray-800 mb-3 text-center">Como podemos te chamar?</h1>
          <p className="text-sm text-gray-600 mb-8 text-center">Vamos personalizar sua experiência</p>
          
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            placeholder="Seu nome"
            className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-rose-400 outline-none transition-colors text-center text-lg"
            onKeyPress={(e) => e.key === 'Enter' && handleNameSubmit()}
          />

          <button
            onClick={handleNameSubmit}
            disabled={!userData.name.trim()}
            className="w-full mt-6 bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
          </button>
        </div>
      </div>
    )
  }

  // Goal Selection Screen
  if (screen === 'goal') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50 px-6 py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-light text-gray-800 mb-3 text-center">
            Olá, {userData.name}!
          </h1>
          <p className="text-sm text-gray-600 mb-10 text-center">
            Qual é seu objetivo principal?
          </p>

          <div className="space-y-4">
            {goals.map((goal) => (
              <button
                key={goal.id}
                onClick={() => handleGoalSelect(goal.id)}
                className="w-full p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 text-left group"
              >
                <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${goal.gradient} text-white text-xs font-medium mb-3`}>
                  Foco Principal
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">{goal.title}</h3>
                <p className="text-sm text-gray-600">{goal.description}</p>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-rose-500 transition-colors ml-auto mt-2" />
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Home Screen
  if (screen === 'home') {
    const todayEntry = dailyEntries.find(e => e.date === new Date().toISOString().split('T')[0])

    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-purple-50">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-6">
          <h1 className="text-2xl font-light text-gray-800">Elegance Fit Face</h1>
          <p className="text-sm text-gray-600 mt-1">Olá, {userData.name} ✨</p>
        </div>

        {/* Today's Status */}
        <div className="px-6 py-6">
          <div className="bg-white rounded-2xl p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-800">Hoje</h2>
              {todayEntry?.completed && (
                <div className="flex items-center gap-2 text-green-600">
                  <Check className="w-5 h-5" />
                  <span className="text-sm font-medium">Completo</span>
                </div>
              )}
            </div>
            <p className="text-sm text-gray-600">
              {todayEntry?.completed 
                ? 'Parabéns! Você completou sua rotina hoje.' 
                : 'Comece sua rotina de autocuidado facial'}
            </p>
          </div>
        </div>

        {/* Main Menu */}
        <div className="px-6 pb-6 space-y-4">
          <button
            onClick={() => setScreen('ice-sculpt')}
            className="w-full bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-6 text-left shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Droplet className="w-8 h-8 text-white mb-3" />
            <h3 className="text-xl font-medium text-white mb-2">ICE SCULPT</h3>
            <p className="text-sm text-blue-50">Crioterapia facial guiada</p>
          </button>

          <button
            onClick={() => setScreen('face-form')}
            className="w-full bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-6 text-left shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Dumbbell className="w-8 h-8 text-white mb-3" />
            <h3 className="text-xl font-medium text-white mb-2">FACE FORM</h3>
            <p className="text-sm text-purple-50">Exercícios faciais musculares</p>
          </button>

          <button
            onClick={() => setScreen('recipes')}
            className="w-full bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-6 text-left shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Leaf className="w-8 h-8 text-white mb-3" />
            <h3 className="text-xl font-medium text-white mb-2">RECEITAS NATURAIS</h3>
            <p className="text-sm text-green-50">Ingredientes da terra para congelar</p>
          </button>

          <button
            onClick={() => setScreen('routine')}
            className="w-full bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-6 text-left shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Calendar className="w-8 h-8 text-white mb-3" />
            <h3 className="text-xl font-medium text-white mb-2">ROTINA DE 7 DIAS</h3>
            <p className="text-sm text-amber-50">Seu diário de progresso</p>
          </button>
        </div>
      </div>
    )
  }

  // Ice Sculpt Screen
  if (screen === 'ice-sculpt') {
    const protocol = iceSculptProtocols.find(p => p.id === userData.goal) || iceSculptProtocols[0]

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-6 flex items-center gap-4">
          <button onClick={() => setScreen('home')} className="text-gray-600 hover:text-gray-800">
            <X className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-medium text-gray-800">ICE SCULPT</h1>
        </div>

        <div className="px-6 py-8">
          <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl p-8 text-white mb-6 shadow-lg">
            <Droplet className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-light mb-2">{protocol.title}</h2>
            <p className="text-blue-100">Duração: {protocol.duration}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4">Passo a passo</h3>
            <div className="space-y-4">
              {protocol.steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-medium">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-gray-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-800">
              <span className="font-medium">Lembre-se:</span> Movimentos sempre suaves, sem pressionar demais. O gelo deve deslizar confortavelmente pela pele.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Face Form Screen
  if (screen === 'face-form') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-6 flex items-center gap-4">
          <button onClick={() => setScreen('home')} className="text-gray-600 hover:text-gray-800">
            <X className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-medium text-gray-800">FACE FORM</h1>
        </div>

        <div className="px-6 py-8">
          <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-8 text-white mb-6 shadow-lg">
            <Dumbbell className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-light mb-2">Exercícios Faciais</h2>
            <p className="text-purple-100">Série completa: 3-5 minutos</p>
          </div>

          <div className="space-y-4">
            {faceFormExercises.map((exercise, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium text-gray-800">{exercise.title}</h3>
                  <span className="text-sm text-purple-600 font-medium">{exercise.duration}</span>
                </div>
                <p className="text-sm text-gray-700 mb-3">{exercise.description}</p>
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs text-red-700">
                    <span className="font-medium">⚠️ Atenção:</span> {exercise.warning}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-purple-50 border border-purple-200 rounded-xl p-4">
            <p className="text-sm text-purple-800">
              <span className="font-medium">Importante:</span> Faça os exercícios 1x ao dia. Mais não significa melhores resultados. Respeite o tempo de recuperação muscular.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Recipes Screen
  if (screen === 'recipes') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-6 flex items-center gap-4">
          <button onClick={() => setScreen('home')} className="text-gray-600 hover:text-gray-800">
            <X className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-medium text-gray-800">RECEITAS NATURAIS</h1>
        </div>

        <div className="px-6 py-8">
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-8 text-white mb-6 shadow-lg">
            <Leaf className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-light mb-2">Ingredientes da Terra</h2>
            <p className="text-green-100">Para congelar no seu cubo ICElegance</p>
          </div>

          <div className="space-y-4">
            {recipes.map((recipe, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{recipe.title}</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium mb-3">
                  {recipe.benefit}
                </div>
                <div className="mb-3">
                  <p className="text-xs font-medium text-gray-600 mb-2">INGREDIENTES:</p>
                  <ul className="space-y-1">
                    {recipe.ingredients.map((ing, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-600 mb-2">PREPARO:</p>
                  <p className="text-sm text-gray-700">{recipe.instructions}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-green-800">
              <span className="font-medium">Dica:</span> Prepare suas receitas no fim de semana e congele em forminhas de gelo. Use ingredientes orgânicos sempre que possível.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Routine Screen
  if (screen === 'routine') {
    const last7Days = Array.from({ length: 7 }, (_, i) => {
      const date = new Date()
      date.setDate(date.getDate() - i)
      return date.toISOString().split('T')[0]
    }).reverse()

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-6 flex items-center gap-4">
          <button onClick={() => setScreen('home')} className="text-gray-600 hover:text-gray-800">
            <X className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-medium text-gray-800">ROTINA DE 7 DIAS</h1>
        </div>

        <div className="px-6 py-8">
          <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-8 text-white mb-6 shadow-lg">
            <Calendar className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-light mb-2">Seu Diário</h2>
            <p className="text-amber-100">Acompanhe sua jornada de constância</p>
          </div>

          <div className="space-y-3 mb-6">
            {last7Days.map((date) => {
              const entry = dailyEntries.find(e => e.date === date)
              const dateObj = new Date(date + 'T00:00:00')
              const dayName = dateObj.toLocaleDateString('pt-BR', { weekday: 'short' })
              const dayNum = dateObj.getDate()
              const isToday = date === new Date().toISOString().split('T')[0]

              return (
                <div
                  key={date}
                  className={`bg-white rounded-xl p-4 shadow-md ${isToday ? 'ring-2 ring-amber-400' : ''}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-xs text-gray-500 uppercase">{dayName}</p>
                        <p className="text-xl font-medium text-gray-800">{dayNum}</p>
                      </div>
                      <div>
                        {entry?.completed ? (
                          <>
                            <p className="text-sm font-medium text-gray-800">{entry.feeling}</p>
                            <p className="text-xs text-gray-600">Inchaço: {entry.swelling}/10</p>
                          </>
                        ) : (
                          <p className="text-sm text-gray-500">
                            {isToday ? 'Aguardando registro' : 'Não registrado'}
                          </p>
                        )}
                      </div>
                    </div>
                    {entry?.completed && (
                      <Check className="w-6 h-6 text-green-500" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Quick Log for Today */}
          {!dailyEntries.find(e => e.date === new Date().toISOString().split('T')[0]) && (
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Registrar Hoje</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Como você se sente?</label>
                  <input
                    type="text"
                    placeholder="Ex: Revigorada, relaxada..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-400 outline-none transition-colors"
                    id="feeling-input"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Nível de inchaço (0-10)</label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    defaultValue="5"
                    className="w-full"
                    id="swelling-input"
                  />
                </div>
                <button
                  onClick={() => {
                    const feeling = (document.getElementById('feeling-input') as HTMLInputElement).value
                    const swelling = parseInt((document.getElementById('swelling-input') as HTMLInputElement).value)
                    if (feeling) {
                      addDailyEntry(feeling, swelling)
                    }
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Salvar Registro
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }

  return null
}
