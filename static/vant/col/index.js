import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'row',
        type: 'ancestor'
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        style: ''
    },
    methods: {
        setGutter(gutter) {
            var padding = `${gutter / 2}px`;
            var style = gutter ? `padding-left: ${padding}; padding-right: ${padding};` : '';
            if (style !== this.data.style) {
                this.setData({ style });
            }
        }
    }
});
