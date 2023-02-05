import QuestVariantsType from "../types/QuestVariants";

const questions: QuestVariantsType[] = [
  {
    id: 1,
    step: "1/7",
    question: "Пора швифтануться?",
    answers: [
      "Ну да, почему бы и нет. Если кто-то позовет швифтануться, я только за.",
      "Что такое вообще это ваше «швифтануться»? Лучше дома посижу, поиграю в новое мобильное приложение.",
      "Может я немного чересчур пытаюсь швифтануться, и у меня это не совсем получается, но сама идея мне нравится.",
      "Я всегда в своем ритме, но если захочу швифтануться, то это будет улетно. Все будут вспоминать эту вечеринку!",
    ],
  },
  {
    id: 2,
    step: "2/7",
    question: "Что тебе важно вообще в жизни?",
    answers: [
      "Я, конечно, что за тупые вопросы.",
      "Семья — это, конечно, важно. Но главное не забывать про себя, мне кажется. Если тебе что-то некомфортно, это, наверное, неправильно, да?",
      "Ну найти любовь, все такое. Вообще не уверен, потому что почему-то большую часть времени трачу не на попытки создать отношения,а на тусовки с друзьями.",
      "Тусоваться.",
    ],
  },
  {
    id: 3,
    step: "3/7",
    question: "Твое самое негативное качество?",
    answers: [
      "Какие негативные качества? Все мы неидеальны, зачем вы хотите заострить внимание на плохих сторонах?",
      "Я очень стеснительный и мне сложно общаться с людьми.",
      "Я все еще терплю всяких заносчивых придурков.",
      "Мне слишком важно одобрение других людей.",
    ],
  },
  {
    id: 4,
    step: "4/7",
    question: "Как ты относишься к психотерапии?",
    answers: [
      "Я огурчик!",
      "Может, это и звучит некруто, но мне нравятся походы к психологу.",
      "Ну она типа многим помогает, почему бы и нет.",
      "Я разберусь сам со своими проблемами.",
    ],
  },
  {
    id: 5,
    step: "5/7",
    question: "Крутой напарник предлагает тебе приключение. Твоя реакция?",
    answers: [
      "Ну если это не чмошник какой-нибудь и мне светит что-нибудь крутое, то погнали!",
      "Не, ну вообще у меня своя жизнь есть и дела. Но если приключение того стоит, почему бы и нет.",
      "Окей.",
      "Наконец-то!",
    ],
  },
  {
    id: 6,
    step: "6/7",
    question:
      "Ты в бегах. У тебя есть возможность спасти незнакомца, но для тебя это очень большой риск. Станешь ли ты это делать?",
    answers: [
      "Этот незнакомец может быть полезным мне? Надо выяснить. Если да, то игра стоит свеч, если нет, то лучше пусть сам разбирается со своими проблемами.",
      "Конечно, не хотелось бы втравливать себя в еще большие неприятности. Но он же живой человек, он заслуживает, чтобы с ним считались, правда? Попытаюсь спасти.",
      "Нет, в этой ситуации логично думать прежде всего о себе и о своей семье, которой я нужен. Пройду мимо.",
      "Зависит от того, понравится ли он мне или нет.",
    ],
  },
  {
    id: 7,
    step: "7/7",
    question: "Землю захватило Галактическое правительство. Твоя реакция?",
    answers: [
      "Пусть идут в объект Хога. Только правительства мне не хватало!",
      "Вооот блиииин. Может, если не отсвечивать, то типа все будет нормально?",
      "Нет, ну это же хорошо, если государство возьмет на себя часть наших проблем. Может, я работу нормальную найду.",
      "Попытаюсь адаптироваться, но есть вещи, которые я не приемлю и буду саботировать. Например, не дам в обиду мою семью.",
    ],
  },
];

export default questions;