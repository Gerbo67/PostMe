const firebaseConfig = {
  apiKey: "AIzaSyDRWucoz4SWY8c0R0P8Xebm4X3F5e-zofA",
  authDomain: "postme-app-81b88.firebaseapp.com",
  projectId: "postme-app-81b88",
  storageBucket: "postme-app-81b88.appspot.com",
  messagingSenderId: "760549923692",
  appId: "1:760549923692:web:37aeaef99a43db95e7f149",
  measurementId: "G-9GMG5ZLMMY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// Vamos a configurar dayjs

dayjs.extend(window.dayjs_plugin_relativeTime);
const locale = {
  name: 'es',
  monthsShort: 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_'),
  weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
  weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
  weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
  months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
  weekStart: 1,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D [de] MMMM [de] YYYY',
    LLL: 'D [de] MMMM [de] YYYY H:mm',
    LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
  },
  relativeTime: {
    future: 'en %s',
    past: 'hace %s',
    s: 'unos segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    M: 'un mes',
    MM: '%d meses',
    y: 'un año',
    yy: '%d años'
  },
  ordinal: (n) => `${n}º`
};
dayjs.locale(locale, null, true);
dayjs.locale('es');