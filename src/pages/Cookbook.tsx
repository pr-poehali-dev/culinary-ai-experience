import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Cookbook = () => {
  const navigate = useNavigate();

  const savedRecipes = [
    {
      id: 1,
      title: 'Итальянская паста с грибами',
      time: '25 мин',
      image: '🍝',
      savedDate: '5 дней назад'
    },
    {
      id: 3,
      title: 'Веганский тайский карри',
      time: '40 мин',
      image: '🍛',
      savedDate: '2 недели назад'
    }
  ];

  const myRecipes = [
    {
      id: 101,
      title: 'Бабушкин борщ',
      time: '90 мин',
      image: '🥣',
      createdDate: '1 месяц назад',
      isPublic: true
    },
    {
      id: 102,
      title: 'Семейная шарлотка',
      time: '50 мин',
      image: '🍰',
      createdDate: '3 недели назад',
      isPublic: false
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
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 animate-fade-in">
            <h2 className="text-4xl font-bold mb-3">Моя кулинарная книга</h2>
            <p className="text-muted-foreground text-lg">Сохранённые рецепты и ваши собственные творения</p>
          </div>

          <Tabs defaultValue="saved" className="animate-fade-in">
            <TabsList className="mb-8">
              <TabsTrigger value="saved" className="gap-2">
                <Icon name="Heart" size={18} />
                Сохранённые
              </TabsTrigger>
              <TabsTrigger value="my" className="gap-2">
                <Icon name="ChefHat" size={18} />
                Мои рецепты
              </TabsTrigger>
            </TabsList>

            <TabsContent value="saved">
              {savedRecipes.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedRecipes.map((recipe, idx) => (
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
                          {recipe.savedDate}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="outline" size="sm" className="w-full gap-2">
                          <Icon name="Heart" size={14} className="fill-primary text-primary" />
                          В избранном
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-16 text-center">
                    <div className="text-6xl mb-4">📖</div>
                    <h3 className="text-xl font-bold mb-2">Нет сохранённых рецептов</h3>
                    <p className="text-muted-foreground mb-6">
                      Начните исследовать рецепты и сохраняйте понравившиеся
                    </p>
                    <Button onClick={() => navigate('/search')} className="gap-2">
                      <Icon name="Search" size={18} />
                      Найти рецепты
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="my">
              <div className="mb-6">
                <Button onClick={() => navigate('/generator')} className="gap-2">
                  <Icon name="Plus" size={18} />
                  Создать новый рецепт
                </Button>
              </div>

              {myRecipes.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myRecipes.map((recipe, idx) => (
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
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg">{recipe.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2 text-xs">
                              <Icon name="Clock" size={14} />
                              {recipe.time}
                              <span className="mx-1">•</span>
                              {recipe.createdDate}
                            </CardDescription>
                          </div>
                          {recipe.isPublic && (
                            <Badge variant="secondary" className="text-xs">
                              <Icon name="Globe" size={12} className="mr-1" />
                              Публичный
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1 gap-2">
                            <Icon name="Edit" size={14} />
                            Редактировать
                          </Button>
                          <Button variant="outline" size="sm">
                            <Icon name="Share2" size={14} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="py-16 text-center">
                    <div className="text-6xl mb-4">👨‍🍳</div>
                    <h3 className="text-xl font-bold mb-2">Создайте свой первый рецепт</h3>
                    <p className="text-muted-foreground mb-6">
                      Используйте AI-генератор или добавьте рецепт вручную
                    </p>
                    <Button onClick={() => navigate('/generator')} className="gap-2">
                      <Icon name="Sparkles" size={18} />
                      Создать рецепт
                    </Button>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Cookbook;
