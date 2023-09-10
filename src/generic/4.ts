/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IComponentProps {
  title: string;
}

class Component<T extends IComponentProps> {
  constructor(public props: T) {}
}

class Page extends Component<IComponentProps> {
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
