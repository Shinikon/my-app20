import React from 'react';
import { Link } from 'react-router-dom';

import ModalTrigger from '../components/ModalTrigger';

import '../scss/app.scss';
import Specialists from '../components/Specialists';
import '../scss/components/_buttons.scss';


// import box from '/assets/img/plastic.svg'
// import rev1 from '/assets/img/rev1.svg'
// import rev2 from '/assets/img/rev2.svg'
// import rev3 from '/assets/img/rev3.svg'

// import mod1 from '/assets/img/arch.svg'
// import mod2 from '/assets/img/game.svg'
// import mod3 from '/assets/img/hr.svg'
// import mod11 from '/assets/img/arch1.svg'
// import mod21 from '/assets/img/game1.svg'
// import mod31 from '/assets/img/hr1.svg'
// import add from "/assets/img/addFile.svg"

function Main() {

  const reviewModalContent = (
    <div className="review-modal">
      <div className="review-file-upload" onClick={() => document.getElementById('fileInput').click()}>
           <span> <h2>Прикрепить файл</h2>
           <img src="/assets/img/addFile.svg" alt="" /></span>

          <input type="file" id="fileInput" />
      </div>

      <div className="review-form-inputs">
          <div className="review-name-email">
            <div>
                <div className="review-form-label"><h3>Имя</h3></div>
                <input type="text" placeholder="Иванов Иван" />
              </div>
              <div>
                <div className="review-form-label"><h3>Почта</h3></div>
                <input type="email" placeholder="Email" />
              </div>
          </div>
          <div className="review-form-label"><h3>Номер телефона</h3></div>
          <div className="review-phone">
              <input type="tel" placeholder="+7(---)--- -- --" />
          </div>
          <div className="review-form-label"><h3>Отзыв</h3></div>
          <div className="review-text-area">
              <textarea placeholder="Ваш отзыв" />
          </div>
          <div className="review-checkbox">
            <nobr>  
              <input type="checkbox" id="agreement" />
              <label htmlFor="agreement">Согласие на обработку персональных данных</label>
            </nobr>
          </div>
        <button className="review-submit-button">Отправить отзыв</button>
      </div>
    </div>
);

  return (
    <div className="wrapper">
      <div className="main">
        <div className="main__title">
          <h1>Создаём 3D-модели под ваши задачи</h1>
        </div>
        <div className="main__block">
          <div className="main__block_aboutUs">
            <div>
              <div className="main__background-image-container">
                <img src="/assets/img/plastic.svg" alt="Background Image" className="main__background-image" />
              </div>
              <div className="text-content">
                <p>
                  Metaform – это ведущая студия 3D-моделирования, предлагающая широкий спектр высококачественных услуг для различных отраслей. Наша команда опытных и талантливых специалистов обладает глубокими знаниями и многолетним опытом в создании реалистичных, высокодетализированных трехмерных моделей, анимации и визуализации. Мы стремимся к совершенству, используя передовые технологии и программное обеспечение, чтобы предоставить клиентам исключительные результаты, которые превосходят ожидания. Студия использует передовые программные решения и технологии, чтобы обеспечить высокое качество и точность наших моделей. Мы гордимся индивидуальным подходом к каждому клиенту и стремимся превзойти ожидания, обеспечивая прозрачное общение и своевременную сдачу проектов. Обращайтесь к нам за качественным 3D-моделированием.
                </p>
              </div>
              <button className="main__block_btn">Связаться с нами</button>
            </div>
          </div>
          <div className="main__block_spec">
            <p className="main__block_spec_title">Наши специалисты</p>
            <Specialists />
            <Link to='./Portfolio'>
                <button className="main__block_btn">Посмотреть портфолио</button>
              </Link>
          </div>
        </div>
        <div className="main__serv">
          <div className="main__serv-title">
            <h1>Наши услуги</h1>
          </div>

          <section className="main__serv_services">
            <ModalTrigger 
              children={<img src="/assets/img/arch1.svg" alt="Архитектура" />}
              modalContent={
                <div className="modal-content-wrapper">
                  <img src="/assets/img/arch1.svg" alt="Архитектура" />
                  <div className="modal-text-content"
                  style={{
                    gap:'0px'
                  }}>
                    <h1>Архитектурная визуализация</h1>
                    <p>
                    Архитектурная 3D-визуализация — это процесс создания реалистичных трехмерных изображений, видеороликов или интерактивных моделей зданий, интерьеров и ландшафтов. Она используется архитекторами, дизайнерами, застройщиками и другими участниками строительной индустрии для различных целей, от презентации проектов потенциальным клиентам до планирования и контроля за строительством. 
                    </p>
                    <p>
                    <ul style={{
                      marginLeft:'20px'
                    }}>
                      Цели использования архитектурной 3D-визуализации:
                        <li>Презентация проектов: Демонстрация проектов потенциальным клиентам, инвесторам и другим заинтересованным лицам в привлекательном и доступном виде.</li>
                        <li>Планирование и проектирование: Использование 3D-моделей для обнаружения и исправления ошибок на ранних стадиях проектирования, а также для оптимизации планировки и дизайна.</li>
                        <li>Маркетинг и продажи: Создание рекламных материалов и каталогов с использованием высококачественных 3D-визуализаций.</li>
                        <li>Обучение и образование: Использование интерактивных 3D-моделей для демонстрации архитектурных концепций и решений.</li>
                    </ul>
                    </p>
                    <p>
                    Наша цель — не просто создать красивые картинки, а предоставить вам мощный инструмент для успешной реализации ваших проектов. Закажите проект и убедитесь в этом сами.
                    </p>
                    <button><h3>Заказать проект</h3></button>
                  </div>
                </div>
              }
            />

            <div>
              <ModalTrigger
                children={<img src="/assets/img/game.svg" alt="Игры" />}
                modalContent={
                  <div className="modal-content-wrapper">
                    <img src="/assets/img/game1.svg" alt="Игры" />
                    <div className="modal-text-content">
                      <h1>3D-модели для видеоигр</h1>
                      <p>
                    Архитектурная 3D-визуализация — это процесс создания реалистичных трехмерных изображений, видеороликов или интерактивных моделей зданий, интерьеров и ландшафтов. Она используется архитекторами, дизайнерами, застройщиками и другими участниками строительной индустрии для различных целей, от презентации проектов потенциальным клиентам до планирования и контроля за строительством. 
                    </p>
                    <p>
                    <ul style={{
                      marginLeft:'20px'
                    }}>
                      Цели использования архитектурной 3D-визуализации:
                        <li>Презентация проектов: Демонстрация проектов потенциальным клиентам, инвесторам и другим заинтересованным лицам в привлекательном и доступном виде.</li>
                        <li>Планирование и проектирование: Использование 3D-моделей для обнаружения и исправления ошибок на ранних стадиях проектирования, а также для оптимизации планировки и дизайна.</li>
                        <li>Маркетинг и продажи: Создание рекламных материалов и каталогов с использованием высококачественных 3D-визуализаций.</li>
                        <li>Обучение и образование: Использование интерактивных 3D-моделей для демонстрации архитектурных концепций и решений.</li>
                    </ul>
                    </p>
                    <p>
                    Наша цель — не просто создать красивые картинки, а предоставить вам мощный инструмент для успешной реализации ваших проектов. Закажите проект и убедитесь в этом сами.
                    </p>
                    <button><h3>Заказать проект</h3></button>
                    </div>
                  </div>
                }
              />

                <ModalTrigger
                  children={<img src="/assets/img/hr.svg" alt="HR" />}
                  modalContent={
                    <div className="modal-content-wrapper">
                      <img src="/assets/img/hr1.svg" alt="HR" />
                      <div className="modal-text-content">
                        <h1>3D-модели для видеоигр</h1>
                        <p>
                    Архитектурная 3D-визуализация — это процесс создания реалистичных трехмерных изображений, видеороликов или интерактивных моделей зданий, интерьеров и ландшафтов. Она используется архитекторами, дизайнерами, застройщиками и другими участниками строительной индустрии для различных целей, от презентации проектов потенциальным клиентам до планирования и контроля за строительством. 
                    </p>
                    <p>
                    <ul style={{
                      marginLeft:'20px'
                    }}>
                      Цели использования архитектурной 3D-визуализации:
                        <li>Презентация проектов: Демонстрация проектов потенциальным клиентам, инвесторам и другим заинтересованным лицам в привлекательном и доступном виде.</li>
                        <li>Планирование и проектирование: Использование 3D-моделей для обнаружения и исправления ошибок на ранних стадиях проектирования, а также для оптимизации планировки и дизайна.</li>
                        <li>Маркетинг и продажи: Создание рекламных материалов и каталогов с использованием высококачественных 3D-визуализаций.</li>
                        <li>Обучение и образование: Использование интерактивных 3D-моделей для демонстрации архитектурных концепций и решений.</li>
                    </ul>
                    </p>
                    <p>
                    Наша цель — не просто создать красивые картинки, а предоставить вам мощный инструмент для успешной реализации ваших проектов. Закажите проект и убедитесь в этом сами.
                    </p>
                    <button><h3>Заказать проект</h3></button>
                      </div>
                    </div>
                  }
                />
            </div>
          </section>
        </div>



        <div className="main__reviews">

          <div className="main__reviews_top">
            <div className="main__reviews_top_block">
            <Link to="/Order"
            style={{
              textDecoration:'none'
            }}>
              <button><span><h2>01</h2></span><h3>Оформи заказ</h3></button>
            </Link>
            <button><span><h2>02</h2></span><h3>Получи готовую 3D-модель</h3></button>
            <button><span><h2>03</h2></span><h3>
            <ModalTrigger
                                children={<h3>Напиши отзыв</h3>}
                                modalContent={
                                  reviewModalContent
                                }
                                isReview={true}
                            />
              </h3></button>
            </div>
            <hr />
          </div>


          <div className="main__reviews_bottom">
            <div className="section">
              <div>
                <img src="/assets/img/rev1.svg" />
              </div>
              <div>
                <h3>SatisfiedCustomer</h3>
                <p>Работа со студией оставила исключительно положительные впечатления! С самого начала, ребята проявили себя как настоящие профессионалы, внимательно выслушав все наши пожелания и предложив креативные решения. Процесс создания 3D-модели был полностью прозрачным – мы всегда были в курсе хода работы и могли оперативно вносить корректировки. Качество исполнения просто потрясающее, модель получилась детально проработанной и невероятно реалистичной. И всё это – в оговоренные сроки! Большое спасибо за профессионализм и индивидуальный подход! Рекомендую всем, кто ценит качество и оперативность!</p>
              </div>
              <hr />
            </div>

            <div className="section">
              <div>
                <img src="/assets/img/rev2.svg" />
              </div>
              <div>
                <h3>𝖺𝗋𝖾𝗄𝗎𝗌𝗁𝗂𝗌𝗎_11</h3>
                <p>Мы получили полный контроль над процессом создания модели от начала и до конца. Команда профессионалов буквально с нуля собрала нашу модельку, проявив себя настоящими экспертами. Они не только великолепно справились с технической частью, но и предложили уникальный и впечатляющий дизайн, который идеально отразил наши ожидания. Было приятно наблюдать за их слаженной работой и профессиональным подходом к каждому этапу. Они не только учли все наши пожелания, но и предложили ценные советы, которые значительно улучшили конечный результат. Благодаря их эффективности и преданности делу, вся работа была выполнена на высочайшем уровне и в невероятно короткие сроки. Искренне благодарим команду за их профессионализм, креативность и оперативность! Результат превзошёл все наши ожидания!</p>
              </div>
              <hr />
            </div>

            <div className="section">
              <div>
                <img src="/assets/img/rev3.svg" />
              </div>
              <div>
                <h3>yerilet</h3>
                <p>Не могу не поделиться восторгом от сотрудничества со студией MetaForm! Заказ был достаточно сложный, но ребята справились блестяще! От первоначальной концепции до финальной рендеринга – всё было выполнено на высшем уровне. Они проявили не только высочайший профессионализм в моделировании, но и чувство стиля, воплотив в жизнь наши самые смелые идеи. Быстрая коммуникация и оперативная обратная связь делали сотрудничество максимально комфортным. Результат превзошел все ожидания – модель выглядит просто потрясающе! Огромное спасибо за ваш труд и профессионализм! Безусловно, буду обращаться к вам снова и рекомендовать всем своим знакомым!</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;