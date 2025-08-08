window.demoRequisitions = [
  {
    requisition_id: 101,
    creation_date: "2025-08-05",
    required_date: "2025-08-06",
    manager: "Ахметов Б.С.",
    status: "Частично",
    priority: "Высокий",
    driver: "Султанов Р.К.",
    items: [
      {
        item_id: 1,
        material: "МДФ KRONOSPAN 16мм",
        quantity: 25,
        unit: "лист",
        supplier: "КазПлитТорг",
        status: "Собрано полностью",
        fact: 25,
        note: "",
        clients: [
          { name: "ТОО 'Ару-Мебель'", order: "А-112", qty: 15, phone: "+77011112233" },
          { name: "ИП Искаков Е.Б.", order: "А-115", qty: 10, phone: "+77023334455" }
        ]
      },
      {
        item_id: 2,
        material: "Кромка ПВХ 0.4мм белая",
        quantity: 100,
        unit: "м",
        supplier: "ЕвроСтрой-Азия",
        status: "Частично",
        fact: 40,
        note: "Остаток 60м привезут завтра",
        clients: [
          { name: "ТОО 'Ару-Мебель'", order: "А-112", qty: 60, phone: "+77011112233" },
          { name: "ТОО 'Нур-Дизайн'", order: "НД-050", qty: 40, phone: "+77056667788" }
        ]
      },
      {
        item_id: 5,
        material: "ЛДСП EGGER 18мм Дуб",
        quantity: 15,
        unit: "лист",
        supplier: "КазПлитТорг",
        status: "Собрано полностью",
        fact: 15,
        note: "",
        clients: [
          { name: "ИП Искаков Е.Б.", order: "А-115", qty: 15, phone: "+77023334455" }
        ]
      },
      {
        item_id: 6,
        material: "Петли BLUM с доводчиком",
        quantity: 80,
        unit: "шт",
        supplier: "Алматы-Фурнитура",
        status: "Не собрано",
        fact: 0,
        note: "Нет на складе",
        clients: [
          { name: "ТОО 'Ару-Мебель'", order: "А-112", qty: 50, phone: "+77011112233" },
          { name: "ИП Искаков Е.Б.", order: "А-115", qty: 30, phone: "+77023334455" }
        ]
      },
      {
        item_id: 7,
        material: "Направляющие шариковые 450мм",
        quantity: 40,
        unit: "пар",
        supplier: "Алматы-Фурнитура",
        status: "Частично",
        fact: 20,
        note: "",
        clients: [
          { name: "ТОО 'Нур-Дизайн'", order: "НД-050", qty: 40, phone: "+77056667788" }
        ]
      }
    ]
  },
  {
    requisition_id: 102,
    creation_date: "2025-08-06",
    required_date: "2025-08-07",
    manager: "Нурланов Е.Ж.",
    status: "Собрано полностью",
    priority: "Средний",
    driver: "Алиев М.Д.",
    items: [
      {
        item_id: 3,
        material: "ДВП 3мм",
        quantity: 50,
        unit: "лист",
        supplier: "Барыс-Снаб",
        status: "Собрано полностью",
        fact: 50,
        note: "",
        clients: [
          { name: "ТОО 'Жана Курылыс'", order: "ЖК-501", qty: 50, phone: "+77778889900" }
        ]
      },
      {
        item_id: 8,
        material: "Столешница влагостойкая 38мм 'Мрамор'",
        quantity: 5,
        unit: "шт",
        supplier: "ЕвроСтрой-Азия",
        status: "Собрано полностью",
        fact: 5,
        note: "",
        clients: [
          { name: "ИП Омарова А.Т.", order: "О-33", qty: 2, phone: "+77081234567" },
          { name: "ТОО 'Жана Курылыс'", order: "ЖК-502", qty: 3, phone: "+77778889900" }
        ]
      },
      {
        item_id: 9,
        material: "Ручка-скоба 128мм хром",
        quantity: 30,
        unit: "шт",
        supplier: "Алматы-Фурнитура",
        status: "Собрано полностью",
        fact: 30,
        note: "",
        clients: [
          { name: "ИП Омарова А.Т.", order: "О-33", qty: 10, phone: "+77081234567" },
          { name: "ТОО 'Жана Курылыс'", order: "ЖК-501", qty: 20, phone: "+77778889900" }
        ]
      },
       {
        item_id: 10,
        material: "Фасадные панели AGT 'Капучино'",
        quantity: 12,
        unit: "м2",
        supplier: "ЕвроСтрой-Азия",
        status: "Собрано полностью",
        fact: 12,
        note: "",
        clients: [
          { name: "ТОО 'Нур-Дизайн'", order: "НД-052", qty: 12, phone: "+77056667788" }
        ]
      },
      {
        item_id: 11,
        material: "Саморезы 3.5х16",
        quantity: 2,
        unit: "уп",
        supplier: "Барыс-Снаб",
        status: "Собрано полностью",
        fact: 2,
        note: "Упаковки по 500 шт",
        clients: [
           { name: "ТОО 'Жана Курылыс'", order: "ЖК-501", qty: 2, phone: "+77778889900" }
        ]
      }
    ]
  },
  {
    requisition_id: 103,
    creation_date: "2025-08-06",
    required_date: "2025-08-08",
    manager: "Омарова Г.Т.",
    status: "Не собрано",
    priority: "Средний",
    driver: "Жуманов С.А.",
    items: [
      {
        item_id: 4,
        material: "ЛДСП LAMARTY 16мм 'Серый камень'",
        quantity: 10,
        unit: "лист",
        supplier: "КазПлитТорг",
        status: "Не собрано",
        fact: 0,
        note: "",
        clients: [
          { name: "ТОО 'Каспий-Строй'", order: "КС-91", qty: 10, phone: "+77075554433" }
        ]
      },
      {
        item_id: 12,
        material: "Кромка ПВХ 2мм 'Серый камень'",
        quantity: 50,
        unit: "м",
        supplier: "ЕвроСтрой-Азия",
        status: "Не собрано",
        fact: 0,
        note: "",
        clients: [
          { name: "ТОО 'Каспий-Строй'", order: "КС-91", qty: 50, phone: "+77075554433" }
        ]
      },
      {
        item_id: 13,
        material: "МДФ влагостойкий 19мм",
        quantity: 5,
        unit: "лист",
        supplier: "КазПлитТорг",
        status: "Частично",
        fact: 1,
        note: "Только 1 лист в наличии",
        clients: [
           { name: "ИП Искаков Е.Б.", order: "А-118", qty: 5, phone: "+77023334455" }
        ]
      },
       {
        item_id: 14,
        material: "Опоры кухонные 100мм",
        quantity: 32,
        unit: "шт",
        supplier: "Алматы-Фурнитура",
        status: "Не собрано",
        fact: 0,
        note: "",
        clients: [
          { name: "ТОО 'Каспий-Строй'", order: "КС-91", qty: 32, phone: "+77075554433" }
        ]
      },
      {
        item_id: 15,
        material: "Плинтус для столешницы (алюминий)",
        quantity: 8,
        unit: "шт",
        supplier: "Барыс-Снаб",
        status: "Не собрано",
        fact: 0,
        note: "",
        clients: [
          { name: "ТОО 'Каспий-Строй'", order: "КС-91", qty: 8, phone: "+77075554433" }
        ]
      },
       {
        item_id: 16,
        material: "Сушка для посуды 600мм",
        quantity: 4,
        unit: "шт",
        supplier: "Алматы-Фурнитура",
        status: "Не собрано",
        fact: 0,
        note: "",
        clients: [
          { name: "ТОО 'Каспий-Строй'", order: "КС-91", qty: 4, phone: "+77075554433" }
        ]
      }
    ]
  },
    {
    requisition_id: 104,
    creation_date: "2025-08-07",
    required_date: "2025-08-09",
    manager: "Ахметов Б.С.",
    status: "Не собрано",
    priority: "Низкий",
    driver: "Султанов Р.К.",
    items: [
      {
        item_id: 17,
        material: "ЛДСП 16мм 'Белый'",
        quantity: 30,
        unit: "лист",
        supplier: "КазПлитТорг",
        status: "Не собрано",
        fact: 0,
        note: "",
        clients: [
          { name: "ТОО 'Жана Курылыс'", order: "ЖК-505", qty: 30, phone: "+77778889900" }
        ]
      },
      {
        item_id: 18,
        material: "Кромка ПВХ 0.4мм 'Белый'",
        quantity: 200,
        unit: "м",
        supplier: "ЕвроСтрой-Азия",
        status: "Не собрано",
        fact: 0,
        note: "",
        clients: [
          { name: "ТОО 'Жана Курылыс'", order: "ЖК-505", qty: 200, phone: "+77778889900" }
        ]
      },
      {
        item_id: 19,
        material: "Петли Hettich без доводчика",
        quantity: 100,
        unit: "шт",
        supplier: "Алматы-Фурнитура",
        status: "Собрано полностью",
        fact: 100,
        note: "",
        clients: [
          { name: "ИП Омарова А.Т.", order: "О-35", qty: 100, phone: "+77081234567" }
        ]
      },
      {
        item_id: 20,
        material: "ДВП ламинированное 3мм 'Венге'",
        quantity: 10,
        unit: "лист",
        supplier: "Барыс-Снаб",
        status: "Не собрано",
        fact: 0,
        note: "Ожидается поставка",
        clients: [
          { name: "ТОО 'Ару-Мебель'", order: "А-119", qty: 10, phone: "+77011112233" }
        ]
      },
      {
        item_id: 21,
        material: "Зеркало серебро 4мм",
        quantity: 5,
        unit: "м2",
        supplier: "ЕвроСтрой-Азия",
        status: "Не собрано",
        fact: 0,
        note: "",
        clients: [
          { name: "ТОО 'Нур-Дизайн'", order: "НД-053", qty: 5, phone: "+77056667788" }
        ]
      }
    ]
  }
];
window.statuses = ["Не собрано", "Частично", "Собрано полностью"];
window.priorities = ["Высокий", "Средний", "Низкий"];