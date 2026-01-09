import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';

const Inspiration = () => {
  const navigate = useNavigate();

  const inspirationRecipes = [
    {
      title: 'Шоколадный авокадо-мусс с чили',
      description: 'Необычное сочетание сладкого и острого',
      surprise: 'Авокадо + тёмный шоколад + перец чили',
      emoji: '🥑🍫🌶️'
    },
    {
      title: 'Арбузный салат с фетой и мятой',
      description: 'Освежающий микс текстур',
      surprise: 'Арбуз + сыр фета + мята + бальзамик',
      emoji: '🍉🧀🌿'
    },
    {
      title: 'Бургер из свёклы с хумусом',
      description: 'Веганская альтернатива классике',
      surprise: 'Свёкла + нут + тахини + киноа',
      emoji: '🍔🌱'
    },
    {
      title: 'Тыквенный крем-суп с апельсином',
      description: 'Осеннее настроение в тарелке',
      surprise: 'Тыква + апельсин + имбирь + кокосовое молоко',
      emoji: '🎃🍊'
    },
    {
      title: 'Лосось с манго-сальсой',
      description: 'Тропическая свежесть и нежность рыбы',
      surprise: 'Лосось + манго + лайм + кинза',
      emoji: '🐟🥭'
    },
    {
      title: 'Ризотто с черникой и козьим сыром',
      description: 'Сладкий и солёный в одной тарелке',
      surprise: 'Рис арборио + черника + козий сыр + тимьян',
      emoji: '🍚🫐'
    },
    {
      title: 'Говядина с кофейной корочкой',
      description: 'Кофе не только для завтрака',
      surprise: 'Стейк + молотый кофе + коричневый сахар',
      emoji: '🥩☕'
    },
    {
      title: 'Мороженое из базилика с клубникой',
      description: 'Травяная свежесть в десерте',
      surprise: 'Базилик + клубника + сливки + мёд',
      emoji: '🍓🌿🍨'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-accent/10 to-background">
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
              <div className="text-4xl">👨‍🍳</div>
              <div>
                <h1 className="text-2xl font-bold text-primary">AI Кулинар</h1>
                <p className="text-sm text-muted-foreground">Кулинария с искусственным интеллектом</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <Button variant="ghost" className="gap-2" onClick={() => navigate('/search')}>
                <Icon name="Search" size={18} />
                Поиск
              </Button>
              <Button variant="ghost" className="gap-2" onClick={() => navigate('/cookbook')}>
                <Icon name="BookOpen" size={18} />
                Моя книга
              </Button>
              <Button variant="ghost" className="gap-2" onClick={() => navigate('/profile')}>
                <Icon name="User" size={18} />
                Профиль
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
              <Icon name="Lightbulb" size={20} className="text-primary" />
              <span className="font-semibold">Режим вдохновения</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Необычные кулинарные идеи</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              AI предлагает смелые сочетания продуктов для творческих экспериментов. Откройте для себя новые вкусы!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {inspirationRecipes.map((recipe, idx) => (
              <Card 
                key={idx} 
                className="hover-scale cursor-pointer animate-fade-in overflow-hidden"
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => navigate('/generator')}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{recipe.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                      <p className="text-muted-foreground mb-3">{recipe.description}</p>
                      <div className="flex items-center gap-2 text-sm bg-primary/10 px-3 py-2 rounded-lg">
                        <Icon name="Sparkles" size={16} className="text-primary" />
                        <span className="font-medium text-primary">{recipe.surprise}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <Button size="lg" className="gap-2" onClick={() => window.location.reload()}>
              <Icon name="Shuffle" size={20} />
              Показать другие идеи
            </Button>
            <p className="text-sm text-muted-foreground">
              Каждое обновление генерирует новые комбинации от AI
            </p>
          </div>

          <Card className="mt-12 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <CardContent className="p-8 text-center">
              <div className="text-6xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-3">Есть своя необычная идея?</h3>
              <p className="text-muted-foreground mb-6">
                Используйте AI-генератор для создания персонального рецепта
              </p>
              <Button size="lg" className="gap-2" onClick={() => navigate('/generator')}>
                <Icon name="Wand2" size={20} />
                Создать рецепт
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
