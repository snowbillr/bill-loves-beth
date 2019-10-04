import { quotes } from './quotes';

export class QuotePicker {
  pickQuote() {
    const index = Math.ceil(Math.random() * quotes.length) - 1;

    return quotes[index];
  }
}
