import { body } from 'express-validator'

export const registerValidation = [
    body('email', 'Неверная почта').isEmail(),
    body('password', 'Неверный пароль').isLength({ min: 5 }),
    body('fullName', 'Неверное имя').isLength({ min: 3 }),
    body('avatarUrl', 'Неправильный формат').optional().isURL(),
]

export const loginValidation = [
    body('email', 'Неверная почта').isEmail(),
    body('password', 'Неверный пароль').isLength({ min: 5 }),
]

export const postCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({min: 3}).isString(),
    body('text', 'Введите текст статьи').isLength({ min: 5 }).isString(),
    body('tags', 'Неверный формат тэгов (укажите массив)').optional().isString(),
    body('imageUrl', 'Неверная ссылка на изображение').optional().isString(),
]

