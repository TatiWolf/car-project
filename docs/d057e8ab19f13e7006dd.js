// document.addEventListener('DOMContentLoaded', ()=> {
//   localStorage.getItem()
// })

document.addEventListener('DOMContentLoaded', function () {
  var data = template2[0];
  document.getElementById('title1').textContent = data.title1;
  document.getElementById('subtitle1').textContent = data.subtitle1;
  document.getElementById('paragraph1').textContent = data.paragraph1;
  document.getElementById('title2').textContent = data.title2;
  document.getElementById('points1').innerHTML = data.points1.map(function (point) {
    return "\n<div style='display: flex; align-items: center;' class='mt-20'>\n<img class='mr-20' src='../../assets/img/icon/circle.svg' alt=''>\n<li > ".concat(point, "</li>\n</div>\n");
  }).join('');
  document.getElementById('title3').textContent = data.title3;
  document.getElementById('subtitle2').textContent = data.subtitle2;
  document.getElementById('subtitle3').textContent = data.subtitle3;
  document.getElementById('paragraph2').textContent = data.paragraph2;
  document.getElementById('paragraph4').textContent = data.paragraph4;
  document.getElementById('subtitle4').textContent = data.subtitle4;
  document.getElementById('points2').innerHTML = data.points2.map(function (point, index) {
    if (index + 1 <= 4) {
      return "<div style='display: flex; align-items: flex-start; margin-top: 20px;'><div class='text-wrap mr-20'>".concat(index + 1, "</div><li>").concat(point, "</li></div>");
    } else {
      return '';
    }
  }).join('');
  document.getElementById('points22').innerHTML = data.points2.map(function (point, index) {
    if (index + 1 > 4) {
      return "<div style='display: flex; align-items: flex-start; margin-top: 20px;'><div class='text-wrap mr-20'>".concat(index + 1, "</div><li>").concat(point, "</li></div>");
    } else {
      return '';
    }
  }).join('');
  document.getElementById('title4').textContent = data.title4;
  document.getElementById('subtitle5').textContent = data.subtitle5;
  document.getElementById('points3').innerHTML = data.points3.map(function (point) {
    return "\n<div style='display: flex; align-items: center;' class='mt-20'>\n  <img class='mr-20' src='../../assets/img/icon/circle.svg' alt=''>\n<li > ".concat(point, "</li></div>\n");
  }).join('');
  document.getElementById('paragraph5').innerHTML = data.paragraph5;
  document.getElementById('paragraph6').innerHTML = data.paragraph6;
  document.getElementById('title5').textContent = data.title5;
  document.getElementById('subtitle6').textContent = data.subtitle6;
  document.getElementById('paragraph7').textContent = data.paragraph7;
  document.getElementById('subtitle7').textContent = data.subtitle7;
  document.getElementById('points4').innerHTML = data.points4.map(function (point) {
    return "\n<div style='display: flex; align-items: center;' class='mt-20'><img class='mr-20' src='../../assets/img/icon/circle.svg' alt=''><li > ".concat(point, "</li></div>\n");
  }).join('');
  document.getElementById('subtitle8').textContent = data.subtitle8;
  document.getElementById('subtitle9').textContent = data.subtitle9;
  document.getElementById('paragraph8').textContent = data.paragraph8;
});
var template2 = [{
  id: 1,
  title1: 'ЧТО ДЕЛАТЬ, ПРИ ДТП?',
  subtitle1: 'Дорожно-транспортные происшествия (ДТП) могут случиться с каждым из нас, и важно знать, как правильно поступить в подобной ситуации.',
  paragraph1: 'Есть определённые правила и процедуры, которые помогут обеспечить безопасность участников, а также корректное оформление документов. В данной статье мы рассмотрим основные шаги, которые следует предпринять при ДТП.',
  img1: '../../assets/img/template-1/Rectangle%2099.png',
  title2: 'Обязанности водителя при ДТП по правилам дорожного движения?',
  points1: ['включить аварийную сигнализацию;', 'выставить знак аварийной остановки: не менее 15 метров от ДТП в населённых пунктах и не менее 30 метров за городом;', 'проверить, имеются ли пострадавшие среди остальных участников происшествия;', 'не перемещать предметы, имеющие отношение к ДТП — осколки фар, части бампера и т.д. — все оставьте как есть.'],
  title3: 'Порядок действий водителей при ДТП',
  subtitle2: 'Если ДТП без пострадавших',
  subtitle3: 'Если в ДТП есть пострадавшие',
  paragraph2: 'Если ущерб авто несерьёзный, тогда допускается оформление европротокола. По нему можно получить возмещение через страховую до 100 или даже до 400 тысяч рублей. Об этом подробно расскажем ниже. Важное условие европротокола — оба водителя единодушны в том, кто виноват в аварии.',
  paragraph4: 'Сразу звони в скорую по номеру 103 или 112, указывая точный адрес. При ДТП за городом, диспетчер решит, стоит ли отправлять пострадавших в больницу на попутном транспорте. Дорожная полиция приедет для фиксации ситуации.',
  subtitle4: 'Если виновник ДТП без страховки',
  points2: ['Попросите его паспорт, сфотографируйте документ. Человек вправе отказаться. Тогда возьмите данные из протокола ГИБДД.', 'Поинтересуйтесь, намерен ли виновник ДТП компенсировать ущерб и в каком размере.', 'Выясните сроки и порядок компенсации: проще говоря, когда виновник оплатит ремонт.', 'Человек может сразу же согласиться перевести вам деньги или отдать наличными.', 'Составьте расписку. Документ пишется в свободной форме, однако важно, чтобы в нем было указано, между кем и кем он составлен (с указанием паспортных данных), дата, причина, размер компенсации и срок возмещения. </br> Теоретически виновник может отказаться платить на месте. Тогда укажите в расписке, до какого времени он обязан перевести деньги на оплату ущерба.', 'Пострадавший после получения компенсации также пишет расписку о том, что деньги принял, претензий не имеет.'],
  title4: 'Оформление европротокола',
  subtitle5: 'Можно  оформить аварию, если:',
  img2: '../',
  points3: ['в аварию попали только два автомобиля;', 'оба водителя застрахованы по ОСАГО;', 'в ДТП нет пострадавших;', 'авария никому не причинила ущерб, кроме двух участников ДТП;', '  не задета дорожная инфраструктура (столбы, светофоры, заборы), а также в целости личное имущество водителей (смартфоны, прочая техника и вещи);', 'у участников аварий нет разногласий по поводу обстоятельств ДТП и полученных повреждений;', 'один из участников аварии в будущем не хочет получить выплату по КАСКО;', 'сумма ущерба не превышает 400 тысяч рублей.'],
  paragraph5: 'В европротоколе обязательно должен быть указан один виновник. Нельзя писать «виноваты оба». Один участник признает вину в извещении о ДТП, другой прописывает — «в аварии не виноват».<br><br>В бланке европротокола первый лист оригинал, а второй — оттиск, копия. Но такого извещения о ДТП у вас может и не быть. Например, если вы покупали страховку через интернет. В этом случае будут два одинаковых бланка на А4. Заполняйте их идентично. Не допускайте ошибок и исправлений. При обилии помарок лучше переписать документ на чистовую.<br><br>Оригинал протокола сохраняет у себя потерпевший — тот, кто невиновен в аварии. Сфотографируйте документы виновника: водительские права, СТС и полис ОСАГО. Это необязательно, но может в будущем избавить от некоторых проблем.',
  paragraph6: 'Виновник аварии отвозит копию европротокола после ДТП в свою страховую. На это даётся пять рабочих дней. На протяжении последующих 15 дней нельзя ремонтировать повреждения, которые авто получили в аварии.<br><br>Если боитесь неверно заполнить бумаги, лучше вызвать аварийного комиссара. Этот специалист поможет сделать правильные фото и грамотно внести все в документы.<br><br>Если вы заполняете европротокол на бумажном бланке, тогда компенсация ущерба не превысит 100 тысяч рублей. В 2021 году по всей стране начало работу приложение для смартфонов «Помощник ОСАГО». Через него имеет смысл оформлять ДТП, ущерб от которых достигает до 400 тысяч рублей. Также оба участника ДТП должны быть зарегистрированы на портале «Госуслуг».',
  title5: 'Если у водителей есть разногласия по обстоятельствам ДТП',
  subtitle6: 'Ехать для оформления в отдел ГИБДД ',
  paragraph7: 'В этом случае водители на месте описывают обстоятельства аварии, составляют схему, фиксируют на фото и видео расположение автомобилей, повреждения и следы, и с этими документами незамедлительно направляются в подразделение ГИБДД.',
  subtitle7: 'Обязательно нужно:',
  points4: ['заполнить извещение о ДТП;', 'связаться со своей страховой компанией и сообщить о страховом случае;', 'убедиться, что другие участники ДТП сделали тоже самое.'],
  subtitle8: 'Дожидаться полиции',
  subtitle9: 'После оформления ДТП вы должны получить на руки протокол об административном правонарушении, постановление по делу об административном правонарушении или определение об отказе в возбуждении дела. Внимательно ознакомьтесь с протоколом, прежде чем его подписывать, укажите своё несогласие, если такое имеется. Помните, что в случае несогласия с постановлениями у вас есть всего лишь 10 суток со дня получения на их обжалование.',
  paragraph8: 'Соблюдение предложенных рекомендаций поможет эффективно справиться с последствиями ДТП и обеспечить гармоничный ход дальнейших процессов. Будь аккуратен на дороге!'
}];