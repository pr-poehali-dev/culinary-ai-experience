import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedDiet, setSelectedDiet] = useState('');

  const recipes = [
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
    },
    {
      id: 5,
      title: 'Французский луковый суп',
      cuisine: 'Французская',
      time: '45 мин',
      difficulty: 'Средне',
      calories: 320,
      image: '🍲',
      tags: ['Классика', 'Супы']
    },
    {
      id: 6,
      title: 'Японские роллы филадельфия',
      cuisine: 'Японская',
      time: '30 мин',
      difficulty: 'Сложно',
      calories: 350,
      image: '🍣',
      tags: ['ЗОЖ', 'Морепродукты']
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
            <h2 className="text-4xl font-bold mb-3">Поиск рецептов</h2>
            <p className="text-muted-foreground text-lg">Найдите идеальное блюдо с умными фильтрами</p>
          </div>

          <Card className="mb-8 animate-fade-in">
            <CardContent className="p-6">
              <div className="space-y-4">
                <Input 
                  placeholder="Поиск по названию блюда..."
                  className="text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                
                <div className="grid md:grid-cols-3 gap-4">
                  <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                    <SelectTrigger>
                      <SelectValue placeholder="Кухня мира" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все кухни</SelectItem>
                      <SelectItem value="italian">Итальянская</SelectItem>
                      <SelectItem value="asian">Азиатская</SelectItem>
                      <SelectItem value="french">Французская</SelectItem>
                      <SelectItem value="mediterranean">Средиземноморская</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedDiet} onValueChange={setSelectedDiet}>
                    <SelectTrigger>
                      <SelectValue placeholder="Тип диеты" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Любая</SelectItem>
                      <SelectItem value="vegan">Веган</SelectItem>
                      <SelectItem value="vegetarian">Вегетарианская</SelectItem>
                      <SelectItem value="keto">Кето</SelectItem>
                      <SelectItem value="healthy">ЗОЖ</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button className="gap-2">
                    <Icon name="Search" size={18} />
                    Найти
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Быстрые блюда
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Десерты
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Супы
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Салаты
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    Морепродукты
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe, idx) => (
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
      </div>
    </div>
  );
};

export default Search;
