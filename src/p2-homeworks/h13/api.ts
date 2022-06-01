import axios from "axios";

export const RequestsAPI={
    createValueCheckbox(value:boolean){
        return axios.post(`https://neko-cafe-back.herokuapp.com/auth/test`, {success: value})
    }
}
export type BodyType={
    success: boolean
}


//- сделайте так чтоб значение чекбокса передавалось в post запрос в значение success по нажатию на кнопку и делался запрос
//     - посмотрите что приходит в ответ
//
// - если прийдёт ошибка, то она попадёт в .catch и ответ смотреть там
// catch (error) { console.log( {...error} ); console.log( error.response ? error.response.data.errorText : error.message );
//
//     - отобразите в компоненте Request ответ (даже если в ответе придёт ошибка)
//
//      кCtrl + Alt + L не забывайте нажимать чтобрасивый код был (это увеличивает скорость обучения и чтения кода и облегчает поиск ошибок и понимание "что тут происходит")
//     любую домашку вы НЕ обязаны делать самостоятельно, если что-то не получается, не понятно - пишем другу, в группу с пометкой #help, мне или на хэлп
//     (не обязательно) компонента Alternative для личного творчества (можете попробовать другие пропсы и т.д., могу по ней сделать кодревью)
//
//     скиньте мне ссылку на ваш реппозиторий, укажите номер дз и вашу фамилию
//     !!! (ссылку на сайт кидать не нужно, я найду её в package.json ("homepage")) !!!
//         не забудьте сделать deploy)


// createNewTodolist(titleTodolist: string) {
//     return instance.post<CommonResponseType<{
//         item: ApiTodolistsType,
//     }>>('todo-lists', {title: titleTodolist})
// },

