/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface IComponentProps {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<IComponentProps> {
  pageInfo():void  {
    console.log(this.props.title);
  }
}

const pageProps: IComponentProps = { title: "My Page" };
const myPage = new Page(pageProps);
myPage.pageInfo()

export {};
