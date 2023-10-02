import {Category} from "../model/Category";
import {Priority} from "../model/Priority";
import { Task } from "../model/Task";

export class TestData {

    static categories: Category[] = [
        {id: 1, title: "Уборка"},
        {id: 2, title: "Уроки"},
        {id: 3, title: "Чтение"},
        {id: 4, title: "Посуда"},
        {id: 5, title: "Еда"},
        {id: 6, title: "Вытираем Пыль"},
    ]

    static priorities: Priority[] = [
        {id: 1, title: 'Низкий', color: '#e5e5e5'},
        {id: 2, title: 'Средний', color: '#5ed2ba'},
        {id: 3, title: 'Высокий', color: '#e35959'},
        {id: 4, title: 'Срочный!!', color: '#f1128d'},
    ];

    // @ts-ignore
    static tasks: Task[] = [
        {
          id: 1,
            title: 'Полить цветы',
            priority: TestData.priorities[1],
            completed: true,
            category: TestData.categories[0],
            date: new Date('2023-09-30')
        },

        {
          id: 1,
            title: 'Полить цветы',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-09-30')
        },

        {
          id: 1,
            title: 'Полить цветы',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-09-30')
        },

        {
          id: 1,
            title: 'Полить цветы',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-09-30')
        },

        {
          id: 1,
            title: 'Полить цветы',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-09-30')
        },

        {
          id: 1,
            title: 'Полить цветы',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-09-30')
        },
        {
          id: 1,
            title: 'Полить цветы',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-09-30')
        },
        {
          id: 1,
            title: 'Полить цветы',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-09-30')
        },
        {
          id: 1,
            title: 'Полить цветы',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-09-30')
        },
        {
          id: 1,
            title: 'Полить цветы',
            priority: TestData.priorities[1],
            completed: false,
            category: TestData.categories[0],
            date: new Date('2023-09-30')
        },
    ]

}
