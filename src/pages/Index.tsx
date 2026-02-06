import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const programItems = [
    {
      emoji: "✨",
      title: "Главное приключение: Семейный квест «Путь семьи»",
      description:
        "Не просто станции, а 5 островов к обновлению. На входе каждая семья получит волшебный буклет-путеводитель. Вместе с героями сказок вы выполните задания на ловкость, смекалку и взаимопомощь на пути к главному ритуалу — созданию семейного оберега и Древа Желаний. Пройдите весь путь — получите памятный символ года!",
    },
    {
      emoji: "🎨",
      title: "Творчество и ремесло: Тёплые Мастерские",
      description:
        "В нашем уютном творческом павильоне вас ждут мастер-классы от талантливых мастеров и партнёров: куклы-Масленицы, роспись пряников. Увезите с собой не просто сувенир, а частичку тепла, сделанную своими руками.",
    },
    {
      emoji: "🛍️",
      title: "Ярмарка с душой: Подарки для дома и семьи",
      description:
        "В ярмарочном павильоне — только отборные товары от проверенных мастеров и локальных производителей. Всё, что создаёт атмосферу уюта и праздника в вашем доме.",
    },
    {
      emoji: "🍯",
      title: "Вкусная Трапезная: Пища для души и тела",
      description:
        "Горячие блины с самыми разными начинками, сбитень, травяной чай из настоящего самовара, фермерские угощения. Всё — от наших гастрономических партнёров, которые разделяют наши ценности качества и заботы о семье.",
    },
    {
      emoji: "❄️",
      title: "Зимняя Удаль: Активный отдых на воздухе",
      description:
        "Прокат коньков, лыж и тюбингов! Весёлые старты, хороводы, общее прощание с зимой. Собранные купоны на островах обмениваем на подарок, который определит лототрон.",
    },
  ];

  const takeaways = [
    {
      icon: "Heart",
      title: "Опыт единения",
      description: "Чувство, что вы — команда, которая прошла увлекательный путь вместе.",
    },
    {
      icon: "Star",
      title: "Семейный оберег",
      description:
        "Браслет желаний, созданные вашими руками.",
    },

    {
      icon: "Users",
      title: "Вдохновение и контакты",
      description:
        "Знакомство с лучшими мастерами и семейными проектами города, идеи для ваших домашних традиций.",
    },
  ];

  const faqItems = [
    {
      question: "Будет где согреться?",
      answer:
        "Да! У нас два больших отапливаемых павильона (для мастер-классов, ярмарки и трапезной), где можно согреться, перекусить и отдохнуть. Для комфорта в уличных забавах одевайтесь тепло.",
    },
    {
      question: "Что входит в стоимость входного билета?",
      answer:
        "Вход на территорию, участие в квесте и всех активностях (кроме платных мастер-классов от партнёров и проката инвентаря). Билеты можно приобрести на входе. Дополнительно можно взять в аренду беседку у Парка отдыха \"Озёра\".",
    },
  ];

  const scrollToProgram = () => {
    const programSection = document.getElementById('program-section');
    if (programSection) {
      programSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 opacity-[0.1] pointer-events-none z-0"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/36340900-2961-4ade-91dd-d0c85444fe8c/files/b07bb08d-c997-4cdf-8984-4b05977ff851.jpg')`,
          backgroundRepeat: 'repeat',
          backgroundSize: '400px 400px',
          filter: 'hue-rotate(-20deg) saturate(2)'
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/36340900-2961-4ade-91dd-d0c85444fe8c/files/3df01989-1dfa-4fc9-90b4-085ad11319ac.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-background"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <div className="mb-8 flex justify-center gap-6 flex-wrap items-center">
            <img 
              src="https://cdn.poehali.dev/projects/36340900-2961-4ade-91dd-d0c85444fe8c/bucket/5fcbe03e-0f83-46f9-a770-d464b958de5b.png" 
              alt="Дом Семейного Наследия" 
              className="h-16 md:h-20 w-auto drop-shadow-lg"
            />
            <img 
              src="https://cdn.poehali.dev/projects/36340900-2961-4ade-91dd-d0c85444fe8c/bucket/ade0e8aa-79e8-4a0f-a8a2-6f6803432c14.jpg" 
              alt="Инициатива" 
              className="h-16 md:h-20 w-auto drop-shadow-lg"
            />
            <img 
              src="https://cdn.poehali.dev/projects/36340900-2961-4ade-91dd-d0c85444fe8c/bucket/8e1314c6-5d69-462d-9dd8-64e4b29e6fa6.jpg" 
              alt="Озёра парк отдыха" 
              className="h-16 md:h-20 w-auto drop-shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Масленица на Озёрах
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-4 max-w-3xl mx-auto font-light">
            не просто гулянье, а семейный обряд
          </p>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Мы, Дом Семейного Наследия, создаём пространство, где традиции оживают, 
            а семья становится сильнее.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="sm" className="text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4 hover-scale" asChild>
              <a href="http://t.me/InfoCSNbot" target="_blank" rel="noopener noreferrer">
                Зарегистрироваться на праздник
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={scrollToProgram}
              className="text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4 bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20"
            >Программа мероприятия</Button>
          </div>
          <div className="flex flex-wrap gap-6 justify-center text-sm md:text-base font-semibold" style={{ color: '#8E7254' }}>
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={20} />
              <span>22 февраля 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={20} />
              <span>12:00 - 17:00</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={20} />
              <span>Парк «Озёра», г. Артём</span>
            </div>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Наше мероприятие — это осознанный праздник
            </h2>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 mb-12">
              <p className="text-lg md:text-xl text-center text-muted-foreground leading-relaxed">
                для тех, кто ценит глубину общения, теплоту традиций и хочет подарить 
                своей семье незабываемый опыт единения.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 hover-scale transition-all bg-card/95 backdrop-blur-sm">
                <div className="text-4xl mb-4">🔥</div>
                <h3 className="text-2xl font-semibold mb-3">Отпустим старое</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Всё, что отслужило свой срок: усталость, мелкие обиды, сомнения.
                </p>
              </Card>
              
              <Card className="p-8 hover-scale transition-all bg-card/95 backdrop-blur-sm">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-2xl font-semibold mb-3">Встретим новое</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Завяжем на Древе Желаний цветные ленты-намерения и создадим 
                  семейный оберег на весь год.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-xl md:text-2xl font-medium text-foreground italic">
                Это день, чтобы почувствовать связь поколений, наполниться радостью 
                и зарядить вашу семейную историю новой энергией.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Место силы: где нас найти
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <Card className="p-6 bg-card/95 backdrop-blur-sm">
                <Icon name="Calendar" size={32} className="mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Дата</h3>
                <p className="text-muted-foreground">22 февраля 2026 года</p>
              </Card>
              <Card className="p-6 bg-card/95 backdrop-blur-sm">
                <Icon name="Clock" size={32} className="mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Время</h3>
                <p className="text-muted-foreground">12:00 - 17:00</p>
                <p className="text-sm text-muted-foreground mt-1">(старт квеста в 12:30!)</p>
              </Card>
              <Card className="p-6 bg-card/95 backdrop-blur-sm">
                <Icon name="MapPin" size={32} className="mb-4 text-primary" />
                <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                <p className="text-muted-foreground">
                  г. Артём, ул. Приморское кольцо, д. 6
                </p>
                <p className="text-muted-foreground">Парк отдыха «Озёра»</p>
              </Card>
            </div>
            <div className="mt-8 flex gap-4 justify-center">
              <Button variant="outline" asChild>
                <a href="https://2gis.ru/vladivostok/geo/70000001041083025/132.077773,43.363176" target="_blank" rel="noopener noreferrer">
                  <Icon name="Map" size={18} className="mr-2" />
                  Карта 2GIS
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://yandex.ru/maps/org/ozyora/63599171038/?ll=132.077796%2C43.363128&z=16.56" target="_blank" rel="noopener noreferrer">
                  <Icon name="Navigation" size={18} className="mr-2" />
                  Яндекс.Карты
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program-section" className="py-20 bg-muted/30 relative overflow-hidden z-10">
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-10 bg-cover"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/36340900-2961-4ade-91dd-d0c85444fe8c/files/c2ce20af-11ec-4d5d-8c4b-b719b46f9621.jpg')`,
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Программа дня
            </h2>
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8 mb-12 max-w-3xl mx-auto">
              <p className="text-xl text-center mb-4 text-foreground font-semibold">
                Путешествие для всей семьи
              </p>
              <p className="text-lg text-center text-muted-foreground">
                Мы продумали каждую минуту, чтобы и детям, и взрослым было 
                по-настоящему интересно и тепло — и на душе, и в наших уютных павильонах.
              </p>
            </div>

            <div className="space-y-6">
              {programItems.map((item, index) => (
                <Card key={index} className="p-6 md:p-8 hover-scale transition-all">
                  <div className="flex gap-4">
                    <div className="text-4xl md:text-5xl flex-shrink-0">{item.emoji}</div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Takeaways Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
              Что вы унесёте с собой
            </h2>
            <p className="text-lg text-center mb-12 text-muted-foreground">
              (кроме эмоций)
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {takeaways.map((item, index) => (
                <Card key={index} className="p-6 hover-scale transition-all text-center bg-card/95 backdrop-blur-sm">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={item.icon} size={32} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Часто задаваемые вопросы
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/95 backdrop-blur-sm rounded-lg px-6"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/36340900-2961-4ade-91dd-d0c85444fe8c/files/260a8e15-d6f3-4dee-9882-c28cc80a46af.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Не упустите шанс зарядить свою семью теплом и смыслом!
            </h2>
            <p className="text-xl mb-8">
              До встречи на тропинках, ведущих к весне!
            </p>
            <Button
              size="sm"
              className="text-sm sm:text-base px-4 py-3 sm:px-8 sm:py-5 bg-white text-primary hover:bg-white/90 hover-scale"
              asChild
            >
              <a href="http://t.me/InfoCSNbot" target="_blank" rel="noopener noreferrer">
                Зарегистрироваться на праздник
              </a>
            </Button>
            <div className="mt-8 flex flex-col gap-3 text-sm">
              <p className="font-semibold text-lg">Стоимость входа:</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span>Взрослые — 300 руб</span>
                <span>•</span>
                <span>Дети 4-13 лет — 200 руб</span>
                <span>•</span>
                <span>Дети до 3 лет — бесплатно</span>
              </div>
              <p className="text-sm mt-2 italic">* Скидки для многодетных семей 50% при предъявлении удостоверения</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Контакты</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="Mail" size={18} />
                    <a
                      href="mailto:centrsemejnogonasledia@gmail.com"
                      className="hover:underline"
                    >
                      centrsemejnogonasledia@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Phone" size={18} />
                    <a href="tel:+79146520628" className="hover:underline">
                      +7 (914) 652-06-28
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Send" size={18} />
                    <a
                      href="https://t.me/centrenasledie"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      t.me/centrenasledie
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Для партнёров</h3>
                <p className="text-white/90 mb-3">
                  Хотите стать частью праздника? Свяжитесь с нами для обсуждения партнёрства.
                </p>
                <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                  <a href="https://t.me/Kristina_Fedotova4080" target="_blank" rel="noopener noreferrer">
                    Написать нам
                  </a>
                </Button>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8 text-center text-sm text-white/80">
              <p>© 2026 Дом Семейного Наследия.</p>
              <p className="mt-2">Фестиваль «Семейная Масленица на Озёрах».</p>
              <p className="mt-2 italic">
                Создано с теплом для семей Владивостока и Приморья.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;