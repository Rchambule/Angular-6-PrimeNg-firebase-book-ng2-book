import { IBookDetails, IResponse, Idata } from '../models/viewModels';
import { Observable } from 'rxjs';

export interface IBookService {
    getPosts: () => Observable<Idata[]>;
    getBooksFromFirebase: () => Observable<IBookDetails[]>;
    getBooksFromJSON: () => Observable<IBookDetails[]>;
}

