import { link } from '../mixins/link';
import { VantComponent } from '../common/component';
import { addUnit } from '../common/utils';
VantComponent({
    relation: {
        name: 'grid',
        type: 'ancestor',
        linked(parent) {
            this.parent = parent;
        }
    },
    mixins: [link],
    props: {
        icon: String,
        dot: Boolean,
        info: null,
        text: String,
        useSlot: Boolean
    },
    mounted() {
        this.updateStyle();
    },
    methods: {
        updateStyle() {
            if (!this.parent) {
                return;
            }
            var { data, children } = this.parent;
            var { columnNum, border, square, gutter, clickable, center } = data;
            var width = `${100 / columnNum}%`;
            var styleWrapper = [];
            styleWrapper.push(`width: ${width}`);
            if (square) {
                styleWrapper.push(`padding-top: ${width}`);
            }
            if (gutter) {
                var gutterValue = addUnit(gutter);
                styleWrapper.push(`padding-right: ${gutterValue}`);
                var index = children.indexOf(this);
                if (index >= columnNum) {
                    styleWrapper.push(`margin-top: ${gutterValue}`);
                }
            }
            let contentStyle = '';
            if (square && gutter) {
                var gutterValue = addUnit(gutter);
                contentStyle = `
          right: ${gutterValue};
          bottom: ${gutterValue};
          height: auto;
        `;
            }
            this.setData({
                style: styleWrapper.join('; '),
                contentStyle,
                center,
                border,
                square,
                gutter,
                clickable
            });
        },
        onClick() {
            this.$emit('click');
            this.jumpLink();
        }
    }
});
