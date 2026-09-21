import type { ReactNode } from 'react'

const telegram = 'https://t.me/tatynya06'
const channel = 'https://t.me/desing_kts'
const vk = 'https://vk.ru/desing_kts'

const work = [
  { src: './assets/site/marketplace-01.jpg', title: 'Инфографика', note: 'Обложка услуги', size: 'work-wide' },
  { src: './assets/site/marketplace-03.jpg', title: 'Маркетплейсы', note: 'Карточка косметики', size: 'work-tall' },
  { src: './assets/site/avito-01.jpg', title: 'Avito', note: 'Карточки объявлений', size: 'work-square' },
  { src: './assets/site/vk-01.jpg', title: 'ВКонтакте', note: 'Оформление сообщества', size: 'work-tall' },
  { src: './assets/site/marketplace-04.jpg', title: 'Техника', note: 'Серия слайдов', size: 'work-square' },
  { src: './assets/site/vk-04.jpg', title: 'Соцсети', note: 'Шаблоны публикаций', size: 'work-wide' },
]

const services = [
  {
    index: '01', title: 'Маркетплейсы',
    text: 'Главный кадр, дополнительные слайды и единая логика карточки для Wildberries, Ozon и других площадок.',
    tags: ['обложка', 'инфографика', 'серия слайдов'], image: './assets/site/marketplace-02.jpg',
  },
  {
    index: '02', title: 'Avito',
    text: 'Карточки товаров и оформление объявлений, которые помогают быстро увидеть состояние, детали и преимущества предложения.',
    tags: ['карточки товара', 'объявления', 'баннеры'], image: './assets/site/avito-02.jpg',
  },
  {
    index: '03', title: 'ВКонтакте',
    text: 'Обложка, аватар, меню, товары и шаблоны постов в одной системе для сообщества или личного бренда.',
    tags: ['обложка', 'меню', 'посты'], image: './assets/site/vk-02.jpg',
  },
]

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`reveal-block ${className}`}>{children}</div>
}

