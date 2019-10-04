import { quotes } from './quotes';

export class QuotePicker {
  constructor() {

  }

  pickQuote() {
    const index = Math.ceil(Math.random() * quotes.length) - 1;

    return quotes[index];
  }
}
