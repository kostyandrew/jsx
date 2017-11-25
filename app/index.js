import Eagle, { Component } from './eagle';

let lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ligula ipsum, congue ac dui vitae, ultricies
vulputate turpis. Pellentesque ornare porta sapien eu posuere. Etiam tincidunt vulputate feugiat. Cras
commodo gravida venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque
commodo condimentum leo, quis blandit nisi tincidunt eget. Duis ac risus a mi volutpat pulvinar id vitae
dui. Sed lobortis magna eget enim elementum lobortis. Donec a luctus nulla. Sed non dui vitae ante molestie
elementum a non est. In hac habitasse platea dictumst. Sed vehicula metus mauris, ac tristique lectus mattis
eget. Sed ligula libero, lobortis non mattis eget, tristique eget magna. Donec egestas sollicitudin nulla
nec eleifend.`;


class Lipsum extends Component {
    constructor(props) {
        super(props);

        this.state.name = this.props.name;

        this.state.date = new Date();

        window.setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    render() {
        return (
            <div>
                <b>Hello, {this.props.name}</b>
                <br/>
                {this.state.date.toLocaleString()}
                <br/>
                {this.props.children}
            </div>
        );
    }
}

class State extends Component {
    constructor(props) {
        super(props);
        this.state.counter = this.props.start;
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({ counter: this.state.counter - 1 })
                }}>
                    -
                </button>
                <button onClick={() => {
                    this.setState({ counter: this.state.counter + 1 })
                }}>
                    +
                </button>
                counter: {this.state.counter}
            </div>
        )
    }
}

Eagle.render(
    (
        <div>
            <h1 style="color:red">Hello, World!</h1>
            <Lipsum name="Vova">{lipsum}</Lipsum>
            <State start={45}/>
        </div>
    ),
    document.getElementsByTagName('body')[0]
);