function Arrow() { return <span className="glyph" aria-hidden="true">↗</span> }

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top">
          <span className="brand-mark">Т</span>
          <span>Татьяна К.<small>дизайнер</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          <a href="#services">Услуги</a>
          <a href="#work">Работы</a>
          <a href="#about">Обо мне</a>
        </nav>
        <a className="button button-small header-cta" href={telegram} target="_blank" rel="noreferrer">Обсудить проект <Arrow /></a>
        <button className="menu-button" data-menu-open aria-label="Меню">Меню</button>
      </header>

      <div className="mobile-menu" data-menu aria-hidden="true">
        <button className="menu-close" data-menu-close aria-label="Закрыть">Закрыть</button>
        <nav>
          <a href="#services">Услуги</a>
          <a href="#work">Работы</a>
          <a href="#about">Обо мне</a>
          <a href={telegram} target="_blank" rel="noreferrer">Обсудить проект</a>
        </nav>
      </div>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="kicker">Дизайн для товаров и соцсетей</p>
            <h1>Покажу ценность товара <span>за несколько секунд.</span></h1>
            <p className="hero-lead">Создаю инфографику, карточки для Avito и оформление ВКонтакте. Работаю с дизайном с 2021 года.</p>
            <div className="hero-actions">
              <a className="button" href={telegram} target="_blank" rel="noreferrer">Обсудить проект <Arrow /></a>
              <a className="text-link" href="#work">Смотреть работы <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Татьяна и примеры работ">
            <div className="hero-portrait"><img src="./assets/tatyana/portrait-striped.jpg" alt="Татьяна, дизайнер карточек товаров" fetchPriority="high" /></div>
            <img className="hero-card hero-card-one" src="./assets/site/marketplace-03.jpg" alt="Пример карточки товара для маркетплейса" />
            <img className="hero-card hero-card-two" src="./assets/site/avito-02.jpg" alt="Пример карточки товара для Avito" />
            <span className="hero-year">с 2021</span>
          </div>
        </section>

        <section className="intro-line section-shell" aria-label="Направления работы"><span>Маркетплейсы</span><i></i><span>Avito</span><i></i><span>ВКонтакте</span></section>

        <section id="services" className="services section-shell">
          <Reveal className="section-heading"><p className="kicker">Три направления</p><h2>Оформление под задачу, площадку и характер товара.</h2></Reveal>
          <div className="service-list">
            {services.map(service => (
              <Reveal className="service-row" key={service.title}>
                <div className="service-index">{service.index}</div>
                <div className="service-copy"><h3>{service.title}</h3><p>{service.text}</p><div className="tag-list">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
                <div className="service-image"><img src={service.image} alt={`Пример услуги: ${service.title}`} /></div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-shell">
            <Reveal className="section-heading section-heading-inline">
              <div><p className="kicker">Выбранные работы</p><h2>Каждая серия говорит на языке своего товара.</h2></div>
              <p>Ниже показаны концепты, собранные специально для демонстрации подхода. Они не выданы за клиентские кейсы.</p>
            </Reveal>
            <div className="work-grid">
              {work.map((item, index) => (
                <Reveal className={`work-item ${item.size}`} key={item.src}>
                  <img src={item.src} alt={`${item.title}: ${item.note}`} loading={index > 1 ? 'lazy' : 'eager'} />
                  <div className="work-caption"><span>{item.title}</span><small>{item.note}</small></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="process section-shell">
          <Reveal className="section-heading"><p className="kicker">Как строится работа</p><h2>От исходников до готовой серии.</h2></Reveal>
          <div className="process-grid">
            {[
              ['Задача', 'Разбираемся, что продаём, кому и на какой площадке.'],
              ['Система', 'Определяю последовательность кадров, стиль и главные акценты.'],
              ['Дизайн', 'Собираю серию, показываю концепцию и вношу согласованные правки.'],
              ['Экспорт', 'Готовлю изображения в нужных размерах и порядке публикации.'],
            ].map(([title, text], i) => (
              <Reveal className="process-step" key={title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{text}</p></Reveal>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="section-shell about-grid">
            <Reveal className="about-visual"><img className="about-main" src="./assets/tatyana/portrait-orange.jpg" alt="Татьяна, дизайнер" /><img className="about-small" src="./assets/tatyana/portrait-green.jpg" alt="Портрет Татьяны" /></Reveal>
            <Reveal className="about-copy">
              <p className="kicker">Обо мне</p><h2>Привет, я Татьяна.</h2>
              <p className="about-lead">С 2021 года занимаюсь дизайном для товаров, объявлений и социальных сетей.</p>
              <p>Мне важно, чтобы оформление не спорило с товаром. Оно должно помогать быстро понять предложение, увидеть детали и принять решение.</p>
              <ul>
                <li><span className="check" aria-hidden="true">✓</span> Работаю с серией как с цельной историей</li>
                <li><span className="check" aria-hidden="true">✓</span> Учитываю формат и ограничения площадки</li>
                <li><span className="check" aria-hidden="true">✓</span> Подготавливаю готовые к публикации файлы</li>
              </ul>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="contact section-shell">
          <div className="contact-copy"><p className="kicker">Новый проект</p><h2>Покажите товар. Я предложу, как его оформить.</h2></div>
          <a className="contact-orb" href={telegram} target="_blank" rel="noreferrer"><span className="contact-arrow" aria-hidden="true">↗</span><span>Обсудить проект</span></a>
        </section>
      </main>

      <footer className="footer section-shell">
        <div><span className="footer-name">Татьяна К.</span><p>Дизайн карточек и соцсетей</p></div>
        <div className="footer-links"><a href={telegram} target="_blank" rel="noreferrer">Telegram <Arrow /></a><a href={channel} target="_blank" rel="noreferrer">Канал <Arrow /></a><a href={vk} target="_blank" rel="noreferrer">ВКонтакте <Arrow /></a></div>
        <p className="copyright">© {new Date().getFullYear()} Татьяна К.</p>
      </footer>

      <div className="mobile-contact" aria-label="Быстрые действия"><a href="#work">Работы</a><a className="mobile-contact-primary" href={telegram} target="_blank" rel="noreferrer">Написать <span aria-hidden="true">↗</span></a></div>
    </>
  )
}

export default App
