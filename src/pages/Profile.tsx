import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@/components/ui/switch';

const Profile = () => {
  const navigate = useNavigate();

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
          <div className="mb-8 animate-fade-in">
            <h2 className="text-4xl font-bold mb-3">Профиль пользователя</h2>
            <p className="text-muted-foreground text-lg">Настройте предпочтения для персональных рекомендаций</p>
          </div>

          <div className="grid gap-6">
            <Card className="animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" size={24} className="text-primary" />
                  Личная информация
                </CardTitle>
                <CardDescription>Основные данные вашего профиля</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-3xl">
                    👤
                  </div>
                  <Button variant="outline" className="gap-2">
                    <Icon name="Upload" size={16} />
                    Загрузить фото
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" defaultValue="Александр" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" defaultValue="alex@example.com" />
                  </div>
                </div>

                <Button className="gap-2">
                  <Icon name="Save" size={16} />
                  Сохранить изменения
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Heart" size={24} className="text-primary" />
                  Пищевые предпочтения
                </CardTitle>
                <CardDescription>Помогите AI подбирать рецепты под ваш стиль питания</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="mb-3 block">Выберите ваши диеты и предпочтения:</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground px-4 py-2">
                      Веган
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground px-4 py-2">
                      Вегетарианство
                    </Badge>
                    <Badge className="cursor-pointer px-4 py-2">
                      Кето
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground px-4 py-2">
                      Палео
                    </Badge>
                    <Badge className="cursor-pointer px-4 py-2">
                      Средиземноморская
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground px-4 py-2">
                      Безглютеновая
                    </Badge>
                  </div>
                </div>

                <div>
                  <Label className="mb-3 block">Избегаемые продукты:</Label>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="cursor-pointer">
                      Орехи
                      <Icon name="X" size={12} className="ml-1" />
                    </Badge>
                    <Badge variant="secondary" className="cursor-pointer">
                      Молочные продукты
                      <Icon name="X" size={12} className="ml-1" />
                    </Badge>
                    <Button variant="outline" size="sm" className="h-7 gap-1">
                      <Icon name="Plus" size={14} />
                      Добавить
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Settings" size={24} className="text-primary" />
                  Настройки AI-рекомендаций
                </CardTitle>
                <CardDescription>Персонализируйте опыт использования платформы</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="seasonal">Сезонные рекомендации</Label>
                    <p className="text-sm text-muted-foreground">Предлагать рецепты с сезонными продуктами</p>
                  </div>
                  <Switch id="seasonal" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="quick">Быстрые рецепты</Label>
                    <p className="text-sm text-muted-foreground">Приоритет блюдам до 30 минут</p>
                  </div>
                  <Switch id="quick" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notifications">Уведомления</Label>
                    <p className="text-sm text-muted-foreground">Получать новые идеи рецептов</p>
                  </div>
                  <Switch id="notifications" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="experimental">Экспериментальные блюда</Label>
                    <p className="text-sm text-muted-foreground">Показывать необычные сочетания продуктов</p>
                  </div>
                  <Switch id="experimental" defaultChecked />
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                  Статистика
                </CardTitle>
                <CardDescription>Ваша активность на платформе</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary">42</div>
                    <p className="text-sm text-muted-foreground mt-1">Рецептов сохранено</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/10 rounded-lg">
                    <div className="text-3xl font-bold text-secondary">15</div>
                    <p className="text-sm text-muted-foreground mt-1">Своих рецептов</p>
                  </div>
                  <div className="text-center p-4 bg-accent/20 rounded-lg">
                    <div className="text-3xl font-bold text-foreground">128</div>
                    <p className="text-sm text-muted-foreground mt-1">Блюд приготовлено</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary">23</div>
                    <p className="text-sm text-muted-foreground mt-1">Дней подряд</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
