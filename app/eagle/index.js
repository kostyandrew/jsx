import Component from './component';

let _id = 0;

function deepElement(child) {
    child = child.map((childElement) => {
        if (typeof childElement === 'string') {
            return document.createTextNode(childElement);
        } else if (childElement instanceof Array) {
            return deepElement(childElement);
        }
        return childElement;
    });
    let result = document.createDocumentFragment();
    child.forEach((childElement) => {
        result.appendChild(childElement)
    });
    return result;
}

export function createElement(object, props, ...child) {
    let element = null;
    if (props == null) {
        props = {};
    }
    props['data-id'] = ++_id;
    if (typeof object === 'string') {
        element = document.createElement(object);
        element.appendChild(deepElement(child));
        element = Object.assign(element, props);
    } else if (typeof object === 'function') {
        props.children = child;
        element = new object(props);
        element = element.render();
    }
    return element;
}
export function render(child, element) {
    element.appendChild(child);
}

export default {render, createElement, Component};