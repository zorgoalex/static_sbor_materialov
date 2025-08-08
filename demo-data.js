window.demoRequisitions = [
  {
    requisition_id: 101,
    creation_date: "2025-08-05",
    required_date: "2025-08-06",
    manager: "Воронин Д.В.",
    status: "Частично",
    priority: "Высокий",
    driver: "Климов П.П.",
    items: [
      {
        item_id: 1,
        material: "МДФ KRONOSPAN 16мм",
        quantity: 12,
        unit: "лист",
        supplier: "ТоргСнаб",
        status: "Собрано полностью",
        fact: 12,
        note: "",
        clients: [
          { name: "ООО 'СтройСервис'", order: "С-245", qty: 4, phone: "+79251112233" },
          { name: "ООО 'МебельГрад'", order: "С-252", qty: 5, phone: "+79264445566" },
          { name: "ИП Сидоров", order: "С-256", qty: 3, phone: "+79277778899" }
        ]
      },
      {
        item_id: 2,
        material: "Кромка ПВХ 0.4мм белая",
        quantity: 30,
        unit: "м",
        supplier: "Европласт",
        status: "Частично",
        fact: 18,
        note: "Остаток у поставщика 12м",
        clients: [
          { name: "ООО 'СтройСервис'", order: "С-245", qty: 10, phone: "+79251112233" },
          { name: "ИП Сидоров", order: "С-256", qty: 8, phone: "+79277778899" },
          { name: "ООО 'Рога и Копыта'", order: "С-261", qty: 12, phone: "+79281234567" }
        ]
      }
    ]
  },
  {
    requisition_id: 102,
    creation_date: "2025-08-06",
    required_date: "2025-08-07",
    manager: "Соловьев П.П.",
    status: "Собрано полностью",
    priority: "Средний",
    driver: "Климов П.П.",
    items: [
      {
        item_id: 3,
        material: "ДВП 3мм",
        quantity: 20,
        unit: "лист",
        supplier: "ТоргСнаб",
        status: "Собрано полностью",
        fact: 20,
        note: "",
        clients: [
          { name: "ИП Петров", order: "С-331", qty: 10, phone: "+79109876543" },
          { name: "ИП Кузнецов", order: "С-332", qty: 10, phone: "+79111239876" }
        ]
      }
    ]
  },
  {
    requisition_id: 103,
    creation_date: "2025-08-06",
    required_date: "2025-08-08",
    manager: "Миронова Л.А.",
    status: "Не собрано",
    priority: "Низкий",
    driver: "Климов П.П.",
    items: [
      {
        item_id: 4,
        material: "ЛДСП EGGER Серый 18мм",
        quantity: 7,
        unit: "лист",
        supplier: "Европласт",
        status: "Не собрано",
        fact: 0,
        note: "",
        clients: [
          { name: "ООО 'ИнтерьерПлюс'", order: "С-412", qty: 3, phone: "+79031122334" },
          { name: "ООО 'Дом Мебели'", order: "С-415", qty: 4, phone: "+79055566778" }
        ]
      }
    ]
  }
];
window.statuses = ["Не собрано", "Частично", "Собрано полностью"];
window.priorities = ["Высокий", "Средний", "Низкий"];