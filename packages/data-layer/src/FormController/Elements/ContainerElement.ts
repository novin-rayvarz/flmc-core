import IElement, { ValidationResult, areElements } from '../IElement';
import { ElementTypes } from './ElementTypes';
import { Observable, BehaviorSubject, isObservable } from 'rxjs';

export enum Direction {
  Column = 0,
  Row = 1,
}

export class ContainerElement implements IElement {
  dispose(): void {}

  get type(): string {
    return ElementTypes.Container;
  }

  childrenContainer!: BehaviorSubject<IElement[]>;

  validate(): ValidationResult {
    return new ValidationResult(this.childrenContainer.value.map(i => i.validate().isValid).reduce((p, c) => p && c));
  }

  private childrenR(children: IElement[]): ContainerElement {
    if (this.childrenContainer == null) this.childrenContainer = new BehaviorSubject<IElement[]>([]);
    this.childrenContainer.next(children);
    return this;
  }

  private childrenO(children: Observable<IElement[]>): ContainerElement {
    if (this.childrenContainer == null) this.childrenContainer = new BehaviorSubject<IElement[]>([]);
    children.subscribe({
      next: v => this.childrenContainer.next(v),
    });
    return this;
  }

  children(children_: Observable<IElement[]> | IElement[]): ContainerElement {
    if (areElements(children_)) return this.childrenR(children_);
    if (isObservable(children_)) return this.childrenO(children_);
    throw new Error('given children type is not support');
  }

  // direction

  directionValue = new BehaviorSubject<Direction>(Direction.Column);

  private directionR(dir: Direction): ContainerElement {
    this.directionValue.next(dir);
    return this;
  }

  private directionO(dir: Observable<Direction>): ContainerElement {
    dir.subscribe({
      next: v => this.directionValue.next(v),
    });
    return this;
  }

  direction(dir: Observable<Direction> | Direction): ContainerElement {
    if (typeof dir === 'number') return this.directionR(dir);
    if (isObservable(dir)) return this.directionO(dir);
    throw new Error('given dir type is not support');
  }
}

const Container = (children?: Observable<IElement[]> | IElement[]): ContainerElement => {
  let element = new ContainerElement();
  if (children) return element.children(children);
  return element;
};

export default Container;
