import {CardStorage} from '../../card-storage/entities/card-storage';
import {Article} from '../../articles/entities/article';

export class StockItem {
  id: number;
  cardCondition: string;
  cardValue: number;
  cardValueWhenSold: number;
  inShop: boolean;
  comments: string;
  cardStorage: CardStorage;
  article: Article;
}
