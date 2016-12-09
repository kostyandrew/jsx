export default class Component {
    constructor(props) {
        this.props = props;
        this.state = {};

        return new Proxy(this, {
            set: function (obj) {
                obj.replace();
                return true;
            }
        });
    }

    mount() {
        let renderElement = this.render();
        renderElement['data-id'] = this.props['data-id'];

        return renderElement;
    }

    replace() {
        let id = this.props['data-id'];

        let elem = Array.prototype.filter.call(document.querySelectorAll('*'), (elem) => {
            return elem['data-id'] === id;
        });

        if (elem.length) {
            elem[0].replaceWith(this.mount());
        }

    }
}
