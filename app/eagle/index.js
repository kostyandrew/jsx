export default {
    createElement: function (object, props, ...child) {
        let element = null;
        if (typeof object === 'string') {
            element = document.createElement(object);
            child.forEach((childElement) => {
                if (typeof childElement === 'string') {
                    childElement = document.createTextNode(childElement);
                }
                element.appendChild(childElement);
            });
            element = Object.assign(element, props);
        }
        return element;
    },
    render: function (element, ...child) {
        child.forEach((childElement) => {
            element.appendChild(childElement);
        });
    }
}