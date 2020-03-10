import { VantComponent } from '../common/component';
import { touch } from '../mixins/touch';
import { isDef, addUnit } from '../common/utils';
VantComponent({
    mixins: [touch],
    classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
    relation: {
        name: 'tab',
        type: 'descendant',
        linked(target) {
            target.index = this.children.length;
            this.children.push(target);
            this.updateTabs();
        },
        unlinked(target) {
            this.children = this.children
                .filter((child) => child !== target)
                .map((child, index) => {
                child.index = index;
                return child;
            });
            this.updateTabs();
        }
    },
    props: {
        color: {
            type: String,
            observer: 'setLine'
        },
        sticky: Boolean,
        animated: {
            type: Boolean,
            observer() {
                this.setTrack();
                this.children.forEach((child) => child.updateRender());
            }
        },
        swipeable: Boolean,
        lineWidth: {
            type: [String, Number],
            value: -1,
            observer: 'setLine'
        },
        lineHeight: {
            type: [String, Number],
            value: -1,
            observer: 'setLine'
        },
        titleActiveColor: String,
        titleInactiveColor: String,
        active: {
            type: [String, Number],
            value: 0,
            observer(name) {
                if (name !== this.getCurrentName()) {
                    this.setCurrentIndexByName(name);
                }
            }
        },
        type: {
            type: String,
            value: 'line'
        },
        border: {
            type: Boolean,
            value: true
        },
        ellipsis: {
            type: Boolean,
            value: true
        },
        duration: {
            type: Number,
            value: 0.3
        },
        zIndex: {
            type: Number,
            value: 1
        },
        swipeThreshold: {
            type: Number,
            value: 4,
            observer(value) {
                this.setData({
                    scrollable: this.children.length > value || !this.data.ellipsis
                });
            }
        },
        offsetTop: {
            type: Number,
            value: 0
        },
        lazyRender: {
            type: Boolean,
            value: true
        },
    },
    data: {
        tabs: [],
        lineStyle: '',
        scrollLeft: 0,
        scrollable: false,
        trackStyle: '',
        currentIndex: null,
        container: null
    },
    beforeCreate() {
        this.children = [];
    },
    mounted() {
        this.setData({
            container: () => this.createSelectorQuery().select('.van-tabs')
        });
        this.setLine(true);
        this.setTrack();
        this.scrollIntoView();
    },
    methods: {
        updateTabs() {
            var { children = [], data } = this;
            this.setData({
                tabs: children.map((child) => child.data),
                scrollable: this.children.length > data.swipeThreshold || !data.ellipsis
            });
            this.setCurrentIndexByName(this.getCurrentName() || data.active);
        },
        trigger(eventName) {
            var { currentIndex } = this.data;
            var child = this.children[currentIndex];
            if (!isDef(child)) {
                return;
            }
            this.$emit(eventName, {
                index: currentIndex,
                name: child.getComputedName(),
                title: child.data.title
            });
        },
        onTap(event) {
            var { index } = event.currentTarget.dataset;
            var child = this.children[index];
            if (child.data.disabled) {
                this.trigger('disabled');
            }
            else {
                this.setCurrentIndex(index);
                wx.nextTick(() => {
                    this.trigger('click');
                });
            }
        },
        // correct the index of active tab
        setCurrentIndexByName(name) {
            var { children = [] } = this;
            var matched = children.filter((child) => child.getComputedName() === name);
            if (matched.length) {
                this.setCurrentIndex(matched[0].index);
            }
        },
        setCurrentIndex(currentIndex) {
            var { data, children = [] } = this;
            if (!isDef(currentIndex) ||
                currentIndex >= children.length ||
                currentIndex < 0) {
                return;
            }
            children.forEach((item, index) => {
                var active = index === currentIndex;
                if (active !== item.data.active || !item.inited) {
                    item.updateRender(active, this);
                }
            });
            if (currentIndex === data.currentIndex) {
                return;
            }
            var shouldEmitChange = data.currentIndex !== null;
            this.setData({ currentIndex });
            wx.nextTick(() => {
                this.setLine();
                this.setTrack();
                this.scrollIntoView();
                this.trigger('input');
                if (shouldEmitChange) {
                    this.trigger('change');
                }
            });
        },
        getCurrentName() {
            var activeTab = this.children[this.data.currentIndex];
            if (activeTab) {
                return activeTab.getComputedName();
            }
        },
        setLine(skipTransition) {
            if (this.data.type !== 'line') {
                return;
            }
            var { color, duration, currentIndex, lineWidth, lineHeight } = this.data;
            this.getRect('.van-tab', true).then((rects = []) => {
                var rect = rects[currentIndex];
                if (rect == null) {
                    return;
                }
                var width = lineWidth !== -1 ? lineWidth : rect.width / 2;
                var height = lineHeight !== -1
                    ? `height: ${addUnit(lineHeight)}; border-radius: ${addUnit(lineHeight)};`
                    : '';
                let left = rects
                    .slice(0, currentIndex)
                    .reduce((prev, curr) => prev + curr.width, 0);
                left += (rect.width - width) / 2;
                var transition = skipTransition
                    ? ''
                    : `transition-duration: ${duration}s; -webkit-transition-duration: ${duration}s;`;
                this.setData({
                    lineStyle: `
            ${height}
            width: ${addUnit(width)};
            background-color: ${color};
            -webkit-transform: translateX(${left}px);
            transform: translateX(${left}px);
            ${transition}
          `
                });
            });
        },
        setTrack() {
            var { animated, duration, currentIndex } = this.data;
            if (!animated) {
                return;
            }
            this.setData({
                trackStyle: `
          transform: translate3d(${-100 * currentIndex}%, 0, 0);
          -webkit-transition-duration: ${duration}s;
          transition-duration: ${duration}s;
        `
            });
        },
        // scroll active tab into view
        scrollIntoView() {
            var { currentIndex, scrollable } = this.data;
            if (!scrollable) {
                return;
            }
            Promise.all([
                this.getRect('.van-tab', true),
                this.getRect('.van-tabs__nav')
            ]).then(([tabRects, navRect]) => {
                var tabRect = tabRects[currentIndex];
                var offsetLeft = tabRects
                    .slice(0, currentIndex)
                    .reduce((prev, curr) => prev + curr.width, 0);
                this.setData({
                    scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
                });
            });
        },
        onTouchScroll(event) {
            this.$emit('scroll', event.detail);
        },
        onTouchStart(event) {
            if (!this.data.swipeable)
                return;
            this.touchStart(event);
        },
        onTouchMove(event) {
            if (!this.data.swipeable)
                return;
            this.touchMove(event);
        },
        // watch swipe touch end
        onTouchEnd() {
            if (!this.data.swipeable)
                return;
            var { tabs, currentIndex } = this.data;
            var { direction, deltaX, offsetX } = this;
            var minSwipeDistance = 50;
            if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
                if (deltaX > 0 && currentIndex !== 0) {
                    this.setCurrentIndex(currentIndex - 1);
                }
                else if (deltaX < 0 && currentIndex !== tabs.length - 1) {
                    this.setCurrentIndex(currentIndex + 1);
                }
            }
        }
    }
});
