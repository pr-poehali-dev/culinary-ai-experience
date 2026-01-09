import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const Generator = () => {
  const navigate = useNavigate();
  const [selectedDiet, setSelectedDiet] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [difficulty, setDifficulty] = useState([2]);
  const [servings, setServings] = useState([4]);
  const [description, setDescription] = useState('');

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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 animate-fade-in text-center">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
              <Icon name="Sparkles" size={20} className="text-primary" />
              <span className="font-semibold">AI-генератор рецептов</span>
            </div>
            <h2 className="text-4xl font-bold mb-3">Создайте уникальный рецепт</h2>
            <p className="text-muted-foreground text-lg">
              Опишите желаемое блюдо, и искусственный интеллект создаст персональный рецепт специально для вас
            </p>
          </div>

          <Card className="animate-fade-in">
            <CardContent className="p-8 space-y-8">
              <div>
                <Label htmlFor="description" className="text-lg font-semibold mb-3 block">
                  Опишите желаемое блюдо
                </Label>
                <Textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Например: быстрый веганский ужин с грибами и киноа, что-то итальянское и согревающее, лёгкий десерт без сахара..."
                  className="min-h-[120px] text-base"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label className="mb-3 block">Тип диеты</Label>
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
                      <SelectItem value="glutenfree">Безглютеновая</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="mb-3 block">Время готовки</Label>
                  <Select value={cookingTime} onValueChange={setCookingTime}>
                    <SelectTrigger>
                      <SelectValue placeholder="Сколько времени?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">До 15 минут</SelectItem>
                      <SelectItem value="30">До 30 минут</SelectItem>
                      <SelectItem value="60">До 1 часа</SelectItem>
                      <SelectItem value="120">Более 1 часа</SelectItem>
                      <SelectItem value="any">Не важно</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="mb-3 block">
                    Уровень сложности: <span className="text-primary font-bold">
                      {difficulty[0] === 1 ? 'Легко' : difficulty[0] === 2 ? 'Средне' : 'Сложно'}
                    </span>
                  </Label>
                  <Slider
                    value={difficulty}
                    onValueChange={setDifficulty}
                    min={1}
                    max={3}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Легко</span>
                    <span>Средне</span>
                    <span>Сложно</span>
                  </div>
                </div>

                <div>
                  <Label className="mb-3 block">
                    Количество порций: <span className="text-primary font-bold">{servings[0]}</span>
                  </Label>
                  <Slider
                    value={servings}
                    onValueChange={setServings}
                    min={1}
                    max={12}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>1 порция</span>
                    <span>12 порций</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Button className="w-full gap-2 text-lg py-6" size="lg">
                  <Icon name="Wand2" size={20} />
                  Сгенерировать рецепт
                </Button>
                <Button variant="outline" className="w-full gap-2" onClick={() => navigate('/')}>
                  <Icon name="ArrowLeft" size={18} />
                  Вернуться на главную
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Lightbulb" size={24} className="text-primary" />
                Примеры запросов
              </CardTitle>
              <CardDescription>Вдохновитесь идеями для генерации</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div
                className="p-4 border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => setDescription('Быстрый завтрак с авокадо и яйцами')}
              >
                <p className="font-medium mb-1">Быстрый завтрак с авокадо и яйцами</p>
                <p className="text-sm text-muted-foreground">Здоровый старт дня за 15 минут</p>
              </div>
              <div
                className="p-4 border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => setDescription('Итальянская паста с морепродуктами и белым вином')}
              >
                <p className="font-medium mb-1">Итальянская паста с морепродуктами и белым вином</p>
                <p className="text-sm text-muted-foreground">Ресторанное блюдо дома</p>
              </div>
              <div
                className="p-4 border rounded-lg cursor-pointer hover:bg-accent/50 transition-colors"
                onClick={() => setDescription('Веганский шоколадный торт без выпечки')}
              >
                <p className="font-medium mb-1">Веганский шоколадный торт без выпечки</p>
                <p className="text-sm text-muted-foreground">Десерт для любого случая</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Generator;
