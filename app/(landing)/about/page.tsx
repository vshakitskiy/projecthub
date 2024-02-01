import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Download, FileIcon, Link2 } from "lucide-react"
import Link from "next/link"

const AboutPage = () => {
    return (
        <div className="max-w-3xl mx-auto pt-5 pb-11 px-5">
            <h1>
                <span className="inline-block text-purple-800 dark:text-purple-600 mr-2">
                    Project
                </span>
                Hub
            </h1>
            <h2 className="mt-2">
                Сервис по организации бизнес-гипотез.
            </h2>
            <div className="mt-7">
                <h3>
                    Описание проекта
                </h3>
                <p className="mt-1 max-w-2xl">
                    Веб-приложение, с помощью которого предпрениматели (заказчики) могут заказывать реализацию своих задач у студентов (исполнителей), которые в свою очередь могут выполнять задания от заказчиков, а за время выполнения смогут завести друзей, заняться саморазвитием, прокачивая свои soft и hard скиллы, получая деньги и опыт работы!
                </p>
            </div>
            <div className="mt-7">
                <h3>
                    Что мы предлагаем?
                </h3>
                <p className="mt-1 max-w-2xl">
                    Мы предлагаем создать веб-приложение для реализации бизнес-гипотез, в рамках которого студенты реализуют бизнес-гипотезы предпринимателей, получая опыт и деньги. Для предпринимателей данное приложение будет являться экономией сил, денег и времени на проверку гипотезы.
                </p>
            </div>
            <div className="mt-7">
                <h3>
                    Презентация проекта
                </h3>
                <Link href="api/download/projecthub" download="ProjectHub" target="_blank">
                    <Button className="mt-1 w-full justify-between px-2" variant="ghost">
                        <div className="flex items-center">
                            <FileIcon className="w-5 h-5" />
                            <p className="ml-1">ProjectHub.pptx</p>
                        </div>
                        <Download className="w-5 h-5" />
                    </Button>
                </Link>
            </div>
            <div className="mt-7">
                <h3>
                    Функционал
                </h3>
                <p className="mt-1 max-w-2xl">
                    Рассматривая разные целевые аудитории:
                </p>
                <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <h4 className="font-bold">Исполнитель</h4>
                        </AccordionTrigger>
                        <AccordionContent>
                            <h4 className="font-semibold">Создание команды</h4>
                            <p className="leading-normal text-base mt-1">
                                В нашем сервисе студенты, которые готовы взять ответственность, могут создать свою команду, чтобы в дальнейшем получать заказы.
                            </p>
                        </AccordionContent>
                        <AccordionContent>
                            <h4 className="font-semibold">Присоединение к команде</h4>
                            <p className="leading-normal text-base mt-1">
                                Возможность присоединиться в активные команды и работать над задачами заказчиков.
                            </p>
                        </AccordionContent>
                        <AccordionContent>
                            <Accordion type="multiple">
                                <AccordionItem value="item-1-1">
                                    <AccordionTrigger>
                                        <h4 className="font-semibold">Моя команда</h4>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <h4 className="font-semibold">Лидер команды</h4>
                                        <p className="leading-normal text-base mt-1">
                                            Дополнительные возможности: удаление участников, добавление участников, редактирование профиля команды, отправление задачи на проверку, составление требований к исполнителям
                                        </p>
                                    </AccordionContent>
                                    <AccordionContent>
                                        <h4 className="font-semibold">Обычный исполнитель</h4>
                                        <p className="leading-normal text-base mt-1">
                                            После присоединения студента в команду ему становится доступен новый раздел с информацией о текущей команде, активных и завершенных задачах.
                                        </p>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </AccordionContent>
                        <AccordionContent>
                            <h4 className="font-semibold">Трекер проекта</h4>
                            <p className="leading-normal text-base mt-1">
                                Используя наш трекер, студенты могут отслеживать прогресс задач и создавать новые задачи.
                            </p>
                        </AccordionContent>
                        <AccordionContent>
                            <h4 className="font-semibold">Профиль студента</h4>
                            <p className="leading-normal text-base mt-1">
                                Место с информацией о студенте, его “портфолио”, функция вывода средств, а так же информация о студенте, как об участнике команд
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <h4 className="font-bold">Клиент</h4>
                        </AccordionTrigger>
                        <AccordionContent>
                            <h4 className="font-semibold">Создание задачи</h4>
                            <p className="leading-normal text-base mt-1">
                                Предприниматель может создавать задачи, прикрепляя техническое задание и всю необходимую информации (например о проекте, в который входит эта задача).
                            </p>
                        </AccordionContent>
                        <AccordionContent>
                            <h4 className="font-semibold">Подбор команды</h4>
                            <p className="leading-normal text-base mt-1">
                                После создании задачи открывается список команд с информации о рейтинге и стоимости реализации, из этого списка заказчик может подобрать подходящую команду для реализации.
                            </p>
                        </AccordionContent>
                        <AccordionContent>
                            <h4 className="font-semibold">Мои задачи</h4>
                            <p className="leading-normal text-base mt-1">
                                Список всех поставленных и сохраненных задач. Можно посмотреть их прогресс и по мере завершения реализации задачи, подтвердить выполнение или отправить на доработку. По мере прогресса задач их можно редактировать, добавлять отзывы на команду исполнителей.
                            </p>
                        </AccordionContent>
                        <AccordionContent>
                            <h4 className="font-semibold">Профиль</h4>
                            <p className="leading-normal text-base mt-1">
                                Информация об отзывах, любимых командах, денежном балансе.
                            </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="mt-7">
                <h3>
                    CJM
                </h3>
                <Link href="https://www.figma.com/file/G9JVYzmlR6LF9jhJlRrtPm/CJM-Project-Hub-(Community)?type=design&node-id=0-1&mode=design" target="_blank">
                    <Button className="mt-1 w-full justify-start px-2" variant="ghost">
                        <Link2 className="w-5 h-5" />
                        <p className="ml-1">Открыть CJM в figma</p>
                    </Button>
                </Link>
            </div>
            <div className="mt-7">
                <h3>
                    UX/UI
                </h3>
                <Link href="https://www.figma.com/file/kWlVXrnGqhiatHsaYurwoa/Project-Hub-(Community)?type=design&node-id=0%3A1&mode=design" target="_blank">
                    <Button className="mt-1 w-full justify-start px-2" variant="ghost">
                        <Link2 className="w-5 h-5" />
                        <p className="ml-1">Открыть UX/UI в figma</p>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default AboutPage