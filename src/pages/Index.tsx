import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [selectedDiet, setSelectedDiet] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [ingredients, setIngredients] = useState('');

  const featuredRecipes = [
    {
      id: 1,
      title: 'Итальянская паста с грибами',
      cuisine: 'Итальянская',
      time: '25 мин',
      difficulty: 'Легко',
      calories: 450,
      image: '🍝',
      tags: ['Вегетарианское', 'Быстрое']
    },
    {
      id: 2,
      title: 'Лосось с овощами на гриле',
      cuisine: 'Средиземноморская',
      time: '35 мин',
      difficulty: 'Средне',
      calories: 380,
      image: '🐟',
      tags: ['Кето', 'ЗОЖ']
    },
    {
      id: 3,
      title: 'Веганский тайский карри',
      cuisine: 'Тайская',
      time: '40 мин',
      difficulty: 'Средне',
      calories: 320,
      image: '🍛',
      tags: ['Веган', 'Острое']
    },
    {
      id: 4,
      title: 'Киноа с запечённой тыквой',
      cuisine: 'Современная',
      time: '30 мин',
      difficulty: 'Легко',
      calories: 280,
      image: '🥗',
      tags: ['Веган', 'ЗОЖ']
    }
  ];

  const inspirationRecipes = [
    {
      title: 'Шоколадный авокадо-мусс с чили',
      description: 'Необычное сочетание сладкого и острого',
      surprise: 'Авокадо + тёмный шоколад + перец чили'
    },
    {
      title: 'Арбузный салат с фетой и мятой',
      description: 'Освежающий микс текстур',
      surprise: 'Арбуз + сыр фета + мята + бальзамик'
    },
    {
      title: 'Бургер из свёклы с хумусом',
      description: 'Веганская альтернатива классике',
      surprise: 'Свёкла + нут + тахини + киноа'
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

      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Кулинарные шедевры <br />
              <span className="text-primary">с помощью AI</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Генерируйте уникальные рецепты, находите блюда по ингредиентам и получайте персональные рекомендации от искусственного интеллекта
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gap-2 text-lg px-8" onClick={() => navigate('/generator')}>
                <Icon name="Sparkles" size={20} />
                Создать рецепт
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-lg px-8" onClick={() => navigate('/inspiration')}>
                <Icon name="Lightbulb" size={20} />
                Режим вдохновения
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="generator" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="generator" className="gap-2">
                <Icon name="Wand2" size={18} />
                Генератор
              </TabsTrigger>
              <TabsTrigger value="search" className="gap-2">
                <Icon name="Search" size={18} />
                Поиск
              </TabsTrigger>
              <TabsTrigger value="ingredients" className="gap-2">
                <Icon name="ShoppingBasket" size={18} />
                По продуктам
              </TabsTrigger>
              <TabsTrigger value="scanner" className="gap-2">
                <Icon name="ScanLine" size={18} />
                Сканер калорий
              </TabsTrigger>
            </TabsList>

            <TabsContent value="generator" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Sparkles" size={24} className="text-primary" />
                    AI-генератор уникальных рецептов
                  </CardTitle>
                  <CardDescription>
                    Опишите желаемое блюдо, и AI создаст персональный рецепт специально для вас
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Тип диеты</label>
                      <Select value={selectedDiet} onValueChange={setSelectedDiet}>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите диету" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="any">Любая</SelectItem>
                          <SelectItem value="vegan">Веган</SelectItem>
                          <SelectItem value="vegetarian">Вегетарианская</SelectItem>
                          <SelectItem value="keto">Кето</SelectItem>
                          <SelectItem value="paleo">Палео</SelectItem>
                          <SelectItem value="mediterranean">Средиземноморская</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Время готовки</label>
                      <Select value={cookingTime} onValueChange={setCookingTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Сколько времени?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">До 15 минут</SelectItem>
                          <SelectItem value="30">До 30 минут</SelectItem>
                          <SelectItem value="60">До 1 часа</SelectItem>
                          <SelectItem value="120">Более 1 часа</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">Особые пожелания</label>
                    <Textarea 
                      placeholder="Например: быстрый веганский ужин с грибами и киноа, что-то итальянское и согревающее..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full gap-2" size="lg">
                    <Icon name="Wand2" size={20} />
                    Сгенерировать рецепт
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="search" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Search" size={24} className="text-primary" />
                    Умный поиск рецептов
                  </CardTitle>
                  <CardDescription>
                    Фильтруйте по кухне, диете, времени приготовления и калориям
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input 
                    placeholder="Поиск по названию блюда..."
                    className="text-lg"
                  />
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      Итальянская
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      Азиатская
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      Веган
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      Кето
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      Быстрые блюда
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="ingredients" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="ShoppingBasket" size={24} className="text-primary" />
                    Что можно приготовить?
                  </CardTitle>
                  <CardDescription>
                    Введите продукты, которые у вас есть, и AI подберёт рецепты
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder="Например: курица, рис, помидоры, лук, чеснок..."
                    className="min-h-[120px]"
                  />
                  <Button className="w-full gap-2" size="lg">
                    <Icon name="ChefHat" size={20} />
                    Найти рецепты
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scanner" className="animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="ScanLine" size={24} className="text-primary" />
                    Определение калорийности по фото
                  </CardTitle>
                  <CardDescription>
                    Сфотографируйте блюдо — AI мгновенно определит калории и состав
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/60 hover:bg-accent/20 transition-all cursor-pointer" onClick={() => navigate('/calorie-scanner')}>
                      <Icon name="Camera" size={48} className="mx-auto mb-3 text-primary" />
                      <h4 className="font-bold mb-2">Сделать фото</h4>
                      <p className="text-sm text-muted-foreground">Используйте камеру</p>
                    </div>
                    <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/60 hover:bg-accent/20 transition-all cursor-pointer" onClick={() => navigate('/calorie-scanner')}>
                      <Icon name="Upload" size={48} className="mx-auto mb-3 text-primary" />
                      <h4 className="font-bold mb-2">Загрузить фото</h4>
                      <p className="text-sm text-muted-foreground">Выберите из галереи</p>
                    </div>
                  </div>
                  <Button className="w-full gap-2" size="lg" onClick={() => navigate('/calorie-scanner')}>
                    <Icon name="ScanLine" size={20} />
                    Открыть сканер калорий
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-2">Популярные рецепты</h3>
              <p className="text-muted-foreground">Рекомендации от AI на основе сезонности</p>
            </div>
            <Button variant="outline" className="gap-2">
              <Icon name="RefreshCw" size={18} />
              Обновить
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRecipes.map((recipe, idx) => (
              <Card 
                key={recipe.id} 
                className="hover-scale cursor-pointer overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
                onClick={() => navigate(`/recipe/${recipe.id}`)}
              >
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-8xl group-hover:scale-110 transition-transform duration-300">
                  {recipe.image}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{recipe.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 text-xs">
                    <Icon name="Clock" size={14} />
                    {recipe.time}
                    <span className="mx-1">•</span>
                    {recipe.difficulty}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {recipe.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Icon name="Flame" size={14} className="text-primary" />
                      {recipe.calories} ккал
                    </span>
                    <Badge variant="outline">{recipe.cuisine}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
                <Icon name="Lightbulb" size={20} className="text-primary" />
                <span className="font-semibold">Режим вдохновения</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">Необычные кулинарные идеи</h3>
              <p className="text-muted-foreground">
                AI предлагает смелые сочетания продуктов для творческих экспериментов
              </p>
            </div>

            <div className="space-y-4">
              {inspirationRecipes.map((recipe, idx) => (
                <Card 
                  key={idx} 
                  className="hover-scale cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">✨</div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2">{recipe.title}</h4>
                        <p className="text-muted-foreground mb-3">{recipe.description}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <Icon name="Sparkles" size={16} className="text-primary" />
                          <span className="font-medium text-primary">{recipe.surprise}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="gap-2" onClick={(e) => {
                        e.stopPropagation();
                        navigate('/generator');
                      }}>
                        <Icon name="ChefHat" size={16} />
                        Готовить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Shuffle" size={20} />
                Ещё идеи
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">👨‍🍳</div>
                <span className="font-bold text-xl">AI Кулинар</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Кулинарная платформа с искусственным интеллектом для создания уникальных рецептов
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer">Поиск рецептов</li>
                <li className="hover:text-foreground cursor-pointer">Генератор рецептов</li>
                <li className="hover:text-foreground cursor-pointer">Моя книга</li>
                <li className="hover:text-foreground cursor-pointer">Профиль</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <Button variant="outline" className="gap-2 w-full mb-2">
                <Icon name="Mail" size={16} />
                Написать нам
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                © 2026 AI Кулинар. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;