import { mergeData } from "../../utils";

export var props = {
    tag: {
        type: String,
        default: "div"
    },
    fluid: {
        type: Boolean,
        default: false
    }
};

export default {
    functional: true,
    props: props,
    render: function render(h, _ref) {
        var props = _ref.props,
            data = _ref.data,
            children = _ref.children;

        return h(props.tag, mergeData(data, {
            class: {
                'container': !props.fluid,
                'container-fluid': props.fluid
            }
        }), children);
    }
};