import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const CalorieScanner = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      alert('Не удалось получить доступ к камере');
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraActive(false);
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0);
        const photoData = canvas.toDataURL('image/jpeg');
        setImage(photoData);
        setResult(null);
        stopCamera();
      }
    }
  };

  const analyzeImage = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setResult({
        dish: 'Паста Карбонара',
        calories: 580,
        protein: 24,
        fat: 32,
        carbs: 48,
        weight: 350,
        confidence: 92,
        ingredients: [
          { name: 'Спагетти', calories: 220 },
          { name: 'Бекон', calories: 180 },
          { name: 'Яйца', calories: 120 },
          { name: 'Сыр Пармезан', calories: 60 }
        ]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  const resetScanner = () => {
    setImage(null);
    setResult(null);
    stopCamera();
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

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-4">
              <Icon name="ScanLine" size={20} className="text-primary" />
              <span className="font-semibold">Сканер калорий</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Определение калорийности по фото</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Сфотографируйте блюдо или загрузите фото — AI мгновенно определит калории и состав
            </p>
          </div>

          {!image && !isCameraActive && (
            <Card className="animate-fade-in">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div 
                    className="border-2 border-dashed border-primary/30 rounded-xl p-12 text-center hover:border-primary/60 hover:bg-accent/20 transition-all cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Icon name="Upload" size={48} className="mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">Загрузить фото</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Выберите файл с устройства
                    </p>
                    <Badge variant="secondary">JPG, PNG до 10 МБ</Badge>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>

                  <div 
                    className="border-2 border-dashed border-primary/30 rounded-xl p-12 text-center hover:border-primary/60 hover:bg-accent/20 transition-all cursor-pointer"
                    onClick={startCamera}
                  >
                    <Icon name="Camera" size={48} className="mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">Сделать фото</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Используйте камеру устройства
                    </p>
                    <Badge variant="secondary">Мгновенный снимок</Badge>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-accent/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Icon name="Info" size={20} className="text-primary mt-1" />
                    <div className="text-sm">
                      <p className="font-semibold mb-2">Советы для точного анализа:</p>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Фотографируйте блюдо сверху на светлом фоне</li>
                        <li>• Убедитесь, что всё блюдо помещается в кадр</li>
                        <li>• Избегайте теней и бликов</li>
                        <li>• Для точности укажите вес порции, если известен</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {isCameraActive && (
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <div className="relative">
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    className="w-full rounded-lg"
                  />
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="border-4 border-primary/40 rounded-lg w-full h-full m-4" />
                  </div>
                </div>
                <canvas ref={canvasRef} className="hidden" />
                <div className="flex gap-4 justify-center mt-6">
                  <Button size="lg" onClick={takePhoto} className="gap-2">
                    <Icon name="Camera" size={20} />
                    Сделать снимок
                  </Button>
                  <Button size="lg" variant="outline" onClick={stopCamera}>
                    Отмена
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {image && !result && (
            <Card className="animate-fade-in">
              <CardContent className="p-6">
                <img src={image} alt="Uploaded" className="w-full rounded-lg mb-6" />
                <div className="flex gap-4 justify-center">
                  <Button size="lg" onClick={analyzeImage} disabled={isAnalyzing} className="gap-2">
                    {isAnalyzing ? (
                      <>
                        <Icon name="Loader2" size={20} className="animate-spin" />
                        Анализирую...
                      </>
                    ) : (
                      <>
                        <Icon name="Sparkles" size={20} />
                        Определить калорийность
                      </>
                    )}
                  </Button>
                  <Button size="lg" variant="outline" onClick={resetScanner}>
                    Загрузить другое фото
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {result && (
            <div className="space-y-6 animate-fade-in">
              <Card>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <img src={image!} alt="Analyzed" className="w-full rounded-lg" />
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2">{result.dish}</h3>
                          <Badge variant="secondary" className="gap-1">
                            <Icon name="Target" size={14} />
                            Точность: {result.confidence}%
                          </Badge>
                        </div>
                      </div>

                      <div className="bg-primary/10 rounded-xl p-6 mb-6">
                        <div className="text-center">
                          <div className="text-5xl font-bold text-primary mb-2">{result.calories}</div>
                          <div className="text-muted-foreground">калорий на порцию</div>
                          <div className="text-sm text-muted-foreground mt-1">≈ {result.weight}г</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="text-center p-4 bg-accent/20 rounded-lg">
                          <div className="text-2xl font-bold text-blue-500">{result.protein}г</div>
                          <div className="text-xs text-muted-foreground">Белки</div>
                        </div>
                        <div className="text-center p-4 bg-accent/20 rounded-lg">
                          <div className="text-2xl font-bold text-yellow-500">{result.fat}г</div>
                          <div className="text-xs text-muted-foreground">Жиры</div>
                        </div>
                        <div className="text-center p-4 bg-accent/20 rounded-lg">
                          <div className="text-2xl font-bold text-green-500">{result.carbs}г</div>
                          <div className="text-xs text-muted-foreground">Углеводы</div>
                        </div>
                      </div>

                      <Button className="w-full gap-2" onClick={() => navigate('/cookbook')}>
                        <Icon name="BookmarkPlus" size={18} />
                        Сохранить в мою книгу
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="ChefHat" size={20} />
                    Состав блюда
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {result.ingredients.map((ingredient: any, idx: number) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-accent/20 rounded-lg">
                        <span className="font-medium">{ingredient.name}</span>
                        <span className="text-muted-foreground">{ingredient.calories} ккал</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4 justify-center">
                <Button size="lg" onClick={resetScanner} className="gap-2">
                  <Icon name="ScanLine" size={20} />
                  Сканировать новое блюдо
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/')} className="gap-2">
                  <Icon name="Home" size={20} />
                  На главную
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CalorieScanner;
