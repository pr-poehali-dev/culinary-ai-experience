import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate, useParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const RecipeDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const recipe = {
    id: id,
    title: 'Итальянская паста с грибами',
    cuisine: 'Итальянская',
    time: '25 мин',
    difficulty: 'Легко',
    servings: 4,
    calories: 450,
    image: '🍝',
    tags: ['Вегетарианское', 'Быстрое'],
    description: 'Классическая итальянская паста с грибами в сливочном соусе. Простое, но изысканное блюдо для ужина в будний день.',
    ingredients: [
      { name: 'Спагетти', amount: '400 г' },
      { name: 'Шампиньоны', amount: '300 г' },
      { name: 'Сливки 20%', amount: '200 мл' },
      { name: 'Чеснок', amount: '3 зубчика' },
      { name: 'Пармезан', amount: '100 г' },
      { name: 'Оливковое масло', amount: '3 ст.л.' },
      { name: 'Петрушка', amount: '1 пучок' },
      { name: 'Соль, перец', amount: 'по вкусу' }
    ],
    steps: [
      'Отварите спагетти в подсоленной воде согласно инструкции на упаковке до состояния al dente.',
      'Нарежьте грибы тонкими пластинками, чеснок мелко порубите.',
      'Разогрейте оливковое масло на сковороде, обжарьте чеснок 30 секунд.',
      'Добавьте грибы и жарьте на сильном огне 5-7 минут до золотистого цвета.',
      'Влейте сливки, доведите до кипения и тушите 3 минуты.',
      'Добавьте отваренную пасту в сковороду, перемешайте.',
      'Посыпьте тёртым пармезаном и рубленой петрушкой, приправьте по вкусу.',
      'Подавайте горячим с дополнительным пармезаном.'
    ],
    nutrition: {
      calories: 450,
      protein: 18,
      carbs: 65,
      fat: 15
    }
  };

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

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" className="gap-2 mb-6" onClick={() => navigate(-1)}>
          <Icon name="ArrowLeft" size={18} />
          Назад
        </Button>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="animate-fade-in">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center text-9xl mb-6">
                {recipe.image}
              </div>
              
              <div className="flex gap-3">
                <Button className="flex-1 gap-2">
                  <Icon name="Heart" size={18} />
                  Сохранить
                </Button>
                <Button variant="outline" className="flex-1 gap-2">
                  <Icon name="Share2" size={18} />
                  Поделиться
                </Button>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="flex flex-wrap gap-2 mb-4">
                {recipe.tags.map(tag => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
                <Badge variant="outline">{recipe.cuisine}</Badge>
              </div>

              <h2 className="text-4xl font-bold mb-4">{recipe.title}</h2>
              <p className="text-muted-foreground text-lg mb-6">{recipe.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Card>
                  <CardContent className="p-4 text-center">
                    <Icon name="Clock" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="font-bold">{recipe.time}</div>
                    <div className="text-xs text-muted-foreground">Время</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Icon name="Users" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="font-bold">{recipe.servings} порции</div>
                    <div className="text-xs text-muted-foreground">Порции</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Icon name="ChefHat" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="font-bold">{recipe.difficulty}</div>
                    <div className="text-xs text-muted-foreground">Сложность</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4 text-center">
                    <Icon name="Flame" size={24} className="mx-auto mb-2 text-primary" />
                    <div className="font-bold">{recipe.calories} ккал</div>
                    <div className="text-xs text-muted-foreground">Калории</div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-3">Пищевая ценность (на порцию)</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Белки</span>
                      <span className="font-medium">{recipe.nutrition.protein} г</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Углеводы</span>
                      <span className="font-medium">{recipe.nutrition.carbs} г</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Жиры</span>
                      <span className="font-medium">{recipe.nutrition.fat} г</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Tabs defaultValue="ingredients" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <TabsList className="w-full mb-6">
              <TabsTrigger value="ingredients" className="flex-1 gap-2">
                <Icon name="ShoppingBasket" size={18} />
                Ингредиенты
              </TabsTrigger>
              <TabsTrigger value="steps" className="flex-1 gap-2">
                <Icon name="ListOrdered" size={18} />
                Приготовление
              </TabsTrigger>
              <TabsTrigger value="tips" className="flex-1 gap-2">
                <Icon name="Lightbulb" size={18} />
                Советы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ingredients">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    {recipe.ingredients.map((ingredient, idx) => (
                      <div key={idx} className="flex items-center justify-between py-2 border-b last:border-0">
                        <span className="text-foreground">{ingredient.name}</span>
                        <span className="font-medium text-primary">{ingredient.amount}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-6 gap-2">
                    <Icon name="Download" size={18} />
                    Экспортировать список покупок
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="steps">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {recipe.steps.map((step, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-foreground leading-relaxed">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-8">
                    <Button className="flex-1 gap-2">
                      <Icon name="Play" size={18} />
                      Режим готовки
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Icon name="Printer" size={18} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="tips">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-3 p-4 bg-primary/10 rounded-lg">
                    <Icon name="Lightbulb" size={20} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Совет шеф-повара</h4>
                      <p className="text-sm text-muted-foreground">
                        Для более насыщенного вкуса добавьте немного белого вина при тушении грибов
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 bg-secondary/10 rounded-lg">
                    <Icon name="Sparkles" size={20} className="text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Вариация</h4>
                      <p className="text-sm text-muted-foreground">
                        Можно заменить шампиньоны на белые грибы или вешенки для разнообразия
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-4 bg-accent/20 rounded-lg">
                    <Icon name="Info" size={20} className="text-foreground flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Хранение</h4>
                      <p className="text-sm text-muted-foreground">
                        Готовое блюдо хранится в холодильнике до 2 дней в герметичном контейнере
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
