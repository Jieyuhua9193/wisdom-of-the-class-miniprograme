import { VantComponent } from '../common/component';
VantComponent({
    relation: {
        name: 'col',
        type: 'descendant',
        linked(target) {
            if (this.data.gutter) {
                target.setGutter(this.data.gutter);
            }
        }
    },
    props: {
        gutter: Number
    },
    watch: {
        gutter: 'setGutter'
    },
    mounted() {
        if (this.data.gutter) {
            this.setGutter();
        }
    },
    methods: {
        setGutter() {
            var { gutter } = this.data;
            var margin = `-${Number(gutter) / 2}px`;
            var style = gutter
                ? `margin-right: ${margin}; margin-left: ${margin};`
                : '';
            this.setData({ style });
            this.getRelationNodes('../col/index').forEach(col => {
                col.setGutter(this.data.gutter);
            });
        }
    }
});
