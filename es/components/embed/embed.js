function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { mergeData } from "../../utils";
import { arrayIncludes } from "../../utils/array";

export var props = {
    type: {
        type: String,
        default: "iframe",
        validator: function validator(str) {
            return arrayIncludes(["iframe", "embed", "video", "object", "img", "b-img", "b-img-lazy"], str);
        }
    },
    tag: {
        type: String,
        default: "div"
    },
    aspect: {
        type: String,
        default: "16by9"
    }
};

export default {
    functional: true,
    props: props,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, {
            ref: data.ref,
            staticClass: "embed-responsive",
            class: _defineProperty({}, "embed-responsive-" + props.aspect, Boolean(props.aspect))
        }, [h(props.type, mergeData(data, { ref: '', staticClass: "embed-responsive-item" }), children)]);
    }
};