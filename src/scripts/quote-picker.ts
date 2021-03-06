import { quotes } from './quotes';

export class QuotePicker {
  private availableQuotes: string[] = [];
  private usedQuotes: string[] = [];

  pickQuote() {
    if (this.availableQuotes.length === 0) {
      this.availableQuotes = [...quotes];
      this.usedQuotes = [];
    }

    const index = Math.ceil(Math.random() * this.availableQuotes.length) - 1;

    const quote = this.availableQuotes.splice(index, 1)[0];
    this.usedQuotes.push(quote);

    return quote;
  }
}
