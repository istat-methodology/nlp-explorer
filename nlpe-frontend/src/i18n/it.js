import { it } from 'vuetify/locale'

export default {
  $vuetify: {
    ...it,
    dataIterator: {
      rowsPerPageText: 'Elementi per pagina:',
      pageText: '{0}-{1} di {2}'
    }
  },
  app: {
    title: 'Data browser'
  },
  landing: {
    title: 'Data browser (it)'
  }
}
